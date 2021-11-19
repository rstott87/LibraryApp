let myLibrary = []; 
//Main constructor function 
function Book(title, author, numPages, read) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
    this.info = function () {
        return `TITLE:  ${title} 
        AUTHOR:  ${author} 
        PAGES:  ${numPages} 
        READ:  ${read} 
        
        `;
    };
};

const mainForm = document.querySelector('#mainForm').style; 

//selectors and event listeners. functions are defined below this section

const btn = document.getElementById('newBookButton');
btn.addEventListener('click', addBookToLibrary);

const clearButton =  document.getElementById('clearButton');
clearButton.addEventListener('click', clearLibrary);

//function that submits what's in the form then adds it to the new book array
function addBookToLibrary() {

    let title = prompt ("What was the title of the book?");
    let author = prompt ("Who was the author?");
    let numPages = prompt ("How many pages was it?");
    let read = prompt ("Did you read it?");

    console.log (title);
    console.log (author);
    console.log (numPages);
    console.log (read);

    var newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);

    innerFunction(); 

    };  


/*Function that is called in addBookToLibrary to generate the divs that will hold the cards to display. 
*/     
function innerFunction() {
    let paragraph = document.getElementById("bookContainer");
    paragraph.innerHTML = ' ';
    JSON.stringify(myLibrary.forEach((element, i) => {
        let newDiv = document.createElement('div');
        let innerDiv = document.createElement('div');
        paragraph.appendChild(newDiv);
        newDiv.setAttribute('data-card', i);
        newDiv.innerHTML = element.info();
        newDiv.appendChild(innerDiv);
        innerDiv.textContent = 'Delete Entry';
        innerDiv.setAttribute('class', 'deleteEntry');
        innerDiv.setAttribute('data-key', i);
        const deleteEntry = document.querySelectorAll('.deleteEntry');
        deleteEntry.forEach((button) => {
            button.addEventListener('click', deleteBook);
            })
        })
    )};

function clearLibrary () {  
    myLibrary = []; 
    let paragraph = document.getElementById("bookContainer");
    paragraph.innerHTML = ' ';
    };

function deleteBook (e) {
    const indexPosition = e.target.getAttribute('data-key');
    console.log (indexPosition);
    myLibrary.splice(indexPosition, 1);
    let elementToRemove = document.querySelector(`div[data-card="${indexPosition}"]`);
    elementToRemove.remove();
    };







