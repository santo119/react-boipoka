import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="mt-10">
          <h2 className="text-4xl items-center text-center">Books</h2> 
          <div className="grid md:grid-cols-3 gap-5 ">
            {
                books.map((book) => <SingleBook
                key={book.bookId}
                book = {book}
                ></SingleBook>)
            }
            </div> 
        </div>
    );
};

export default Books;

/**
 * 1.store to useState the book
 * 2. useEffect
 * 3. fetch the load data
 * 4.set the data to the state
 */