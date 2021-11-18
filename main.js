let myLibrary = []; 

function Book(title, author, numPages, read) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
    this.info = function () {
        return `TITLE:  ${title} 
        AUTHOR:  ${author} 
        PAGES:  ${numPages} 
        READ:  ${read} `;
    };
};

const mainForm = document.querySelector('#mainForm').style; 

//selectors and event listeners. functions are defined below this section

/*const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', addBookToLibrary);*/

const btn = document.getElementById('newBookButton');
btn.addEventListener('click', addBookToLibrary);

const clearButton =  document.getElementById('clearButton');
clearButton.addEventListener('click', clearLibrary);

/*const btn2 = document.querySelector('#displayBookButton');
btn2.addEventListener('click', displayLibrary);*/

//function that pops up new from field
/*function newBookAdd () {
mainForm.display = 'block';
};*/

//function that submits what's in the form then adds it to the new book array
function addBookToLibrary() {

    let title = prompt ("What was the title of the book?");
    let author = prompt ("Who was the author?");
    let numPages = prompt ("How many pages was it?");
    let read = prompt ("Did you read it?");

    /*let title = document.getElementById("book").value;
    let author = document.getElementById("author").value;
    let numPages = document.getElementById("numPages").value;
    let read = document.getElementById("read").value;*/


    console.log (title);
    console.log (author);
    console.log (numPages);
    console.log (read);

    var newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);

    let paragraph = document.getElementById("bookContainer");
    paragraph.innerHTML = ' ';
    JSON.stringify(myLibrary.forEach((element) => {    
            let newDiv = document.createElement('div');
            paragraph.appendChild(newDiv); 
            newDiv.innerHTML= element.info()
            })
        )}; 
    
function clearLibrary () {  
    myLibrary = []; 
    let paragraph = document.getElementById("bookContainer");
    paragraph.innerHTML = ' ';
};
        

/* var newBook1 = new Book("How To Change Your Mind", "M. Pollan", 312, "yes");
var newBook2 = new Book("Mind For Numbers", "Susan", 555, "no");

myLibrary.push(newBook1);
myLibrary.push(newBook2); */








