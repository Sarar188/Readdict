import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {getDatabase , ref , onValue} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
const appSettings = {
    databaseURL : "https://readdict-24105-default-rtdb.firebaseio.com/"
}
const firebaseConfig = {
    apiKey: "AIzaSyAgsH_evjaq1WqrJhwcXysigTqrpUbTouA",
    authDomain: "readdict-24105.firebaseapp.com",
    databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com",
    projectId: "readdict-24105",
    storageBucket: "readdict-24105.appspot.com",
    messagingSenderId: "611748519700",
    appId: "1:611748519700:web:762ed6c2d9d97c5f092c01"
  };

const App = initializeApp(appSettings);
const Database = getDatabase(App);
const BooksInDB = ref(Database , "Books/The Alchemist")

 const button = document.getElementById("imageButton");
 const Content= document.getElementsByClassName("content")

 button.addEventListener("click",SendData);

 function SendData(){

    onValue(BooksInDB,function(snapshot){

        const books = snapshot.val();
        console.log(books);
        if (books) {
            const Id = books.ID;
            console.log(Id);
            const genre = books.Genre;
            const cover = books.Cover
            console.log(genre);
            localStorage.setItem("Id", Id);
          localStorage.setItem("genre", genre);
          localStorage.setItem("cover",cover);
           
          const image = document.querySelector(".start-reading-rectangle12313")
          image.src = cover;
            
          }

    })

   
 }



