import React, { useState } from 'react'
import Heading from './../components/Text/Heading';
import Tagline from './../components/Text/Tagline';
import Body from './../components/Text/Body';
import TwoColumns from './../layouts/TwoColumns';
import { IconContext } from 'react-icons';
import {HiMail} from 'react-icons/hi';
import Form from './../components/Form/Form';



const Contact = () =>{
    const [user, setUser] = useState({name:'', email:'', message: ''})

    const handleInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleMail = () =>{
        window.open('mailto:neonapinto@gmail.com','_blank');
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        window.open(`mailto:neonapinto@gmail.com&subject=Message from ${user.name}&body=${user.message}`,'_blank');
        setUser({name: '', email: '', message: ''})
    }


    return(
        <TwoColumns 
        left={
          <>
            <Heading>Contact Me.</Heading>
            <Body>Got a problem to solve? Let's get in touch!</Body>
            <Tagline>
                <span onClick={handleMail} className='contact-mail'>
                    <IconContext.Provider value={{className: 'contact-mail-icon' }}>
                        <HiMail size={20}/>
                    </IconContext.Provider>
                    <span>neonapinto@gmail.com</span>
                </span>
            </Tagline>
          </>
        } 
        right={
            <>
                <Form user={user} handleInput={handleInput} handleSubmit={handleSubmit}/>
            </> }
        />
    );
}

export default Contact;