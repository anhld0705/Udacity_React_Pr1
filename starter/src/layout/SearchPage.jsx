import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { search, getAll } from 'BooksAPI';
import { Book } from 'components';
import { shelfNone } from 'utils/MasterData';

function SearchPage() {
    const maxResults = 12

    const [query, setQuery] = useState("")
    const [books, setBooks] = useState([])

    const fetchData = async (queryChange) => {
        let arrayFetch = []
        arrayFetch.push(search(queryChange, maxResults))
        arrayFetch.push(getAll())
        let results = await Promise.all(arrayFetch)
        let queryResult = results[0] instanceof Array ? results[0] : []
        let allSavedBook = results[1] instanceof Array ? results[1] : []
        queryResult = queryResult.map(book => {
            let savedBook = allSavedBook.find(savedBook => savedBook.id === book.id)
            if (savedBook)
                book.shelf = savedBook.shelf
            else
                book.shelf = shelfNone
            return book
        })
        setBooks(queryResult)
    }

    useEffect(() => {
        if (query)
            fetchData(query)
    }, [query])



    const onChangeQuery = (event) => {
        let queryChange = event.target.value
        setQuery(queryChange)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value={query}
                        onChange={onChangeQuery}
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        books.map(book => (
                            <li key={book.id}>
                                <Book bookInfo={book} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchPage