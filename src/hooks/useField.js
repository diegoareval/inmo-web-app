import  {useState} from 'react';
const useField = ({type}) => {
    const [value, setValue] = useState('');
 
    const onChange = event => {
     setValue(event.target.value)
    }

    const clean = () => {
        setValue('')
    }
 
    return {
        type, value, onChange, clean
    }
 }

 export default useField;