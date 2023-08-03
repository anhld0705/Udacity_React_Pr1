import React from 'react'
import { shelves } from 'utils/MasterData'
import { shelfNone } from 'utils/MasterData'

function Option({ bookShelf, onChangeShelf }) {

    return (
        <div className="book-shelf-changer">
            <select value={bookShelf} onChange={onChangeShelf}>
                {
                    bookShelf !== shelfNone ?
                        <>
                            <option value="default" disabled>
                                Move to...
                            </option>
                            {
                                shelves.map(shelf => (
                                    <option key={shelf.shelfId} value={shelf.shelfId}>
                                        {shelf.shelfName}
                                    </option>
                                ))
                            }
                        </>
                        :
                        <>
                            <option value="none" disabled checked>
                                Add to...
                            </option>
                            {
                                shelves.map(shelf => (
                                    shelf.isShow && (
                                        <option key={shelf.shelfId} value={shelf.shelfId}>
                                            {shelf.shelfName}
                                        </option>
                                    )
                                ))
                            }
                        </>
                }
            </select>
        </div>
    )
}

export default Option