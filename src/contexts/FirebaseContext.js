import React, {createContext} from 'react';
import Firebase from "../firebase/firebase"

export const FirebaseContext = createContext();
const FirebaseProvider = ({children}) => {

    return (
        <FirebaseContext.Provider value={new Firebase()}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;
