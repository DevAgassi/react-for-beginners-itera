import React, {useState} from "react";
import CommentsList from "./CommentsList";
import CommentInput from "./CommentInput";
import CommentList from "type/CommentList";

const Comments: React.FC = () => {
   const [comments, setComments] = useState<CommentList[]>([
       { id: 1, username: 'Maks', message: 'First Comment!'},
       { id: 2, username: 'Alex', message: 'Hello everyone!!'},
   ]);

    function handlePushComment(data: CommentList) {
        setComments([...comments, { id: ++comments.length, ...data}]);
    }

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl">Comments</h2>
            <CommentsList comments={comments} />
            <CommentInput submitComment={handlePushComment} />
        </div>
    );
}

export default Comments;
