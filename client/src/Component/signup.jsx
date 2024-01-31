import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p3 rounded w-25">
                <h2>Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="Name">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Name</strong>
                        </label>
                        <input type="password" placeholder="Enter password" autoComplete="off" name="email" className="form-control rounded-0"/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Signup
                    </button>
                    <p>Already have an account?</p>
                    <Link to='/' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;