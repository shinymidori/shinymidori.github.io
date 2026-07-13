import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import cans from '../../contexts/cans';
import CanCard from '../../content/CanCard';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Cans({ liked, toggleLiked }) {
    const queryParams = useQuery();
    const search = queryParams.get('search')?.toLowerCase() || '';
    const price = queryParams.get('price') || '';
    const brand = queryParams.get('brand')?.toLowerCase() || '';

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;

    // Filter cans
    const filteredCans = cans.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(search);
        const matchesPrice = price ? r.priceRange === price : true;
        const matchesBrand = brand ? r.brand.toLowerCase() === brand : true;
        return matchesSearch && matchesPrice && matchesBrand;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredCans.length / cardsPerPage);
    const currentCans = filteredCans.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    console.log(filteredCans.map(r => r.image));

    return (
        <div className="container mt-4">
            <h2 className="mb-4">
                {search || price || brand
                    ? `Cans matching your filters`
                    : "All Cans"}
            </h2>

            {currentCans.length > 0 ? (
                currentCans.map((r) => (
                    <CanCard
                        key={r.id}
                        can={r}
                        isLiked={liked.some(item => item.id === r.id)}
                        onToggle={toggleLiked}
                    />
                ))
            ) : (
                <p>No cans found matching your filters.</p>
            )}

            {totalPages > 1 && (
                <Pagination className="justify-content-center mt-4">
                    {[...Array(totalPages)].map((_, idx) => (
                        <Pagination.Item
                            key={idx + 1}
                            active={idx + 1 === currentPage}
                            onClick={() => setCurrentPage(idx + 1)}
                        >
                            {idx + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            )}
        </div>
    );
}