import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  // 🔥 ACTION STATE
  const [action, setAction] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id === Number(id));
        setFriend(found || null);
      });
  }, [id]);

  if (!friend) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-5">

      {/* 🔥 TOP ACTION BAR */}
      {action && (
        <div className="mb-5 p-3 bg-blue-100 border rounded flex justify-between items-center">
          <p className="font-medium">
            {action === "call" && `📞 You are calling ${friend.name}`}
            {action === "message" && `💬 You are messaging ${friend.name}`}
            {action === "video" && `🎥 You are video calling ${friend.name}`}
          </p>

          <button
            onClick={() => setAction(null)}
            className="text-red-500 text-sm"
          >
            Close
          </button>
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ================= LEFT ================= */}
        <div className="space-y-5">

          {/* PROFILE */}
          <div className="shadow-xl p-6 rounded-lg bg-white text-center">

            <img
              src={friend.picture}
              className="w-24 h-24 mx-auto rounded-full"
            />

            <h2 className="text-xl font-bold mt-3">{friend.name}</h2>
            <p className="text-gray-500">{friend.email}</p>

            <span className="inline-block mt-2 px-3 py-1 text-xs rounded bg-green-500 text-white">
              {friend.status}
            </span>
          </div>

          {/* LEFT ACTIONS */}
          <div className="space-y-3">

            <div className="shadow-md p-4 rounded-lg bg-white cursor-pointer">
              🔕 Snooze
            </div>

            <div className="shadow-md p-4 rounded-lg bg-white cursor-pointer">
              📦 Archive
            </div>

            <div className="shadow-md p-4 rounded-lg bg-white cursor-pointer text-red-500">
              🗑 Delete
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="md:col-span-2 flex flex-col justify-between">

          {/* TOP CONTENT */}
          <div className="space-y-5">

            {/* INFO */}
            <div className="grid grid-cols-3 gap-3">

              <div className="shadow-lg p-4 bg-white text-center rounded">
                <p className="text-sm text-gray-500">Days</p>
                <h2 className="font-bold">{friend.days_since_contact}</h2>
              </div>

              <div className="shadow-lg p-4 bg-white text-center rounded">
                <p className="text-sm text-gray-500">Goal</p>
                <h2 className="font-bold">{friend.goal}</h2>
              </div>

              <div className="shadow-lg p-4 bg-white text-center rounded">
                <p className="text-sm text-gray-500">Next Due</p>
                <h2 className="font-bold">{friend.next_due_date}</h2>
              </div>

            </div>

            {/* RELATIONSHIP */}
            <div className="shadow-lg p-5 rounded-lg bg-white">
              <h2 className="font-bold">Relationship Goal</h2>
              <p className="text-gray-600 mt-2">
                Stay connected regularly and maintain strong relationship.
              </p>
            </div>

            {/* TAGS */}
            <div className="shadow-lg p-5 rounded-lg bg-white">
              <h2 className="font-bold">Tags</h2>

              <div className="flex flex-wrap gap-2 mt-3">
                {friend.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* 🔥 ACTION BUTTONS (CLICK ENABLED) */}
          <div className="grid grid-cols-3 gap-3 mt-6">

            <div
              onClick={() => setAction("call")}
              className="shadow-lg p-4 bg-white text-center rounded cursor-pointer hover:bg-gray-100"
            >
              📞 Call
            </div>

            <div
              onClick={() => setAction("message")}
              className="shadow-lg p-4 bg-white text-center rounded cursor-pointer hover:bg-gray-100"
            >
              💬 Message
            </div>

            <div
              onClick={() => setAction("video")}
              className="shadow-lg p-4 bg-white text-center rounded cursor-pointer hover:bg-gray-100"
            >
              🎥 Video
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default FriendDetails;