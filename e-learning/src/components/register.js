import react from 'react';
import { useState } from 'react';
import './css/Login.css';
import register from './Wavy_Gen-01_Single-07.jpg';
function Register(){
    const[inputs, setInputs] = useState({});
    const hanldeChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault(); 
        console.log(inputs);

    }
    return(
        <div className="background">
        <header className="container2">
            <img src={register} width="55%" alt="register"></img>
            <div className="FormContainer2">
                <form onSubmit={handleSubmit}>
                <div className="form2">
                        <h1>Register</h1>
                    
                        <label>
                            Email:<input type="email" name="email" value={inputs.email||""} onChange={hanldeChange} placeholder="Enter Email" required></input>
                        </label>
                        <label>
                            Name:<input type="text" name="fullname" value={inputs.fullname||""} onChange={hanldeChange} placeholder="Enter Full Name" required></input>
                        </label>
                        <label>
                            Mobile:<input type="text" name="mobile" value={inputs.mobile||""} onChange={hanldeChange} placeholder="Enter Mobile Number" maxLength="10" required></input>
                        </label>
                        <label>
                            Date of Birth:<input type="date" name="dob" value={inputs.dob||""} onChange={hanldeChange} placeholder="Enter Date of birth" required></input>
                        </label>
                        <label>
                            Password:<input type="password" name="password"  value={inputs.password||""} onChange={hanldeChange} placeholder="Enter Password" required></input>
                        </label>
                        <br></br>
                        <center><input type="submit" value="Register"></input></center>
                        <center><a href="/">Already Have an Account? | </a><a href="/">Login?</a></center>
                    </div>
                </form>
            </div>
        </header>
        </div>
    );
}
export default Register;