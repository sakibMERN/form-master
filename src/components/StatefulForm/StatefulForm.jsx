import React, { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length <= 6){
            setError('Password must be 6 characters or longer');

        }
        else{
            setError('');
        }

        console.log(name, email, password);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
        
    }
  return (
    <div className="bg-indigo-400 p-5">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          defaultValue={'sakib'}
          type="text"
          className="p-2 rounded-xl mb-3"
          name="name"
          placeholder="your name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          className="p-2 rounded-xl mb-3"
          placeholder="your email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          className="p-2 rounded-xl mb-3"
          placeholder="your phone number"
          required
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="text-white font-bold border py-2 px-5 bg-slate-500 rounded-xl"
        />
        {
          error && <p className="text-red-900">{error}</p>  
        }
      </form>
    </div>
  );
};

export default StatefulForm;
