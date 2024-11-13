const bookContainer = document.querySelector('.container')
const submitBtn = document.querySelector('#submit-btn')

const libraryOfBooks = [

]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }



Book.prototype.deleteBook = function() {
    libraryOfBooks.splice(libraryOfBooks.indexOf(this),1)
}

Book.prototype.markAsRead = function(){
    const bookCards = document.querySelectorAll('.bookcard')
    for (bookCard of bookCards){
    bookCard.remove()}
    this.read = "Yes"
    displayBooks()
}

Book.prototype.markAsUnread = function(){
    const bookCards = document.querySelectorAll('.bookcard')
    for (bookCard of bookCards){
    bookCard.remove()}
    this.read = "No"
    displayBooks()
}

submitBtn.addEventListener("click",function(){
    const bookTitleForm = document.querySelector('#booktitle')
    const bookAuthorForm = document.querySelector('#bookauthor')
    const bookPagesForm = document.querySelector('#bookpages')
    const readResponse = document.querySelector('input[name=book-read]:checked')
    const bookCards = document.querySelectorAll('.bookcard')
    const form = document.querySelector('form')
    const newBook = new Book(bookTitleForm.value,bookAuthorForm.value,bookPagesForm.value, readResponse.value)
    for (bookCard of bookCards){
      bookCard.remove()}
    libraryOfBooks.push(newBook)
    displayBooks()
    form.reset()

})


Book.prototype.updateToRead = function(){
    const bookCards = document.querySelectorAll('.bookcard')
    for (bookCard of bookCards){
    bookCard.remove()}
    this.read = "Yes"
    displayBooks()
}

function displayBooks(){
    for (const book of libraryOfBooks){
        if (book.read === "No"){
            const bookCard = document.createElement("div")
            bookCard.classList.add("bookcard")
            bookCard.classList.add("unreadbook")
            const titleParagraph = document.createElement("p")
            titleParagraph.classList.add("title")
            titleParagraph.textContent = "Title: "+book.title
            const authorParagraph = document.createElement("p")
            authorParagraph.classList.add("author")
            authorParagraph.textContent = "Author: "+book.author
            const pagesParagraph = document.createElement("p")
            pagesParagraph.classList.add("pages")
            pagesParagraph.textContent = "Pages: "+book.pages
            const readParagraph = document.createElement("p")
            readParagraph.classList.add("read")
            readParagraph.textContent = "Read?: No"
            let markAsReadButton = document.createElement('input')
            markAsReadButton.type = "button"
            markAsReadButton.name = "markasreadbutton"
            markAsReadButton.value = "Mark as Read?"
            markAsReadButton.classList.add("markasreadbutton")
            markAsReadButton.addEventListener("click",function(){
                book.markAsRead()
            })
            let removeButton = document.createElement('input')
            removeButton.type = "button"
            removeButton.name = "removebutton"
            removeButton.value = "Remove?"
            removeButton.classList.add("removebutton")
            removeButton.addEventListener("click",function(){
                bookCard.remove()
                book.deleteBook()
            })
            bookContainer.appendChild(bookCard)
            bookCard.appendChild(titleParagraph)
            bookCard.appendChild(authorParagraph)
            bookCard.appendChild(pagesParagraph)
            bookCard.appendChild(readParagraph)
            bookCard.appendChild(markAsReadButton)
            bookCard.appendChild(removeButton)
       
        } else if (book.read === "Yes"){
            const bookCard = document.createElement("div")
            bookCard.classList.add("bookcard")
            bookCard.classList.add("readbook")
            const titleParagraph = document.createElement("p")
            titleParagraph.classList.add("title")
            titleParagraph.textContent = "Title: "+book.title
            const authorParagraph = document.createElement("p")
            authorParagraph.classList.add("author")
            authorParagraph.textContent = "Author: "+book.author
            const pagesParagraph = document.createElement("p")
            pagesParagraph.classList.add("pages")
            pagesParagraph.textContent = "Pages: "+book.pages
            const readParagraph = document.createElement("p")
            readParagraph.classList.add("read")
            readParagraph.textContent = "Read?: "+book.read
            let markAsUnreadButton = document.createElement('input')
            markAsUnreadButton.type = "button"
            markAsUnreadButton.name = "markasunreadbutton"
            markAsUnreadButton.value = "Mark as Unread?"
            markAsUnreadButton.classList.add("markasunreadbutton")
            markAsUnreadButton.addEventListener("click",function(){
                book.markAsUnread()
            })
            let removeButton = document.createElement('input')
            removeButton.type = "button"
            removeButton.name = "removebutton"
            removeButton.value = "Remove?"
            removeButton.classList.add("removebutton")
            removeButton.addEventListener("click",function(){
                bookCard.remove()
                book.deleteBook()
            })
            bookContainer.appendChild(bookCard)
            bookCard.appendChild(titleParagraph)
            bookCard.appendChild(authorParagraph)
            bookCard.appendChild(pagesParagraph)
            bookCard.appendChild(readParagraph)
            bookCard.appendChild(markAsUnreadButton)
            bookCard.appendChild(removeButton)
            }
    }
    }

displayBooks()

