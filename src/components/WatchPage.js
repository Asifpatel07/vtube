import {React, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
// import { YOUTUBE_COMMENTS_THREAD_API_URL } from '../utils/constants';
import ButtonList from './ButtonList';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // const videoId = searchParams.get("v"); // Get the value of the "v" query parameter
    // let getComments = async () => {
    //     try {
    //         const response = await fetch(YOUTUBE_COMMENTS_THREAD_API_URL.replace('VIDEO_ID', videoId));
    //         const data = await response.json();
    //         // setComments(data.items);
    //         console.log("Fetched comments:", data);
    //     } catch (error) {
    //         console.error('Error fetching comments:', error);
    //     }
    // };
    console.log(searchParams.get("v")); // Get the value of the "v" query parameter

    const dispatch = useDispatch();
    useEffect(() => {
        // getComments();
        dispatch(closeMenu());
    }, []);
    return (
        <div className="flex">
            <div className="p-5 col-span-9">
                <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h1 className="text-2xl font-bold">Video Title</h1>
                <div className="videoDetails flex items-center gap-3 p-5">
                    <img className="h-8 w-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                    <div>
                        <p className="text-gray-500">Channel Name</p>
                        <p className="text-gray-500">1M subscribers</p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Subscribe</button>
                    </div>
                </div>
                <CommentsContainer />
            </div>
            
            <div className="py-5 col-span-3">
                <ButtonList />
                <div className="h-[450px] mt-2 border border-gray-300 rounded-lg overflow-y-scroll bg-slate-100">
                    <LiveChat />
                </div>
                <div className="p-2 flex flex-row">
                    <img className="h-8 w-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                    <div className="p-3">
                        <h1 className="font-bold">Video Title</h1>
                        <p className="text-gray-500">Channel Name</p>
                        <p className="text-gray-500">1M views</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchPage;