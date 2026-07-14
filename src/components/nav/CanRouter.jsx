import { BrowserRouter, Routes, Route } from "react-router-dom";
import CanNavbar from "./CanNavbar";
import MyLikes from "./pages/MyLikes";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Cans from './pages/Cans';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import CanDetail from './pages/CanDetail';

export default function Router({ liked, toggleLiked }) {
    return (
        <BrowserRouter> { }
            <CanNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/cans"
                    element={<Cans liked={liked} toggleLiked={toggleLiked} />}
                />
                <Route
                    path="/mylikes"
                    element={<MyLikes liked={liked} toggleLiked={toggleLiked} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NoMatch />} />
                <Route path="/cans/:id" element={<CanDetail />} />
            </Routes>
        </BrowserRouter>
    );
}