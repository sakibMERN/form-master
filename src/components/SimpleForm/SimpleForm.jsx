import React from 'react';

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div className='bg-yellow-700 p-5 rounded-2xl'>
            <form onSubmit={handleSubmit}>
                <input type="text" className='p-2 rounded-xl mb-3' name='name' placeholder='your name'/>
                <br />
                <input type="email" name='email' className='p-2 rounded-xl mb-3' placeholder='your email'/>
                <br />
                <input type="text"  name='phone' className='p-2 rounded-xl mb-3' placeholder='your phone number'/>
                <br />
                <input type="submit" value="Submit" className='text-white font-bold border py-2 px-5 bg-slate-500 rounded-xl'/>
            </form>
        </div>
    );
};

export default SimpleForm;