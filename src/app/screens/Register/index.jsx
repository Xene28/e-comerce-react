import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"



function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
        console.log(name);
    
    }

    return(
        <>
        <div className={styles.authPage} >
            <div className={styles.authFormContainer} >
            <h1>Register</h1>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="name" >Full Name</label>
                <input value={name}  onChange={(e) => setName(e.target.value) } id="name" placeholder="Full Name" />
                <label htmlFor="email">email</label>
                <input  value={email}  onChange={(e) => setEmail(e.target.value) } type="email" placeholder="youremail@email.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input  value={pass}  onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button>Register</button>
            </form>

            
            <Link to="/login">Already have an account? Login here.</Link>

            </div>
        </div>
            
        </>
    )
}

export default Register;