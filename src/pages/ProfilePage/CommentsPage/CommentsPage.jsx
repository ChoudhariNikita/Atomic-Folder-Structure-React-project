import React from "react";

const CommentsPage = () => {
  const comments = [
    { id: 1, author: "User1", text: "Great post!" },
    { id: 2, author: "User2", text: "Thanks for sharing!" },
  ];

  return (
      <div className="comments-page">
        <h3>Comments</h3>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <strong>{comment.author}</strong>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CommentsPage;
