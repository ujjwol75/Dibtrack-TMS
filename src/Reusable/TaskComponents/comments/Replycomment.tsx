import React from "react";
import { useEffect, useState } from "react";
import Comments from "./Comments";

type Props = {
  setShowReply: any;
  replycommentData?: any;
  handleCreateComment: any;
  commentRef: any;
};

const Replycomment = (props: Props) => {
  const { setShowReply, replycommentData, handleCreateComment, commentRef } = props;

  const [reply, setReply] = useState<string>("");
  const replyRef = React.useRef<HTMLDivElement>(null);

  const handleReply = (e: any) => {
    handleCreateComment(reply, replycommentData?.id);

    setReply("");
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleCreateComment(reply, replycommentData?.id);
      setReply("");
    }
  };
 
  return (
    <div className=" w-full border border-gray-300 shadow-lg overflow-auto" ref={replyRef}>
      {replycommentData?.children?.map((reply: any) => (
        <Comments
          comments={reply}
          handleCreateComment={handleCreateComment}
          commentRef={commentRef}
        />
      ))}

      <input
        type="text"
        placeholder="Reply here"
        className="w-[90%] h-10 focus:outline-none  border border-gray-400 pl-10 py-5 my-4 mx-3"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <span className="flex flex-row items-center justify-around mb-3">
        <button
          className="bg-btncolor text-white py-1 px-4"
          onClick={handleReply}
        >
          Reply
        </button>
        <button
          className="bg-btncolor text-white py-1 px-4"
          onClick={() => setShowReply(false)}
        >
          cancel
        </button>
      </span>
    </div>
  );
};

export default Replycomment;
