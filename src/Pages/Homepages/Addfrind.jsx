import React, { useEffect, useState } from 'react';

const Addfrind = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className="p-5">

      {/* Title left aligned */}
      <h1 className="text-2xl font-bold mb-6 text-left">Add Friend</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {friends.map(friend => (
          <div key={friend.id} className="shadow-xl p-4 rounded-lg text-center">

            {/* Profile Image */}
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 mx-auto rounded-full"
            />

            {/* Name */}
            <h2 className="mt-3 font-semibold">{friend.name}</h2>

            {/* Days since contact */}
            <p className="text-sm text-[#64748B] mt-1">
              {friend.days_since_contact} days since contact
            </p>

            {/* Status Badge */}
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
