import { useState, useEffect } from "react";
import { getAll } from "BooksAPI";
import { shelves } from "utils/MasterData";
import { Shelf } from "components";
import { Link } from "react-router-dom";


function MainPage() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let result = await getAll()
        setBooks(result)
    }

    const getBookOfShelf = (shelfId) => {
        return books.filter(book => book.shelf === shelfId)
    }

    const handleChangeShelf = async () => {
        await fetchData()
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelves.map(shelf => (
                            shelf.isShow &&
                            <Shelf
                                shelfName={shelf.shelfName}
                                key={shelf.shelfId}
                                books={getBookOfShelf(shelf.shelfId)}
                                handleChangeShelf={handleChangeShelf}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default MainPage;
