import {React} from 'react';

const SearchResult = ({ data }) => {
    const { title, channelTitle, thumbnails, liveBroadcastContent } = data.snippet;
    return (
        
        <div className="flex flex-row">
            <div className="p-2 m-2 w-[28rem] rounded-lg">
                <img className="rounded-lg w-full" alt="thumbnail" src={thumbnails.medium.url} />
            </div>
            <div className="items-center p-2 m-2">
                <p className="font-bold">{title}</p>
                <p>{channelTitle}</p>
                <div className="font-bold bg-red-500 text-white p-2 rounded w-14 h-6 flex items-center">
                    <img className="w-3 h-3" src="https://cdn-icons-png.magnific.com/512/16965/16965312.png" alt="liveicon" />
                    <p className="px-1 text-xs">LIVE</p>
                </div>
            </div>
        </div>
    )
};

export default SearchResult;