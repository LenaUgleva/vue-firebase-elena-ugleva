import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlR7hI3nh9Pp7MOTc1EwFz_XonbA9lMCk",
  authDomain: "elenaugleva-4c3f0.firebaseapp.com",
  databaseURL: "https://elenaugleva-4c3f0-default-rtdb.firebaseio.com",
  projectId: "elenaugleva-4c3f0",
  storageBucket: "elenaugleva-4c3f0.appspot.com",
  messagingSenderId: "745004010935",
  appId: "1:745004010935:web:c88cc5affebf1361bc2c32"
})

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
