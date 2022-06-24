import { EmojiHappyIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ReplyIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import CircleUserIcon1 from "../../CircleUserIcon/icon1";
import Replycomment from "./Replycomment";

type Props = {
  commentData?: any;
  clickedCardInfo?: any;
  comments: any;
  handleCreateComment: any;
  commentRef:any
};

const Comments = (props: Props) => {
  const [showReply, setShowReply] = useState<boolean>(false);
  const { commentData, handleCreateComment, comments , commentRef } = props;

//   useEffect(()=> {
//     commentRef.current?.scrollIntoView(false)
//   } , [comments])
  return (
    <>
      <div className="flex flex-row w-full p-3 space-x-2">
        <span>
          <CircleUserIcon1 size="sm" color="bg-btncolor" />
        </span>

        <div className="bg-white w-[100%] h-auto rounded-lg flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between border border-gray-300 p-2 border-b-none ">
              <div className="flex flex-col space-y-3 text-sm text-gray-500 capitalize">
                <div className="flex flex-row space-x-1 text-xs">
                  <span className="text hover:text-btncolor hover:bg-gray-300 p-1">
                    {comments?.user?.profile?.full_name}
                  </span>
                  <span className="p-1"> commented</span>
                </div>

                <div className="flex w-full text-sm">{comments?.comment}</div>
              </div>
              <div className="text-xs text-gray-400">
                {comments?.created?.substring(12, 16)}
              </div>
            </div>
            {!showReply && !comments?.parent ? (
              <div className="mt-0 border border-gray-300 w-full p-2">
                <div className="flex flex-row w-full justify-start">
                  <span
                    className="text-xs cursor-pointer"
                    onClick={() => setShowReply(true)}
                  >
                    Reply
                  </span>
                </div>
              </div>
            ) : null}

            {showReply && (
              <Replycomment
                setShowReply={setShowReply}
                replycommentData={comments}
                handleCreateComment={handleCreateComment}
                commentRef = {commentRef}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
