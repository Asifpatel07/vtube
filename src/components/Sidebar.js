import { React } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return (
        <div className="col-span-1 p-5 shadow-lg w-48">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shorts">Shorts</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/live">Live</Link></li>
            </ul>
            <h1 className="font-bold text-lg p-2">Subscriptions</h1>
            <ul>
                <li><Link to="/watch-later">Watch Later</Link></li>
                <li><Link to="/liked-videos">Liked Videos</Link></li>
                <li><Link to="/history">History</Link></li>
            </ul>
            <h1 className="font-bold text-lg p-2">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Videos</li>
                <li>Gaming</li>
            </ul>
        </div>
    );
};

export default Sidebar;