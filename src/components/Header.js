import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { YOUTUBE_SEARCH_API_URL } from '../utils/constants';
import { cacheResults } from '../utils/SearchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const cachedSuggestions = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
       const timer = setTimeout(() => {
            if(cachedSuggestions[searchQuery]){
                setSuggestions(cachedSuggestions[searchQuery]);
            }else{
                getSearchSuggestions();
            }
        }, 200);

       return () => {
        clearTimeout(timer);
       } 
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log("API call made for: ", searchQuery);
        // API call to get search suggestions based on searchQuery
        // const response = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
        const response = await fetch(
            "https://corsproxy.io/?" +
            encodeURIComponent(
                YOUTUBE_SEARCH_API_URL + searchQuery
            )
            );
        const data = await response.json();
        // if(data){
        //     setShowSuggestions(true);
        // }
        setSuggestions(data[1]);
        // cache the suggestions
        dispatch(cacheResults({[searchQuery]: data[1]}));
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="fixed bg-white w-full grid grid-flow-col p-5 shadow-lg">
            <div className="flex p-2 col-span-1">
                <img onClick={() => toggleMenuHandler()} className="h-8 cursor-pointer" alt="humberger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png" />
                <a href="/">
                    <img className="h-8 mx-2" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" />
                </a>
            </div>
            <div className="col-span-10">
                <input 
                    className="border w-1/2 border-gray-300 rounded py-2 rounded-l-full" 
                    type="text" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className="bg-gray-200 hover:bg-gray-400 py-2 px-5 rounded-r-full">🔍</button>            
                {showSuggestions && (
                    <div className="search-result fixed py-2 px-5 w-[32rem] bg-white shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestions.map((s) => (
                            <li key={s} className="hover:bg-gray-200 py-1 px-2 shadow-sm" onClick={() => {
                                setSearchQuery(s);
                                setShowSuggestions(false);
                            }}>
                                🔍 {s}
                            </li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1">
                <img className="h-8 justify-end" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    );
};

export default Header;