import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, child , onValue } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com/"
};

const firebaseConfig = {
    apiKey: "AIzaSyAgsH_evjaq1WqrJhwcXysigTqrpUbTouA",
    authDomain: "readdict-24105.firebaseapp.com",
    databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com",
    projectId: "readdict-24105",
    storageBucket: "readdict-24105.appspot.com",
    messagingSenderId: "611748519700",
    appId: "1:611748519700:web:762ed6c2d9d97c5f092c01"
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const booksRef = ref(database, "ReAddict/Books");
const Image= document.createElement("img");
        

onValue(booksRef, (snapshot) => {
    const booksData = snapshot.val();
  
    for (const bookKey in booksData) {
      if (booksData.hasOwnProperty(bookKey)) {
        const book = booksData[bookKey];
        const bookId = book.ID;
  
        console.log('Book:', bookKey);
        console.log('Book ID:', bookId);
        const bookAuthor = book.Author;
        const bookCover = book.Cover;
        console.log(bookAuthor);
        console.log(bookCover);
        const bookContainer = document.createElement('div');
      bookContainer.classList.add('Book');
      bookContainer.id = bookId;
      
      const bookImage = document.createElement('img');
      bookImage.src = bookCover;
      bookImage.className = "bookCover"
      const titleSpan = document.createElement('span');
      titleSpan.classList.add('title');
      titleSpan.textContent = bookKey;
      const divider = document.createElement("hr");
       divider.className="divider";
       const textGroup = document.createElement("div");
    textGroup.className = "textGroup"
      const authorSpan = document.createElement('span');
      authorSpan.classList.add('author');
      authorSpan.textContent = bookAuthor;

     
      bookContainer.appendChild(bookImage);
      textGroup.appendChild(titleSpan);
      textGroup.appendChild(authorSpan);
      bookContainer.appendChild(textGroup);
      
      const bookLink = document.createElement('a');
      bookLink.href = 'start-reading.html';
      bookLink.classList.add('bookLinkClass');
      bookLink.appendChild(bookContainer);
      // Add the book container to the container element in your HTML
      const container = document.querySelector('.container');
      container.appendChild(bookLink);
      container.appendChild(divider);
      
      

      }

      
    }
  }, {
    onlyOnce: true // Ensure the callback is executed only once
  });