import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            onSearch(searchInput.trim());
        }
    };

    return (
        <div className="search-section">
            <h1 className="search-title">How's the sky looking today?</h1>
            <form className="search-container" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search weather..." 
                    className="search-input"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;