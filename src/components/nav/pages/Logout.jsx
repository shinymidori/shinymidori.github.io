import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginStatusContext from '../../contexts/LoginStatus';

export default function Logout() {
    const [, setLoginStatus] = useContext(LoginStatusContext);
    const navigate = useNavigate();

    useEffect(() => {
        setLoginStatus({ username: null });
        sessionStorage.removeItem("loginStatus");
        navigate('/');
    }, [setLoginStatus, navigate]);

    return null;
}