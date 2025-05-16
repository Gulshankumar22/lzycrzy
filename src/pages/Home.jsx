import React from "react";
import Indexbar from "../components/Indexbar";


const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Indexbar />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center ">
        {/* Content & Right Sidebar */}
        <div className="flex flex-1 w-full overflow-y-auto p-4 ">
          {/* Main Feed */}
          <div className="w-3/5 space-y-4 mx-50">
            {/* Stories */}
            <div className="flex space-x-4">
              <div className="bg-gray-300 w-16 h-24 flex items-center justify-center rounded">
                +
              </div>
              <div className="bg-gray-200 w-16 h-24 flex items-center justify-center rounded">
                Victor
              </div>
              <div className="bg-gray-200 w-16 h-24 flex items-center justify-center rounded">
                Surfiya
              </div>
              <div className="bg-gray-200 w-16 h-24 flex items-center justify-center rounded">
                David
              </div>
            </div>

            {/* Create Post */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <input
                type="text"
                placeholder="What's going on? #Hashtag.. @Mention.. Link.."
                className="w-full border rounded p-2"
              />
              <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded">
                Photo/Video
              </button>
            </div>

            {/* Posts */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-semibold">
                Surfiya Zakir{" "}
                <span className="text-gray-400 text-sm">3 hours ago</span>
              </div>
              <p className="mt-2 text-sm">
                Bacon ipsum dolor amet sirloin jowl turducken pork...
              </p>
              <div className="mt-2 h-32 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                +2 images
              </div>
              <div className="mt-2 flex space-x-4 text-sm">
                <span>👍 2.8K Likes</span>
                <span>💬 22 Comments</span>
                <span>🔗 Share</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/4 space-y-4 ml-4">
            {/* People You May Know */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">People you may know</h3>
              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-2"
                >
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
          </div>
          {/* Chat Section */}
          <div className="bg-white p-4 rounded shadow ml-2">
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
  );
};

export default Home;
