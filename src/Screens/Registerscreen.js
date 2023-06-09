import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import Success from '../Components/Success';


function Registerscreen() {
  const[name, setname] = useState('')
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')
  const[cpassword, setcpassword] = useState('')

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();

  async function Register() {

    if(password === cpassword){

      const user = {
        name,
        email,
        password,
        cpassword
      }

      try {

        setloading(true)
        const result = await axios.post('https://hotel-capital-backend.onrender.com/api/users/register', user).data
        setloading(false)
        setsuccess(true)

        setname("")
        setemail("")
        setpassword("")
        setcpassword("")

      } catch (error) {
        
        console.log(error)
        setloading(false)
        seterror(true)

      }
    }

    else {

      alert('Passwords not match')
    }
  }

  return (
    <div>
        {loading && (<Loader/>)}
        {error && (<Error/>)}
        
        <div className = 'row justify-content-center mt-5'>
          <div className='col-md-5 mt-5'>
          {success && (<Success message = 'Registration Success'/>)}
            
            <div className='bs'>
              <h2>Register</h2>
              <input type = 'text' className = 'form-control' placeholder='name' value = {name} onChange = {(e) => (setname(e.target.value))}/>
              <input type = 'text' className = 'form-control' placeholder='email' value = {email} onChange = {(e) => (setemail(e.target.value))}/>
              <input type = 'text' className = 'form-control' placeholder='password' value = {password} onChange = {(e) => (setpassword(e.target.value))}/>
              <input type = 'text' className = 'form-control' placeholder='confirm password' value = {cpassword} onChange = {(e) => (setcpassword(e.target.value))}/>
              
              <button className='btn btn-primary mt-3' onClick={Register}>Register</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Registerscreen