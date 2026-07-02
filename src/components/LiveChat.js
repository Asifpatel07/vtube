import {React, useEffect, useState} from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateName, generateText } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.messages);
    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: generateName(),
                text: generateText(10)
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, [dispatch])


    return (
        <>
            <div>
                <div className="w-full h-[600px] ml-2 rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse">
                    {
                        chatMessages.map((message, index) => (
                            <ChatMessage key={index} name={message.name} text={message.text} />
                        ))
                    }
                </div>
                
            </div>
            <form className="w-full p-2 flex items-center border border-gray-300 rounded-lg mt-2" onSubmit={(e) => {
                e.preventDefault();
                const name = "Asif Patel";
                const text = liveMessage;
                dispatch(addMessage({name, text}));
                setLiveMessage("");
            }}>
                <input className="w-full p-2 border border-gray-300 rounded-l-lg" type="text" placeholder="Type a message..." value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className="bg-blue-500 text-white px-2 py-3 rounded-r-lg"> ▶️ </button>
            </form>
        </>
        
    )
};

export default LiveChat;