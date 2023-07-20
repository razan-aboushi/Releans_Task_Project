import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
} from "@material-tailwind/react";

function Comments() {
  // State variables
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [updatedComment, setUpdatedComment] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();


  // Get postId from URL parameters
  const { postId } = useParams();

  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem("user")) || null;


  useEffect(() => {
    getComments();
  }, [postId]);



  // Function to fetch comments from local storage and update the state
  const getComments = () => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  };



  // Function to post a new comment
  const postComment = () => {
    try {
      if (!user) {
        Swal.fire({
          title: "User Not Registered",
          text: "Please register or log in to post a comment.",
          icon: "warning",
          confirmButtonText: "Log In",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/LogIn");
          }
        });
        return;
      }


      const comment = {
        content: newComment,
        user_id: user.id,
        username: user.username,
        comment_id: comments.length + 1,
        post_id: postId,
        created_at: new Date().toISOString(),
      };


      const newComments = [...comments, comment];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };



  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }
    postComment();
  };



  // Function to handle deleting a comment
  const handleDeleteComment = (commentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const updatedCommentList = comments.filter(
            (comment) => comment.comment_id !== commentId
          );
          setComments(updatedCommentList);
          localStorage.setItem("comments", JSON.stringify(updatedCommentList));
          Swal.fire("Deleted!", "Your comment has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting comment:", error);
        }
      }
    });
  };



  // Function to handle updating the comment state when editing
  const handleUpdateComment = (event) => {
    const value = event.target.value;
    setUpdatedComment(value);
  };



  // Function to handle submitting the edited comment
  const handleEditForm = (event) => {
    event.preventDefault();
    try {
      const updatedComments = comments.map((comment) => {
        if (comment.comment_id === selectedCommentId) {
          return {
            ...comment,
            content: updatedComment,
          };
        }
        return comment;
      });

      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setSelectedCommentId("");
      setUpdatedComment("");
      setIsPopoverOpen(false);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };



  // Function to handle opening the edit popover
  const handleEditPopover = (commentId) => {
    setSelectedCommentId(commentId);
    setIsPopoverOpen(true);

    // Auto fill the comment content when trying to edit it
    const selectedComment = comments.find(
      (comment) => comment.comment_id === commentId
    );
    if (selectedComment) {
      setUpdatedComment(selectedComment.content);
    }
  };


  // Filter the comments related to the current post to just appear them
  const postComments = comments.filter((comment) => comment.post_id === postId);


  
  return (
    <>
      <div className="flex flex-col flex-wrap mx-auto lg:max-w-5xl mt-10 mb-8">
        <div className="flex border-b border-gray-700">
          <h2 className="my-2 text-sm tracking-widest text-gray-500 title-font">
            Recent Comments
          </h2>
        </div>
        <div>
          {postComments.length > 0 &&
            postComments.map((item) => (
              <div
                key={item.comment_id}
                className="flex content-center py-4 border-b border-gray-700"
              >
                <div className="flex w-full px-10 justify-between">
                  <div className="flex flex-col flex-wrap items-center">
                    <div className="flex mb-4">
                      <p className="ms-3 text-left">{item.username}</p>
                    </div>
                    <div className="flex flex-col items-start justify-between w-full space-y-2 sm:flex-row">
                      <p className="text-xs text-gray-500">
                        {new Date(item.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="col-span-2 text-left mt-5 mt-5">
                      <p className="text-md text-left">{item.content}</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {item.user_id === user?.id && (
                      <>
                        <Button
                          className="text-red-500 text-xs hover:text-red-700 ml-2 mb-2 font-semibold bg-transparent"
                          onClick={() => handleDeleteComment(item.comment_id)}
                        >
                          DELETE
                        </Button>
                        <div>
                          <Popover className="bg-gray-500">
                            <PopoverHandler
                              onClick={() =>
                                handleEditPopover(item.comment_id)
                              }
                            >
                              <Button className="bg-transparent text-xs text-gray-500 ml-2">
                                Edit
                              </Button>
                            </PopoverHandler>
                            <PopoverContent className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100">
                              <form
                                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                                onSubmit={handleEditForm}
                              >
                                <div className="mb-4 flex flex-col gap-6">
                                  <Input
                                    size="lg"
                                    className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                                    value={updatedComment}
                                    onChange={handleUpdateComment}
                                  />
                                </div>
                                <Button
                                  className="text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
                                  fullWidth
                                  type="submit"
                                >
                                  Edit
                                </Button>
                              </form>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          <div className="flex items-center mt-4">
            <textarea
              className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button
              className="ms-5 px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
