import React, { useRef, useState } from "react";
import Indexbar from "../components/Indexbar";

const Home = () => {
  const imageInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleImageBoxClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const photoInputRef = useRef(null);

  const handlePhotoClick = () => {
    photoInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    console.log("Photo selected:", file);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };




   const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput('');
    }
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  }; 


 const handleDeleteComment = (indexToDelete) => {
    const updatedComments = comments.filter((_, idx) => idx !== indexToDelete);
    setComments(updatedComments);
  };



  
 


    const [stories, setStories] = useState([]);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setStories((prev) => [...prev, url]);
    }
  };

  const handleDeleteStory = (index) => {
    setStories((prev) => prev.filter((_, idx) => idx !== index));
  };

  

  return (
    <div className="flex h-screen bg-gray-100">
      <Indexbar />
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-1 w-full overflow-y-auto p-4">
          <div className="w-full lg:w-3/5 space-y-4 mx-auto">
            {/* Stories */}
    

    <div className="flex flex-row space-x-4 overflow-x-auto pb-2">
      {/* Add Story Box */}
      <div
        className="bg-gray-300 w-20 h-24 flex items-center justify-center rounded cursor-pointer shrink-0"
        onClick={handleDivClick}
      >
        +
      </div>

      {/* Story Items */}
      {stories.map((story, idx) => (
        <div
          key={idx}
          className="relative bg-gray-200 w-20 h-24 flex items-center justify-center rounded cursor-pointer overflow-hidden shrink-0"
        >
          <img src={story} alt={`story-${idx}`} className="w-full h-full object-cover" />

          {/* Delete Button */}
          <button
            className="absolute top-1 right-1 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteStory(idx);
            }}
          >
            ×
          </button>
        </div>
      ))}

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  
 



            {/* Create Post */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <input
                type="text"
                placeholder="What's going on? #Hashtag.. @Mention.. Link.."
                className="w-full border rounded p-2"
              />

              {/* Image Preview */}
              {images.length > 0 && (
                <div className="mt-2 flex gap-2 overflow-x-auto">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative">
                      <img src={img} alt="preview" className="h-20 rounded" />
                      <button
                        onClick={() => handleRemoveImage(idx)}
                        className="absolute top-0 right-0 text-white bg-red-500 rounded-full px-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-x-4 mt-2">
                <button
                  className="bg-green-500 text-white px-4 py-1 rounded"
                  onClick={handlePhotoClick}
                >
                  Photo/Video
                </button>

                <input
                  type="file"
                  accept="image/*"
                  ref={photoInputRef}
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  ref={imageInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Post Example */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-semibold">
                Surfiya Zakir{" "}
                <span className="text-gray-400 text-sm">3 hours ago</span>
              </div>
              <p className="mt-2 text-sm">
                Bacon ipsum dolor amet sirloin jowl turducken pork...
              </p>

              <div
                className="mt-2 h-32 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600 cursor-pointer"
                onClick={handleImageBoxClick}
              >
                {images.length > 0 ? (
                  <div className="flex gap-2 overflow-x-auto">
                    {images.map((img, idx) => (
                      <img key={idx} src={img} alt="uploaded" className="h-28 rounded" />
                    ))}
                  </div>
                ) : (
                  "+2 images"
                )}
              </div>

             
<div className="p-4  rounded bg-white shadow-md max-w-md mx-auto mt-6 mr-[300px]">

      {/* Action Buttons */}
      <div className="mt-2 flex space-x-4 text-sm cursor-pointer">
        <span onClick={handleLike}>👍 {likes} Likes</span>
        <span>💬 {comments.length} Comments</span>
        <span onClick={toggleShareOptions}>🔗 Share</span>
      </div>

      {/* Comment Input */}
      <div className="mt-3">
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Write a comment..."
          className=" px-2 py-1 w-full rounded"
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-1 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Comment
        </button>
      </div>

      {/* Show Comments */}
    {comments.map((cmt, idx) => (
  <div key={idx} className="bg-gray-100 rounded p-1 mt-1 relative group">
    {cmt}
    <button
      className="absolute top-1 right-1 text-red-500 group-hover:block"
      onClick={() => handleDeleteComment(idx)}
    >
      ×
    </button>
  </div>
))}




      {/* Share Options */}
      {showShareOptions && (
        <div className="mt-3 border p-2 rounded bg-gray-50 text-sm">
          <p>📤 Share to:</p>
          <ul className="list-disc list-inside">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Copy Link</li>
          </ul>
        </div>
      )}
    </div>


            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/4 space-y-4 ml-4 hidden lg:block">
            {/* People You May Know */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">People you may know</h3>
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 w-8 h-8 rounded-full" />
                    <span className="text-sm">Mohannad Zitoun</span>
                  </div>
                  <button className="bg-blue-700 text-white text-xs px-2 py-1 rounded">
                    Follow
                  </button>
                </div>
              ))}
            </div>

            {/* Invite Friends */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Invite Your Friends</h3>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-2 py-1 rounded"
              />
              <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
                Send
              </button>
            </div>

            {/* Footer */}
            <div className="bg-white text-center text-sm text-gray-500 py-2 w-full">
              © 2025 Lzycrazy · Languages · About · Blog · Contact Us · More
            </div>

            {/* Chat Section */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Chat</h3>
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="flex items-center space-x-2 mb-2">
                  <div className="bg-gray-200 w-8 h-8 rounded-full" />
                  <span className="text-sm">Hurin Seary</span>
                  <span className="ml-auto text-xs text-blue-500">2</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
