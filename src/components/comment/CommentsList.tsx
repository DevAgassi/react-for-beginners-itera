import React from "react";
import CommentListProp from "type/CommentList";

type Props = {
    comments: CommentListProp[]
}

const CommentsList: React.FC<Props>  = ({comments}:Props) => {
    return (
        <div className="comment__list">
            {comments.map((comment) => {
                return <div key={comment.id}>
                    <span>Name: {comment.username}</span>
                    <p>Text: {comment.message}</p>
                </div>
            })}
        </div>
    );
}

export default CommentsList;
