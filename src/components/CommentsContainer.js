import {React} from 'react';


const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className="p-3 border-b flex flex-row shadow-sm bg-gray-100 rounded-lg m-2">
            <img className="h-8 w-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

const CommentsList = ({ comments }) => {
    return comments.map((comment) => (
        <div>
            <Comment key={comment.id} data={comment} />
            <div className="pl-5 border border-l-black ml-7">
                {comment.replies && <CommentsList comments={comment.replies} />}
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
    const commentsData = [
        {
            id: 1,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    id: 11,
                    name: "John Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                        
                    ]
                },
                {
                    id: 12,
                    name: "John Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                        
                    ]
                },
                {
                    id: 13,
                    name: "John Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                        {
                            name: "John Doe",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [
                                
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                
            ]
        },
        {
            id: 3,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                
            ]
        },
        {
            id: 4,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                
            ]
        },
        {
            id: 5,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    id: 14,
                    name: "John Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                        {
                            id: 15,
                            name: "John Doe",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [
                                
                            ]
                        },
                        {
                            id: 16,
                            name: "John Doe",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [
                                {
                                    id: 17,
                                    name: "John Doe",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                    replies: [
                                        
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
                {
                    id: 18,
                    name: "John Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                        
                    ]
                }
            ]
        },
    ]

    return (
        <div className="p-5 commentsList w-full">
            <h1 className="font-bold text-lg p-2">Comments</h1>
            <div className="videoDetails flex items-center gap-3 p-5">
                <img className="h-8 w-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                <input type="text" placeholder="Add a comment..." className="w-full p-2 border rounded-lg" />
            </div>
            <CommentsList comments={commentsData} />
        </div>
    )
};

export default CommentsContainer;