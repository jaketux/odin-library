const bookContainer = document.querySelector('.container')
const checkbox = document.querySelector('#readbook')

const libraryOfBooks = [
    {title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", pages: 223, read: "No"},
    {title: "Throne of Glass", author: "Sarah J. Maas", pages: 464, read: "Yes"},
    {title: "Iron Flame", author: "Rebecca Yarros", pages: 623, read: "Yes"},
    {title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", pages: 223, read: "No"},



]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(){
    let newBook = new Book(prompt("Book Title"),prompt("Author"),prompt("Pages"), prompt("Read?"))
    libraryOfBooks.push(newBook)
}

console.log(libraryOfBooks)

function displayBooks(){
    for (const book of libraryOfBooks){
        if (book.read === "No"){
            const bookCard = document.createElement("div")
            bookCard.classList.add("bookcard")
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
            const checkboxBox = document.createElement("div")
            checkboxBox.classList.add("checkboxbox")
            let checkbox = document.createElement('input')
            checkbox.type = "checkbox"
            checkbox.name = "readbook"
            checkbox.value = "readbookvalue"
            checkbox.id = "readbook"
            let label = document.createElement('label')
            label.htmlFor = "id"
            label.id = "readbooklabel"
            label.appendChild(document.createTextNode('Mark as Read?'))
            checkbox.addEventListener('change', function(){
                if (this.checked){
                    readParagraph.textContent = "Read?: Yes"
                    bookCard.removeChild(checkboxBox)
                }})
            let removeButton = document.createElement('input')
            removeButton.type = "button"
            removeButton.name = "removebutton"
            removeButton.value = "Remove?"
            removeButton.classList.add("removebutton")
            removeButton.addEventListener("click",function(){
                bookCard.remove()
            })
            bookContainer.appendChild(bookCard)
            bookCard.appendChild(titleParagraph)
            bookCard.appendChild(authorParagraph)
            bookCard.appendChild(pagesParagraph)
            bookCard.appendChild(readParagraph)
            bookCard.appendChild(checkboxBox)
            checkboxBox.appendChild(checkbox)
            checkboxBox.appendChild(label)
            bookCard.appendChild(removeButton)

        } else if (book.read === "Yes"){
            const bookCard = document.createElement("div")
            bookCard.classList.add("bookcard")
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
            let removeButton = document.createElement('input')
            removeButton.type = "button"
            removeButton.name = "removebutton"
            removeButton.value = "Remove?"
            removeButton.classList.add("removebutton")
            removeButton.addEventListener("click",function(){
                bookCard.remove()
            })
            bookContainer.appendChild(bookCard)
            bookCard.appendChild(titleParagraph)
            bookCard.appendChild(authorParagraph)
            bookCard.appendChild(pagesParagraph)
            bookCard.appendChild(readParagraph)
            bookCard.appendChild(removeButton)


            }
    }
}

displayBooks()

