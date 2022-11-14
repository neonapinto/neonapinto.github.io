import React from 'react'
import {FiSend} from 'react-icons/fi';
import { IconContext } from 'react-icons';

interface Props{
    user: {
        name: string,
        email: string,
        message: string
    };
    handleInput: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
    handleSubmit: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.FormEvent<HTMLFormElement>) =>void
}


const Form = ({user, handleInput, handleSubmit} : Props) => {

  return (
    <form className='contact-form' onSubmit={(e) =>handleSubmit(e)}>
        <label>Name</label>
        <div className='contact-input-container'>
            <input type='text' placeholder='Enter your name'  name='name' value={user.name} onChange={handleInput} required={true}/>
            <span className='focus-border'></span>
        </div>
        
        <label>Email</label>
        <div className='contact-input-container'>
            <input type='text' placeholder='Enter your email' name='email' value={user.email} onChange={handleInput} required={true}/>
             <span className='focus-border'></span>
        </div>

       
        <label>Message</label>
        <div className='contact-input-container'>
            <textarea name='message' placeholder='Enter your message' value={user.message} onChange={handleInput} required={true}></textarea>
            <span className='focus-border'></span>
        </div>
      
        <button type='submit'>Hit me up
        <IconContext.Provider value={{className: 'contact-send-icon' }}>
            <FiSend size={18}/>
        </IconContext.Provider>
    </button>
</form>
  )
}

export default Form;