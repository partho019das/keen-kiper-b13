import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Addfrind = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-6 text-left">Add Friend</h1>

      <button 
        onClick={() => navigate("/Viewcard")}
        className="mb-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        View All Friends
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {friends.map(friend => (
          <div 
            key={friend.id}
            onClick={() => navigate(`/friend/${friend.id}`)}   // 🔥 CLICK HERE
            className="shadow-xl p-4 rounded-lg text-center cursor-pointer"
          >

            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 mx-auto rounded-full"
            />

            <h2 className="mt-3 font-semibold">{friend.name}</h2>

            <p className="text-sm text-[#64748B] mt-1">
              {friend.days_since_contact} days since contact
            </p>

            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-white text-xs ${
                friend.status === "overdue"
                  ? "bg-red-500"
                  : friend.status === "almost due"
                  ? "bg-orange-500"
                  : "bg-[#244D3F]"
              }`}
            >
              {friend.status}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Addfrind;