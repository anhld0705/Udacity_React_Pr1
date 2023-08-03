# MyReads Project
This project is built for learning Udacity. In this project we can know how to manage state, handle event in each component in React. Main function of this project is managing reading book. In this, we can move a book to one shelf or remove it from one shelf. We can also search book and move it to one shelf.

## Authors
- Tran Nhat Quang (QuangTN14)

## Installing
- install all project dependencies with `npm install`

## Usage 
- start the development server with `npm start`
- open http://localhost:3000

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components # Components is use for reuse
    │   ├── Book.jsx
    │   ├── Option.jsx
    │   ├── Option.jsx
    │   └── index.jsx
    ├── layout # Components is use for render page
    │   ├── index.jsx
    │   ├── MainPage.jsx
    │   └── SearchPage.jsx
    ├── utils # Files contain data to reuse
    │   └── MasterData.js
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


- [MyReads Project](#myreads-project)
  - [Authors](#authors)
  - [Installing](#installing)
  - [Usage](#usage)
  - [What You're Getting](#what-youre-getting)
  - [Backend Server](#backend-server)
    - [`getAll`](#getall)
    - [`update`](#update)
    - [`search`](#search)