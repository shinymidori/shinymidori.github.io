import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo.png';
import './CanNavbar.css';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import LoginStatusContext from "../contexts/LoginStatus";

export default function CanNavbar() {
    // Filter
    const [query, setQuery] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        if (query.trim()) params.set('search', query.trim());
        if (price) params.set('price', price);
        if (brand) params.set('brand', brand);

        navigate(`/cans?${params.toString()}`);
        setQuery('');
    };

    // Log in
    const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
    const handleLogout = () => {
        setLoginStatus(null);
        sessionStorage.removeItem("loginStatus");
        alert("Logged out!");
        navigate("/");
    };

    return (
        <Navbar bg="white" variant="light" expand="sm" sticky="top" className="navbar-form">
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        alt="Home"
                        src={Logo}
                        width="50"
                        height="50"
                        className="me-2"
                    />
                    <span className="fw-bold fs-5">The Honest Can</span>
                </Navbar.Brand>

                <Form className="d-flex ms-3" onSubmit={handleSearch}>

                    <Form.Select
                        aria-label="Filter by brands"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="me-2"
                    >
                        <option value="">All Brands</option>
                        <option value="Feline Natural">Feline Natural</option>
                        <option value="Rawz">Rawz</option>
                        <option value="Orijen">Orijen</option>
                        <option value="Instinct">Instinct</option>
                        <option value="Others">Others</option>
                    </Form.Select>

                    <Form.Label
                        htmlFor="navbar-search"
                        className="visually-hidden"
                    > Search cat food products
                    </Form.Label>

                    <FormControl
                        id="navbar-search"
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Button variant="outline-primary" type="submit">
                        Search
                    </Button>
                </Form>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/cans" className="fs-6">View all cans</Nav.Link>
                        <Nav.Link as={Link} to="/mylikes" className="fs-6">My Likes</Nav.Link>
                    </Nav>

                    {loginStatus?.username ? (
                        <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}