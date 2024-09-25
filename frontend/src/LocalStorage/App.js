import { useEffect, useState } from "react";
import View from "./view";

function App() {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  //use to get Data from local Storage to show on body
  const getDatafromLocStorage = () => {
    const data = localStorage.getItem('books');
    if (data) {
      return JSON.parse(data);
    } else {
      return []
    }
  }

  //use to store all data
  const [books, setBooks] = useState(getDatafromLocStorage());
  const bookSubmitHandler = (event) => {
    event.preventDefault();
    let book = {
      isbn,
      title,
      author
    }
    setBooks([...books, book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
    
  }

  // use to store data in local storage of browser
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);


  

  return (
    <div className="appComponent">
      <h1>Book Store</h1>
      <p>all books store in browser Local Store</p>
      <div className="box-style">
        <div className='form-container box-child-style'>
          <form autoComplete='off' className="form-group" onSubmit={bookSubmitHandler}>
            <label>ISBN#</label>
            <input type="text" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
            <br />
            <label>Title</label>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <br />
            <label>Author</label>
            <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <br />
            <button type="submit" className="btn btn-success btn-md">ADD</button>
          </form>
        </div>
        <div className='view-container box-child-style'>
          {books.length > 0 &&
            <div className="table-responsive">
              <table className="table">
                <thead> <tr><th>ISBN#</th> <th>Title</th> <th>Author</th> <th>Delete</th> </tr> </thead>
                <tbody> <View books={books} setBooks={setBooks} /> </tbody>
              </table>
              <button className="btn btn-danger btn-md btn-style" onClick={() => setBooks([])}>Remove All</button>
            </div>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
