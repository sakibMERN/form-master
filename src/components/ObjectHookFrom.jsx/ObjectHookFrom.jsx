import { useEmailInputState } from "../../hooks/useInputState";


const ObjectHookFrom = () => {

    const emailInput = useEmailInputState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailInput);
    }
    return (
        <div className="bg-indigo-400 p-5">
            <form onClick={handleSubmit}>
                <input type="text" name="name" className='p-2 rounded-xl mb-3' placeholder='your name'/>
                <br />
                <input {...emailInput} type="email" name='email' className='p-2 rounded-xl mb-3' placeholder='your email'/>
                <br />
                <input type="password"  name='password' className='p-2 rounded-xl mb-3' placeholder='your password'/>
                <br />
                <input type="submit" value="Submit" className='text-white font-bold border py-2 px-5 bg-slate-500 rounded-xl'/>
            </form>
        </div>
    );
};

export default ObjectHookFrom;