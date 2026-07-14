import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CanCard.css';

export default function CanCard({ can, isLiked, onToggle }) {
    return (
        <Link to={`/cans/${can.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="mb-4 shadow-sm can-card">
                <Row className="g-0">
                    <Col md={4}>
                        <Card.Img
                            src={can.image}
                            alt={can.name}
                            style={{ height: "265px", width: "100%", objectFit: "cover" }}
                        />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{can.name}</Card.Title>
                            <Card.Text><strong>Price:</strong> {can.price}</Card.Text>
                            <Card.Text><strong>Brand:</strong> {can.brand}</Card.Text>
                            <Card.Text><strong>Ingredients:</strong> {can.ingredients.join(', ')}</Card.Text>
                            <Card.Text><strong>Gums: </strong><small className="text-muted">{can.gums}</small></Card.Text>

                            <div className="d-flex gap-3 mt-3">
                                <Button
                                    className={`like-btn ${isLiked ? 'liked' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault(); // prevent Link navigation
                                        onToggle(can);
                                    }}
                                >
                                    ♥ {isLiked ? "Liked" : "Like"}
                                </Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Link>
    );
}