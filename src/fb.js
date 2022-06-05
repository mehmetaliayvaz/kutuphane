// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, where, query } from 'firebase/firestore'
import store from "./store";
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



//resim yükleme işlemleri
const storage = getStorage(app);

export const saveFile = (fileName, file) => {
  return uploadBytes(ref(storage, `books/${fileName}`), file).then((res) => {
    return getDownloadURL(res.ref);
  });
}



//veri kaydetme işlemleri
const db = getFirestore(app);

export const colRef = (ref) => {
  return collection(db, ref);
}




// get collection data
export const getBooks = (email) => {
  const books = [];
  return getDocs(query(colRef('books'), where("user_email", "==", email)))
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    store.commit('setBooks', books);
  })
  .catch(err => {
    console.log(err.message)
  })
}



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