import {useState} from 'react'
import axios from 'axios'

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) =>{   
        e.preventDefault();
        
        const authObject = { 'Project-ID':'b5eb87ad-0bbe-42ad-b247-2c61bce61922',"User-Name": username, 'User-Secret': password}
            
        try{
            axios.get('https://api.chatengine.io/chats', {headers: authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        }catch(err) {
            setError('Incorrcect Username or Password')
        }
    }

    return(
        <div className='wrapper'>
            <div className='form'>
            <h1 className='title'>Chat with me</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={username} className='input' placeholder='Type Username' required onChange={(e)=> setUsername(e.target.value)}></input>
                <input type='password' value={password} className='input' placeholder='Type Password' required onChange={(e)=> setPassword(e.target.value)}></input>
                <div align='center'>
                    <button type='submit'className='button'>
                        <span>Start chatting with me </span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
           </form>
            </div>
        </div>
    )
}

export default LoginForm