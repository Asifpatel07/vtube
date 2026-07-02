import { React, useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_API_URL);
            const data = await response.json();
            setVideos(data.items);
            console.log("Fetched videos:", data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <div className="video-container flex flex-wrap">
            {videos[0] && <AdVideoCard info={videos[0]} />}
            {videos.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <VideoCard info={video} />
                </Link>

            ))}
        </div>
    );
};

export default VideoContainer;