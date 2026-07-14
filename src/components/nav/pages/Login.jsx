import React, { useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginStatusContext from "../../contexts/LoginStatus";
import { validateUser } from "../../contexts/MockUsers";

export default function Login() {
    const usernameRef = useRef();
    const pinRef = useRef();
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);

    const handleLogin = () => {
        const username = usernameRef.current.value;
        const pin = pinRef.current.value;

        if (!username || !pin) {
            alert("Please enter both username and pin.");
            return;
        }

        const pinRegex = /^\d{7}$/;
        if (!pinRegex.test(pin)) {
            alert("PIN must be a 7-digit number.");
            return;
        }

        if (validateUser(username, pin)) {
            const user = { username };
            setLoginStatus(user);
            sessionStorage.setItem("loginStatus", JSON.stringify(user));
            alert("Login successful!");
            navigate("/");
        } else {
            alert("Invalid username or pin.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="p-5 rounded shadow bg-white" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Login to The Honest Can</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id="username" className="form-control" ref={usernameRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pin" className="form-label">PIN (7 digits)</label>
                    <input type="password" id="pin" className="form-control" ref={pinRef} />
                </div>
                <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                <p className="mt-3 text-center">
                    Don't have an account?{" "}
                    <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}