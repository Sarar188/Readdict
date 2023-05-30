import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue , get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com/"
};

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "readdict-24105.firebaseapp.com",
    databaseURL: "https://readdict-24105-default-rtdb.firebaseio.com",
    projectId: "readdict-24105",
    storageBucket: "readdict-24105.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const shelvesRef = ref(database, "ReAddict/Shelves");

document.addEventListener('DOMContentLoaded', function() {
  const triggerElement = document.getElementById('addshelf');
  const container = document.querySelector('.container');

  triggerElement.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.classList.add('PopUpContainer');

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Shelf Name';
    inputField.classList.add('field');

    const submitContainer = document.createElement('div');
    submitContainer.classList.add('SubmitButtonContainer');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('SubmitButton');

    submitButton.addEventListener('click', function() {
      const inputValue = inputField.value;
      console.log('Input value:', inputValue);

      // Fetch the existing shelves data to determine the next ID
      get(shelvesRef).then((snapshot) => {
        const shelvesData = snapshot.val();
        const shelfCount = shelvesData ? Object.keys(shelvesData).length : 0;
        const newShelfId = shelfCount + 1;

        // Set the name, ID, and other data for the new shelf
        const shelfData = {
          ID: newShelfId,
          Name: inputValue,
          Books: 'none',
          cover: 'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a46774a0-38e6-449c-9ffe-b2dd9fcd5648/1aa5bde8-2690-4c84-9810-ae2b70579809?org_if_sml=1762',
          bookNo: 0
        };

        set(ref(database, `ReAddict/Shelves/${newShelfId}`), shelfData)
          .then(() => {
            console.log("Shelf data added successfully!");

            // Close the pop-up
            document.body.removeChild(overlay);
            document.body.removeChild(popup);
          })
          .catch((error) => {
            console.error("Error adding shelf data:", error);
          });
      });
    });

    submitContainer.appendChild(submitButton);
    popup.appendChild(inputField);
    popup.appendChild(submitContainer);

    document.body.appendChild(popup);
    overlay.addEventListener('click', function() {
      document.body.removeChild(overlay);
      document.body.removeChild(popup);
    });
  });

  // Fetch and display the shelves data
  onValue(shelvesRef, (snapshot) => {
    const shelvesData = snapshot.val();
    container.innerHTML = '';

    for (const shelfId in shelvesData) {
      if (shelvesData.hasOwnProperty(shelfId)) {
        const shelfData = shelvesData[shelfId];
        const Link = document.createElement('a');
        Link.href = 'library.html';
        const shelfElement = document.createElement('div');
        shelfElement.classList.add('Shelf');
        const imgElement = document.createElement('img');
        imgElement.src = shelfData.cover;

        const textContainer = document.createElement('div');
        textContainer.classList.add('TextContainer');

        const titleElement = document.createElement('span');
        titleElement.classList.add('title');
        titleElement.textContent = shelfData.Name;

        const numberElement = document.createElement('span');
        numberElement.classList.add('Number');
        numberElement.textContent = shelfData.bookNo;

        shelfElement.appendChild(imgElement);
        textContainer.appendChild(titleElement);
        textContainer.appendChild(numberElement);
        shelfElement.appendChild(textContainer);
        Link.appendChild(shelfElement);
        container.appendChild(Link);
        const dividerElement = document.createElement('hr');
        dividerElement.classList.add('Divider');
        container.appendChild(dividerElement);
      }
    }
  });
});