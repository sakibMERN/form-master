import { useState } from "react"

const useInputState = (defaultValue= null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = e => {
        setValue(e.target.value);
        
    }
    return [value, handleChange];
}

const useEmailInputState = (defaultValue = null) => {
    const [email, setEmail] = useState(defaultValue);

    const onChange = e => {
        setEmail(e.target.value);
    }
    return {
        email, 
        onChange
    }
}

export {useInputState, useEmailInputState};