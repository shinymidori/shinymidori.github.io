import CanCard from '../../content/CanCard';

export default function Likes({ liked, toggleLiked }) {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Liked Cans</h2>
            {liked.length === 0 ? (
                <p>No cans liked yet.</p>
            ) : (
                liked.map((r) => (
                    <CanCard
                        key={r.id}
                        can={r}
                        isLiked={true}
                        onToggle={toggleLiked}
                    />
                ))
            )}
        </div>
    );
}