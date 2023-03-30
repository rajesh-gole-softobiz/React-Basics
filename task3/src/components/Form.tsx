import React, {useState} from 'react';

function Form() {

const [inputField , setInputField] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: ''
})

const inputsHandler = (e:any) =>{
   const { name, value } = e.target;
   setInputField((prevState) => ({
     ...prevState,
     [name]: value,
   }));
}

const submitButton = () =>{
    alert("Form Submited!!! Check Console")
    console.log("Values=>",inputField);
    // const fn = Object.keys(inputField)[0]
    // setInputField((prevState) => ({
    //     ...prevState,
    //     [fn]: "",
    //   }))
}

return (
    <div>
        <input 
        type="text" 
        name="first_name" 
        onChange={inputsHandler} 
        placeholder="First Name" 
        value={inputField.first_name}/>

        <br/><br/>

        <input 
        type="text" 
        name="last_name" 
        onChange={inputsHandler} 
        placeholder="Last Name" 
        value={inputField.last_name}/>

        <br/><br/>

        <input 
        type="number" 
        name="age" 
        onChange={inputsHandler} 
        placeholder="Age" 
        value={inputField.age}/>

        <br/><br/>

        <input 
        type="mail" 
        name="email" 
        onChange={inputsHandler} 
        placeholder="Email" 
        value={inputField.email}/>

        <br/><br/>

        <button onClick={submitButton}>Submit</button>
    </div>
)
}

export default Form