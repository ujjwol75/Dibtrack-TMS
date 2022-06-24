import React, { useEffect } from "react";
import Comments from "../../../Reusable/TaskComponents/comments/Comments";

type Props = {
  commentData?: any;
  clickedCardInfo?: any;
  handleCreateComment: any;
  commentRef: any;
  scrollState?: boolean;
  setScrollState: any;
};

const CardPopupSection4 = (props: Props) => {
  const {
    commentData,
    scrollState,
    clickedCardInfo,
    handleCreateComment,
    commentRef,
    setScrollState,
  } = props;

  useEffect(() => {
   
    if (scrollState) {
      commentRef.current?.scrollIntoView(false);
    }
    setScrollState(true ? false : true);
  }, [scrollState, commentData]);

  return (
    <>
      <section className="px-6 pt-8 h-full bg-slate-100 space-y-3 text-sm overflow-auto">
        <section className="flex justify-between ">
          <div className="flex flex-col w-full overflow-auto" ref={commentRef}>
            {commentData?.map((comment: any) => {
              return (
                <>
                  <Comments
                    commentData={commentData}
                    clickedCardInfo={clickedCardInfo}
                    comments={comment}
                    handleCreateComment={handleCreateComment}
                    commentRef={commentRef}
                  />
                </>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default CardPopupSection4;
