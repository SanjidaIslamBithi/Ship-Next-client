
import React from 'react';

const Search = () => {
    return (
        <div>
            hi Search
        </div>
    );
};

export default Search;

// import React from 'react';

// const Search = () => {
//   const searchField = document.getElementById('search-field');
//   const searchText = searchField.value;
//   console.log(searchText);
//   //clring after each search
//   searchField.value = '';
//   //url api load
//   const url = `https://openlibrary.org/search.json?q=${searchText}`;
//   // console.log(url);

//   //fetch
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displaySearchResult(data.docs, data.numFound));
// };
// // function for book result
// const displaySearchResult = (books, numList) => {
//   const searchResult = document.getElementById('search-result');
//   // Condition for if get result
//   // if not found return massange no found
//   if (numList === 0) {
//     const numBooks = document.getElementById('book-foundlist');
//     numBooks.innerHTML = `
//         <h1>Search is<span className="text-danger"> not </span>Found</h1>`;
//     searchResult.textContent = '';
//   } else {
//     const numBooks = document.getElementById('book-foundlist');
//     // serch-result total
//     numBooks.innerHTML = ` <h1>Search Result: ${numList}</h1>`;
//     searchResult.textContent = '';
//     // foeach start
//     books.forEach((book) => {
//       // console.log(book);
//       const div = document.createElement('div');
//       div.classNameList.add('col');
//       // images +writtings in inner html
//       div.innerHTML = `
//             <div className="card h-100">
//                 <img src="https://covers.openlibrary.org/b/id/${
//                   book.cover_i
//                 }-M.jpg" className="card-img-top h-75" alt="...">
//                 <div className="card-body">
//                         <h5 className="card-title">Book Name: <span className="fw-bold">${
//                           book.title
//                         }</span></h5>
//                         <br>
    
//                         <p className="card-text">
//                         First Published year:<span className="fw-bold">${
//                           book.first_publish_year
//                         }</span> 
//                         <br>
//                         Author Name:<span className="fw-bold">${
//                           book.author_name
//                         }</span>
//                         <br>
//                         Publisher Name:<span className="fw-bold">${book.publisher.slice(
//                           0,
//                           20
//                         )}</span>
//                         </p>
                       
//                 </div>
//             </div>`;
//       // result
//       searchResult.appendChild(div);
//     });
//   }
//   return (
//     <div>
//       <h2 className='text-center text-success fw-bold'>
//         Search your items
//       </h2>
//       {/* book search area */}
//       <div className='input-group mb-3 w-50 mx-auto'>
//         <input
//           id='search-field'
//           type='text'
//           className='form-control'
//           placeholder='Search the books you want'
//           aria-label="Recipient's username"
//           aria-describedby='button-addon2'
//         />
//         <button
     
//           onClick='searchBook()'
//           className='btn btn-outline-secondary'
//           type='button'
//           id='button-search'
//         >
//           Search
//         </button>
//       </div>
//       {/* total result can be found a number */}
//       <blockquote id='book-foundlist' className='text-center'></blockquote>

//       {/* book search result  */}
//       <div
//         id='search-result'
//         className='row row-cols-1 row-cols-md-3 g-4'
//       ></div>
//     </div>
//   );
// };

// export default Search;
