import { useEffect, useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from 'firebase/auth';
import initializeAuthentication from '../Components/Login/Firebase/firebase.init';

//initializing firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [products, setProducts] = useState([]);

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name, role: 'user' };

        setUser(newUser);
        //save user to the database
        saveUser(email, name, 'POST');
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  // to check admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //adimn-----
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  //to make user for db
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    admin,
    isLoading,
    authError,
    products,
    setProducts,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };
};
export default useFirebase;

//const saveUser = (email, displayName, method) => {
//     const user = { email, displayName };
//     fetch('https://salty-hamlet-93150.herokuapp.com/users', {
//       method: method,
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     }).then();
//   };

// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import initializeAuthentication from '../Component/Login/Firebase/firebase.init';

// initializeAuthentication();

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   const [admin, setAdmin] = useState(false);

//   const auth = getAuth();

//   const signInUsingGoogle = () => {
//     setIsLoading(true);
//     const googleProvider = new GoogleAuthProvider();

//     return signInWithPopup(auth, googleProvider).finally(() =>
//       setIsLoading(false)
//     );
//   };

//   // observe user state change
//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({});
//       }
//       setIsLoading(false);
//     });

//     return () => unsubscribed;
//   }, [auth]);

//   const logout = () => {
//     setIsLoading(true);
//     signOut(auth)
//       .then(() => {})
//       .finally(() => setIsLoading(false));
//   };

//   const saveGoogleUser = (email, displayName) => {
//     const user = { email, displayName };
//     fetch('http://localhost:5000/users', {
//       method: 'PUT',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     }).then();
//   };

//   // checking is admin or not
//   useEffect(() => {
//     fetch(`http://localhost:5000/users/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setAdmin(data.admin))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [user?.email]);

//   return {
//     user,
//     admin,
//     signInUsingGoogle,
//     logout,
//     isLoading,
//     saveGoogleUser,
//   };
// };

// export default useFirebase;
