import { auth, db } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';

// Custom hook to read  auth record and user profile doc
export async function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        unsubscribe = setUsername(docSnap.data()?.username);
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }

  fetchUsers();
  
  }, [user]);
  

  return { user, username };
}