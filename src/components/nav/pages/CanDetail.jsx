import { useParams } from "react-router-dom";
import cans from "../../contexts/cans";
import { useContext, useEffect, useState } from "react";
import LoginStatusContext from "../../contexts/LoginStatus";

export default function CanDetail() {
    const { id } = useParams();
    const can = cans.find(r => r.id === parseInt(id));
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [loginStatus] = useContext(LoginStatusContext);

    const commentKey = `comments-${id}`; // Unique key per can

    // Load comments from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(commentKey);
        if (saved) {
            setComments(JSON.parse(saved));
        }
    }, [commentKey]);

    const handleComment = () => {
        if (!loginStatus?.username) {
            alert("Please login to comment.");
            return;
        }

        if (comment.trim()) {
            const newComment = {
                user: loginStatus.username,
                text: comment.trim(),
                time: new Date().toLocaleString()
            };

            const updated = [...comments, newComment];
            setComments(updated);
            localStorage.setItem(commentKey, JSON.stringify(updated));
            setComment("");
        }
    };

    return can ? (
        <div className="container mt-4">
            <h2>{can.name}</h2>
            <p><strong>Price:</strong> {can.price}</p>
            <p><strong>Brand:</strong> {can.brand}</p>
            <p><strong>Ingredients:</strong> {can.ingredients.join(', ')}</p>
            <p><strong>Having Gums?: </strong><small>{can.gums}</small></p>

            <hr />
            <h4>Comments</h4>
            <div>
                {comments.length > 0 ? comments.map((c, i) => (
                    <div key={i} className="border rounded p-2 mb-2">
                        <strong>{c.user}</strong> <small className="text-muted">{c.time}</small>
                        <p className="mb-0">{c.text}</p>
                    </div>
                )) : <p className="text-muted">No comments yet.</p>}
            </div>

            {loginStatus?.username ? (
                <div className="mt-3">
                    <textarea
                        className="form-control"
                        rows="3"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Leave a comment..."
                    />
                    <button className="btn btn-primary mt-2" onClick={handleComment}>Post</button>
                </div>
            ) : (
                <p className="text-muted mt-2">Login to post a comment.</p>
            )}
        </div>
    ) : <p>Can not found.</p>;
}