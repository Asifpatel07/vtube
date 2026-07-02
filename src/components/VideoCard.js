import { React } from 'react';


const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="video-card shadow-lg p-2 m-2 w-72 rounded-lg hover:scale-105 transition-transform duration-200">
            <img src={thumbnails.medium.url} alt={title} className="video-thumbnail rounded-[1rem] px-2 py-2" />
            <div className="video-info">
                <h3 className="video-title font-bold">{title}</h3>
                <p className="video-channel">{channelTitle}</p>
                <p className="video-views">{viewCount} views</p>
            </div>
        </div>
    );

    
};

export const AdVideoCard = ({ info }) => {
    const { snippet } = info;
    const { title, channelTitle, thumbnails } = snippet;
                
    return (
        <div className="ad-video-card border border-yellow-800 shadow-lg p-2 m-2 w-72 rounded-lg hover:scale-105 transition-transform duration-200 bg-yellow-100">
            <img src={thumbnails.medium.url} alt={title} className="video-thumbnail rounded-[1rem] px-2 py-2" />
            <div className="video-info">
                <h3 className="video-title font-bold">{title}</h3>
                <p className="video-channel">{channelTitle}</p>
                <p className="ad-label text-red-500 font-bold">Ad</p>
            </div>
        </div>
    );
}

export default VideoCard;