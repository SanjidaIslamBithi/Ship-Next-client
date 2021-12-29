import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Shop from './Components/Shop/Shop/Shop';
import Login from './Components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Product from './Components/Shop/Product/Product';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/Shop/PlaceOrder/PlaceOrder';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import About from './Components/AboutAndContact/About/About';
import Contact from './Components/AboutAndContact/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Search from './Components/Search/Search';
import UpdateProducts from './Components/Dashboard/UpdateProducts/UpdateProducts';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>

            <PrivateRoute path='/product/:productId'>
              <Product />
            </PrivateRoute>

            <PrivateRoute path='/placeOrder/:productId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/updateProduct/:id'>
              <UpdateProducts></UpdateProducts>
            </PrivateRoute>

            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
