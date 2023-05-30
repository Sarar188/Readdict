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
const Cover = localStorage.getItem("cover");
console.log(Cover);
if(Cover){
// Create the img element
const imgElement = document.createElement('img');
imgElement.src = Cover;
imgElement.alt = 'Cover Photo';
const button1 = document.getElementById("imageButtonAdd");
button1.remove();
const textNone = document.querySelector('.None');
textNone.remove();
const ProgressBarFillDiv = document.createElement('div');
const ProgressBarDiv = document.createElement('div');
const progressClass = document.querySelector('.progressBar')
const progressClassFill = document.querySelector('ProgressBarFill')
  
// Get the parent elements
const homeBook01 = document.querySelector('.home-book01');
ProgressBarFillDiv.className="ProgressBarFill";
ProgressBarDiv.className = 'progressBar'
ProgressBarDiv.appendChild(ProgressBarFillDiv);
homeBook01.appendChild(ProgressBarDiv)

// Append the img element to the parent elements
imgElement.className ="CoverPhoto" ; 
homeBook01.appendChild(imgElement);
localStorage.clear();
}




