// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnp_XERXf_Cduh_xzUBeRU2EhOILehT2Q",
  authDomain: "kutuphanemapp-ff649.firebaseapp.com",
  projectId: "kutuphanemapp-ff649",
  storageBucket: "kutuphanemapp-ff649.appspot.com",
  messagingSenderId: "930407350237",
  appId: "1:930407350237:web:39614f88cd830155290034",
  measurementId: "G-HHV70E7N6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export const colRef = (ref) => {
  return collection(db, ref);
}


// get collection data
getDocs(colRef('books'))
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })



// deleting docs
// const deleteBookForm = document.querySelector('.delete')
// deleteBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const docRef = doc(db, 'books', deleteBookForm.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//       deleteBookForm.reset()
//     })
// })