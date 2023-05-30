import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgsH_evjaq1WqrJhwcXysigTqrpUbTouA",
    authDomain: "readdict-24105.firebaseapp.com",
    databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com",
    projectId: "readdict-24105",
    storageBucket: "readdict-24105.appspot.com",
    messagingSenderId: "611748519700",
    appId: "1:611748519700:web:762ed6c2d9d97c5f092c01"
  };

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const booksRef = ref(database, "Books/The Alchemist");
const slider = document.getElementById('slider');
const fill = document.querySelector('.fill');
const progressPage = document.querySelector('.ProgressPage');

slider.addEventListener('input', slides);

function slides() {
  console.log(slider.value);
  fill.style.width = (slider.value * 100) / 133 + "%";
  console.log("width is", fill.style.width);
  progressPage.textContent = slider.value;

  const value = (slider.value * 100) / 133;
  update(booksRef, { Progress: value })
    .then(() => {
      console.log("Value successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating value:", error);
    });
}

onValue(booksRef, (snapshot) => {
  const books = snapshot.val();
  console.log(books);
});