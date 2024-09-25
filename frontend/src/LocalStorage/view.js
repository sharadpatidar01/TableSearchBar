import React from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';

const View = ({ books, setBooks }) => {
    const deleteBook = (isbn) => {
        const filterBook = books.filter((element, index) => {
            return element.isbn !== isbn
        })
        setBooks(filterBook);
    }
    return books.map(book => (
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={() => { deleteBook(book.isbn) }}>
                <Icon icon={trash} />
            </td>
        </tr>
    ))
}
export default View;



// import React from 'react';
// import { Icon } from 'react-icons-kit';
// import { trash } from 'react-icons-kit/feather/trash';
// import {pencil} from 'react-icons-kit/fa/pencil';

// const View = ({ books, setBooks }) => {
//     const updateBook=()=>{
//         alert();
//     }
    
//     const deleteBook = (isbn) => {
//         const filterBook = books.filter((element, index) => {
//             return element.isbn !== isbn
//         })
//         setBooks(filterBook);
//     }
//     return books.map(book => (
//         <tr key={book.isbn}>
//             <td>{book.isbn}</td>
//             <td>{book.title}</td>
//             <td>{book.author}</td>
//             {/* <td className='delete-btn' onClick={() => { updateBook() }}>
//                 <Icon icon={pencil} />
//             </td> */}
//             <td className='delete-btn' onClick={() => { deleteBook(book.isbn) }}>
//                 <Icon icon={trash} />
//             </td>
//         </tr>
//     ))
// }

// export default View;

