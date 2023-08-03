import { useState } from 'react'
import Option from './Option'
import { update } from 'BooksAPI'
import { shelfNone } from 'utils/MasterData'

function Book({ bookInfo, handleChangeShelf = () => { } }) {

    const [shelf, setShelf] = useState(bookInfo.shelf || shelfNone)

    const getAuthorString = () => {
        if (bookInfo.authors)
            return bookInfo.authors.join(", ")
    }

    const onChangeShelf = async (event) => {
        setShelf(event.target.value)
        await update(bookInfo, event.target.value)
        handleChangeShelf()
    }

    return (
        <div className="book">
            <div className="book-top">
                <img
                    className="book-cover"
                    src={bookInfo.imageLinks?.thumbnail}
                    alt={bookInfo.title}
                ></img>
                <Option bookShelf={shelf} onChangeShelf={onChangeShelf} />
            </div>
            <div className="book-title">{bookInfo.title}</div>
            <div className="book-authors">{getAuthorString()}</div>
        </div>
    )
}

export default Book