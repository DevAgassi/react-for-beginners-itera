import React, {useState} from "react";
import CommentList from "type/CommentList";

type Props = {
    submitComment: (data: CommentList)=>void
}

const CommentInput: React.FC<Props> = ({submitComment}:Props) => {
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    function handleSubmitComment():void {
        (name !== '' && message !== '') && submitComment({username: capitalizeFirstLetter(name), message: message});
    }
    function capitalizeFirstLetter(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div className="comment__input w-72 mx-auto mt-5">
            <div className="text-left border-2">
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>):void => setName(e.target.value)} value={name} className="w-full" type="text" placeholder="Your Name"/>
            </div>
            <div className="text-left mt-4 border-2">
                <textarea onChange={(e:React.ChangeEvent<HTMLTextAreaElement>):void => setMessage(e.target.value)} value={message} className="w-full" name="message" rows={8} cols={8} placeholder="Add Your Message" />
            </div>
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmitComment()}>Add Comment</button>
        </div>
    );
}

export default CommentInput;
