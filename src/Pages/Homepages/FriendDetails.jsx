import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
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

  // ✅ SAVE TO TIMELINE
  const saveToTimeline = (type) => {
    const old = JSON.parse(localStorage.getItem("timeline")) || [];

    const newItem = {
      id: Date.now(),
      name: friend.name,
      type,
      time: new Date().toLocaleString()
    };

    localStorage.setItem("timeline", JSON.stringify([...old, newItem]));
  };

  // ✅ CLICK HANDLER
  const handleAction = (type) => {
    setAction(type);
    saveToTimeline(type);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">

      {/* TOP BAR */}
      {action && (
        <div className="mb-5 p-3 bg-blue-100 border rounded flex justify-between items-center">
          <p>
            {action === "call" && `📞 Calling ${friend.name}`}
            {action === "message" && `💬 Messaging ${friend.name}`}
            {action === "video" && `🎥 Video calling ${friend.name}`}
          </p>

          <button onClick={() => setAction(null)} className="text-red-500">
            Close
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="space-y-5">

          <div className="bg-white shadow p-6 rounded text-center">
            <img src={friend.picture} className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-bold mt-3">{friend.name}</h2>
            <p className="text-gray-500">{friend.email}</p>
            <p className="text-sm mt-2">{friend.status}</p>
          </div>

          <div className="space-y-3">

            <div className="bg-white shadow p-4 rounded cursor-pointer">
              🔕 Snooze
            </div>

            <div className="bg-white shadow p-4 rounded cursor-pointer">
              📦 Archive
            </div>

            <div className="bg-white shadow p-4 rounded cursor-pointer text-red-500">
              🗑 Delete
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-5">

          <div className="grid grid-cols-3 gap-3">

            <div className="bg-white shadow p-4 text-center rounded">
              <p>Days</p>
              <h2 className="font-bold">{friend.days_since_contact}</h2>
            </div>

            <div className="bg-white shadow p-4 text-center rounded">
              <p>Goal</p>
              <h2 className="font-bold">{friend.goal}</h2>
            </div>

            <div className="bg-white shadow p-4 text-center rounded">
              <p>Next</p>
              <h2 className="font-bold">{friend.next_due_date}</h2>
            </div>

          </div>

          <div className="bg-white shadow p-5 rounded">
            <h2 className="font-bold">Relationship Goal</h2>
            <p className="text-gray-600 mt-2">
              Stay connected regularly and maintain strong relationship.
            </p>
          </div>

          <div className="bg-white shadow p-5 rounded">
            <h2 className="font-bold">Tags</h2>

            <div className="flex gap-2 flex-wrap mt-3">
              {friend.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="grid grid-cols-3 gap-3">

            <div
              onClick={() => handleAction("call")}
              className="bg-white shadow p-4 text-center rounded cursor-pointer"
            >
              📞 Call
            </div>

            <div
              onClick={() => handleAction("message")}
              className="bg-white shadow p-4 text-center rounded cursor-pointer"
            >
              💬 Message
            </div>

            <div
              onClick={() => handleAction("video")}
              className="bg-white shadow p-4 text-center rounded cursor-pointer"
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