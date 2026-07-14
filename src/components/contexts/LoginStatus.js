import { createContext } from "react";

// Default context: not logged in, and a placeholder setter
const LoginStatusContext = createContext([
    { username: null },
    () => { }
]);

export default LoginStatusContext;