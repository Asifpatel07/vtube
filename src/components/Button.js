import { React } from 'react';

const list = ["All", "Music", "Gaming", "News", "Movies"];
const Button = () => {
    return (
        <div className="body">
            <div className="flex gap-2">
                {list.map((item) => (
                    <button key={item} onClick={() => {}} className="bg-gray-200 hover:bg-gray-400 py-2 px-4 rounded-full cursor-pointer">
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Button;