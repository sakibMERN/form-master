import React from 'react';

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div className='bg-yellow-700 p-5'>
            <form onSubmit={handleSubmit}>
                <input type="text" className='p-5 rounded-xl mb-3' name='name' />
                <br />
                <input type="email" name='email' className='p-5 rounded-xl mb-3'/>
                <br />
                <input type="text"  name='phone' className='p-5 rounded-xl mb-3'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;