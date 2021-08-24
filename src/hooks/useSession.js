import  {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';
const useSession = () => {
  const firebase = useContext(FirebaseContext);

    const [session,setSession ] = useState(false);
 
    useEffect(() =>{
        firebase.isLogged().then((val) => setSession(val))
      })
 
    return session;
 }

 export default useSession;