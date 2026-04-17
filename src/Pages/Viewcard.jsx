import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Viewcard = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-6">All Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {friends.map(friend => (
          <div 
            key={friend.id}
            onClick={() => navigate(`/friend/${friend.id}`)}
            className="shadow-lg p-4 rounded-lg cursor-pointer"
          >

            <img
              src={friend.picture}
              className="w-16 h-16 rounded-full"
            />

            <h2 className="mt-2 font-semibold">{friend.name}</h2>

            <p className="text-sm text-gray-500">
              {friend.email}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Viewcard;