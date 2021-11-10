import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBAblVN5fdxZZIE4us12grd51PVmThOxJg",
  authDomain: "dev-rebass.firebaseapp.com",
  projectId: "dev-rebass",
  storageBucket: "dev-rebass.appspot.com",
  messagingSenderId: "1483142032",
  appId: "1:1483142032:web:c70f3b231347d6f321f915",
})

const storage = getStorage(firebaseApp)

export const uploadAsset = async (file) => {
  const fileRef = ref(storage, "assets/" + file.filename)
  const snapshot = await uploadBytes(fileRef, file)
  console.log("Uploaded a blob or file!", snapshot)
  return snapshot
}
