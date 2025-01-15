// src/components/SearchBar.tsx
"use client";

import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle search logic here (you may implement further)
    console.log('Search Query:', query);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 px-4 rounded-md bg-gray-800 text-white placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
