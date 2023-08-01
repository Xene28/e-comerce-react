import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"


async function LoginUser(credentials) {
    return fetch ('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Sigin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        const response = await LoginUser({
            email,
            password
        })

        //if ('accesToken' in response) {
        //    swal("Succes", response.message, "succes",{
        //        buttons: false,
        //        timer: 2000,
        //    }) 
        //    .then((value) => {
        //        localStorage.setItem('accessToken' , response['accesToken']);
        //        localStorage.setItem('user', JSON.stringify(response['user']));
        //        window.location.href = "/profile";
        //    });
        //}else {
        //    swal("Failed", response.message, "error");
        //}
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
                <input  value={password} onChange={(e) => setPassword(e.target.value) } type="password" placeholder="********" id="password" name="password"/>
                <button>Log In</button>
            </form>

            
            <Link to="/register">Don't have an account? Register here.</Link>

        </div>



        </div>
        
            

        </>
    )
}

export default Sigin;