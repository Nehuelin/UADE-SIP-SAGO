// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, orderBy, startAt, endAt, getDocs, query } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Para Realtime Database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
//Si usas realtime Database:
getDatabase(app);
export async function getPatientByName(name) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('nombre'),
      startAt(name),
      endAt(name + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}

export async function getPatientByLastname(lastname) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('apellido'),
      startAt(lastname),
      endAt(lastname + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}

export async function getPatientByDNI(dni) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('dni'),
      startAt(dni),
      endAt(dni + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}

export async function getPatientByNropaciente(nroPaciente) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('nroPaciente'),
      startAt(nroPaciente),
      endAt(nroPaciente + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}

export async function getPatientByNroTel(nroTel) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('telefono'),
      startAt(nroTel),
      endAt(nroTel + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}

export async function getPatientByObraSocial(ob) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('obraSocial'),
      startAt(ob),
      endAt(ob + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}

export async function getPatientByNroObrasocial(nroOb) {
  const patientRef = collection(db, 'pacientes');
  const q = query(
      patientRef,
      orderBy('nroObraSocial'),
      startAt(nroOb),
      endAt(nroOb + '\uf8ff')
  );
  try{
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch (error) {
    console.error('Error en la búsqueda', error);
    return [];
  }
}