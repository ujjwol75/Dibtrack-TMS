import { ChatIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useState } from "react";

type Props = {
  handleCreateComment: any;
  commentRef:any
  
};

const CardPopupSection6 = (props: Props) => {
  const [comment, setComment] = useState<string>("");
  const { handleCreateComment , commentRef} = props;
  
  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };
  const handleComment = () => {
    setComment("");
    handleCreateComment(comment);
  };
  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      handleCreateComment(comment);
      setComment('')
    }
  }
  // useEffect(()=> {
  //   commentRef.current?.scrollIntoView(false)
  // } , [comment])
  return (
    <>
      <section className="px-4 flex z-20">
        <div className="w-full">
          <input
            className="p-5 font-light w-full"
            placeholder="Comments"
            type="text"
            style={{ outline: "none" }}
            value = {comment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <span className="p-4">
          <ChatIcon
            className="w-9 h-9 cursor-pointer text-gray-500 hover:text-btncolor"
            onClick={handleComment}
            
          />
        </span>
      </section>
    </>
  );
};

export default CardPopupSection6;
