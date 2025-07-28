let Books = JSON.parse(localStorage.getItem("AllBooks")) || [];


const bookName = document.getElementById('bookName');
const authorName = document.getElementById('authorName');
const showBook = document.getElementById('bookContainer');


function addBook() {
  const book = {
    Name: bookName.value,
    Author: authorName.value,
  };

  Books.push(book);
  localStorage.setItem("AllBooks", JSON.stringify(Books));

  bookName.value = "";
  authorName.value = "";

  alert("Book added Successfully");
  displayBooks(); 
}


function displayBooks() {
  showBook.innerHTML = ""; 

  Books.forEach((e, index) => {
    const data = `
      <li>
        <article class="showUserList">
          <div class="ShowAllUserBooksListHolderLeft">
            <h2>${e.Name}</h2>
            <h3>${e.Author}</h3>
          </div>
          <button onclick="deleteButton(${index})">Delete</button>
        </article>
      </li>
    `;
    showBook.innerHTML += data;
  });
}


function deleteButton(index) {
  Books.splice(index, 1); 
  localStorage.setItem("AllBooks", JSON.stringify(Books));
  displayBooks()
}


displayBooks();