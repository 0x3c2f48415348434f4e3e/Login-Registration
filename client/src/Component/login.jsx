import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const Login = () => {
    const {name, setName} = useState();
    const {email, setEmail} = useState();
    const {password, setPassword} = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5500/', {name, email, password}).then(result => console.log(result)).catch(err=> console.log(err));
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Name">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Name</strong>
                        </label>
                        <input type="password" placeholder="Enter password" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    <p>Do not have an account?</p>
                    <Link to='/signup' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Register
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;