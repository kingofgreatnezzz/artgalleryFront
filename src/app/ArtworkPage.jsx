
import { useState } from 'react';
import ArtworkList from '../components/ArtworkList'; // Assuming you have an ArtworkList component
import SearchBar from '@/components/SearchBar';

const ArtworksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    // Update the state with the search query
    setSearchQuery(query);
  };

  return (
    <div>
    <SearchBar onSearch={handleSearch} />
      <ArtworkList searchQuery={searchQuery} />
    </div> 
  );
};

export default ArtworksPage;
