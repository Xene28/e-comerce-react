import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"


function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);


    }


    return (
        <>  
        <div className={styles.authPage}>
        <div className={styles.authFormContainer} >
        <h2>Login</h2>
            <form className={styles.loginForm}  onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input  value={pass} onChange={(e) => setPass(e.target.value) } type="password" placeholder="********" id="password" name="password"/>
                <button>Log In</button>
            </form>

            
            <Link to="/register">Don't have an account? Register here.</Link>

        </div>



        </div>
        
            

        </>
    )
}

export default Login;