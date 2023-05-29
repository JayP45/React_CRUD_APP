import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [pwd, setPassword] = useState('')

    const handleSubmit = (params) => {
    
    }

    const navigateRegisterPage = () => {
        navigate('/user')
    }
    return (
        <>
            <h1 className='home-page'>Welcome to Register Portal</h1>
            <form className='main-form' onSubmit={handleSubmit}>
                <div className='firstname'>
                    <label htmlFor='firstname'>First Name: </label>
                    <input type='text' id='firstname' name='firstname' placeholder='First Name' value={firstname} onChange={(e)=>setFirstName(e.target.value)} />
                </div>

                <div className='lastname'>
                    <label htmlFor='lastname'>Last Name: </label>
                    <input type='text' id='lastname' name='lastname' placeholder='Last Name' value={lastname} onChange={(e)=>setLastName(e.target.value)} />
                </div>

                <div className='age'>
                    <label htmlFor='age'>Age: </label>
                    <input type='number' id='age' name='age' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>

                <div className='email'>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' name='email' autoComplete='off' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className='contact'>
                    <label htmlFor='contact'>Contact: </label>
                    <input type='text' id='number' name='number' placeholder='Contact' value={contact} onChange={(e)=>setContact(e.target.value)} />
                </div>

                <div className='pwd'>
                    <label htmlFor='pwd'>Password: </label>
                    <input type='password' id='password' name='password' placeholder='Password' value={pwd} onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </form>
            <button className="btn-submit" onClick={navigateRegisterPage}>Click to register</button>

        </>
    )
}

export default Home