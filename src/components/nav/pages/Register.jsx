import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginStatusContext from "../../contexts/LoginStatus";

export default function Register() {
    const usernameRef = useRef(null);
    const pinRef = useRef(null);

    const navigate = useNavigate();
    const [, setLoginStatus] = useContext(LoginStatusContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value.trim();
        const pin = pinRef.current.value.trim();

        if (!username || !pin) {
            alert("Please provide both a username and PIN.");
            return;
        }

        if (!/^\d{7}$/.test(pin)) {
            alert("PIN must be exactly 7 digits.");
            return;
        }

        let registeredUsers = [];

        try {
            const storedUsers = sessionStorage.getItem("registeredUsers");

            if (storedUsers) {
                registeredUsers = JSON.parse(storedUsers);
            }
        } catch (error) {
            console.error("Could not read registered users:", error);
            registeredUsers = [];
        }

        const usernameAlreadyExists = registeredUsers.some(
            (user) =>
                user.username.toLowerCase() === username.toLowerCase()
        );

        if (usernameAlreadyExists) {
            alert("That username is already registered.");
            return;
        }

        const newUser = {
            username,
            pin
        };

        registeredUsers.push(newUser);

        sessionStorage.setItem(
            "registeredUsers",
            JSON.stringify(registeredUsers)
        );

        const newLoginStatus = {
            username
        };

        setLoginStatus(newLoginStatus);

        sessionStorage.setItem(
            "loginStatus",
            JSON.stringify(newLoginStatus)
        );

        alert("Registration successful!");
        navigate("/");
    };

    return (
        <div
            className="container mt-5"
            style={{ maxWidth: "400px" }}
        >
            <h2 className="mb-4 text-center">
                Create an Account
            </h2>

            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label
                        htmlFor="username"
                        className="form-label"
                    >
                        Username
                    </label>

                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        ref={usernameRef}
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="pin"
                        className="form-label"
                    >
                        PIN (7 digits)
                    </label>

                    <input
                        id="pin"
                        name="pin"
                        type="password"
                        className="form-control"
                        ref={pinRef}
                        inputMode="numeric"
                        pattern="\d{7}"
                        maxLength={7}
                        autoComplete="new-password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success w-100"
                >
                    Register
                </button>
            </form>

            <p className="text-center mt-3">
                Already have an account?{" "}
                <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => navigate("/login")}
                    style={{ color: "#87650f" }}
                >
                    Log in
                </button>
            </p>
        </div>
    );
}
