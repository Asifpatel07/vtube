import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_RESULTS_API_URL } from '../utils/constants';
import SearchResult from './SearchResult';
import ButtonList from './ButtonList';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get('search_query') || '';

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        const response = await fetch(
          `${YOUTUBE_SEARCH_RESULTS_API_URL}${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setResults(data.items || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="col-span-11 p-5 items-left justify-start">
        <ButtonList />
        <div className="block w-full">
            {results.map((result) => (
                <Link key={result.id.videoId || result.id} to={`/watch?v=${result.id.videoId || result.id}`}>
                    <SearchResult data={result} />
                </Link>
            ))}
        </div>
    </div>
  );
};

export default SearchResultsPage;
