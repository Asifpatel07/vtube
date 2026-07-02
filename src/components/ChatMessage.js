import {React} from 'react';

const ChatMessage = ({ name, text }) => {
    return (
        <div className="flex items-center p-2">
            <img className="h-8 w-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <span className="font-bold">{name}</span>
            <span className='ml-2'>{text}</span>
        </div>
    )
};

export default ChatMessage;