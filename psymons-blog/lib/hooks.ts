import { auth, db } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);
  
    useEffect(() => {

        async() => {
            if(user){
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef)

                if(docSnap.exists()){
                    const data = docSnap.data();
                    setUsername(data.displayName);
                }
                else{
                    setUsername(null);
                }
            }
            else{
                setUsername(null);
            }

            return username;
        }
    }), [user];

    console.log('username', username);
    console.log('user', user);

    return {user, username}
}