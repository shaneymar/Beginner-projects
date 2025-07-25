import React,{useState} from 'react'

const Forms = () => {

    const [userName,setUserName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [confirmPassword,setConfirmPassword] =useState('');


    const [errorUser,setErrorUser] =useState('');
    const [errorEmail,setErrorEmail] =useState('');
    const [errorPassword,setErrorPassword] =useState('');
    const [errorConfirmPass,setErrorConfirmPass] =useState('');


    const [colorUser, setColorUser] =useState('');
    const [colorEmail, setColorEmail] =useState('');
    const [colorPassword, setColorPassword] =useState('');
    const [colorConfirmPass, setColorConfirmPass] =useState('');

    const validate =(e) => {
        e.preventDefault();

        if(userName.length  > 8){
            setErrorUser('');
            setColorUser("green");
        }
        else{
            setErrorUser("UserName must be 8 characters length");
            setColorUser('red');
        }


        if(email.includes('@gmail.com')){
            setErrorEmail('');
            setColorEmail('green');
        }
        else{
            setErrorEmail("Email should have @gmail.com");
            setColorEmail('red');
        }

        if(password.length  > 8){
            setErrorPassword('');
            setColorPassword("green");
        }
        else{
            setErrorPassword("Password must be 8 characters length");
            setColorPassword('red');
        }

        if(password !== '' && password === confirmPassword){
            setErrorConfirmPass('');
            setColorConfirmPass('green');
        }
        else{
            setErrorConfirmPass("Password doesn't match");
            setColorConfirmPass('red');
        }

    }
  return (
        <>
        

        <form>
            <input type="text" 
            placeholder='Enter your Name'
            value={userName}
            style={{borderColor: colorUser}}
            onChange={(e) => setUserName(e.target.value)}
            />

            <p className='error'>{errorUser}</p>

            <input type="email" 
            placeholder='Enter your Email'
            value={email}
            style={{borderColor: colorEmail}}
            onChange={(e) => setEmail(e.target.value)}
            />

            <p className='error'>{errorEmail}</p>

            <input type="password" 
            placeholder='Enter your Password'
            value={password}
            style={{borderColor: colorPassword}}
            onChange={(e) => setPassword(e.target.value)}
            />

            <p className='error'>{errorPassword}</p>

            
            <input type="password" 
            placeholder='Confirm Password'
            value={confirmPassword}
            style={{borderColor: colorConfirmPass}}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <p className='error'>{errorConfirmPass}</p>


            <button className='submit-btn' onClick={validate}>Submit</button>
        </form>
        </>
  )
}

export default Forms
