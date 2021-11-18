let myLibrary = []; 

function Book(title, author, numPages, read) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
    this.info = function () {
        return `Title: ${title} AUTHOR: ${author} PAGES: ${numPages} READ: ${read} `;
    };
};

const mainForm = document.querySelector('#mainForm').style; 

//function that prompts user for inputs
function addBookToLibrary() {
    mainForm.display = 'block';
    /*let title = prompt("What's your favorite book?");
    let author = prompt ("who is it by?");
    let numPages = prompt ("How many pages??");
    let read = prompt ("and you read it?")*/

    var newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);

}; 

const btn = document.querySelector('#newBookButton');
btn.addEventListener('click', addBookToLibrary);

/* var newBook1 = new Book("How To Change Your Mind", "M. Pollan", 312, "yes");
var newBook2 = new Book("Mind For Numbers", "Susan", 555, "no");

myLibrary.push(newBook1);
myLibrary.push(newBook2); */


  
let paragraph = document.getElementById("demo");
function displayLibrary() {
    JSON.stringify(myLibrary.forEach((element) => {
        let newDiv = document.createElement('div');
        paragraph.appendChild(newDiv); 
        newDiv.innerHTML= element.info()
    })
    )};
    



const btn2 = document.querySelector('#displayBookButton');
btn2.addEventListener('click', displayLibrary);

