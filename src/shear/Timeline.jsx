import React, { useEffect, useState } from 'react';

const Timeline = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(saved);
  }, []);

  const filteredData =
    filter === "all"
      ? data
      : data.filter(item => item.type === filter);

  const handleSelect = (type) => {
    setFilter(type);
    setOpen(false);
  };

  const getLabel = () => {
    if (filter === "all") return "All Activities";
    if (filter === "call") return "Call";
    if (filter === "message") return "Message";
    if (filter === "video") return "Video";
  };

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-5">Timeline</h1>

      {/* 🔥 SEARCH STYLE FILTER */}
      <div className="relative w-72 mb-5">

        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center border px-3 py-2 rounded cursor-pointer bg-white"
        >
          <input
            readOnly
            value={getLabel()}
            className="outline-none w-full cursor-pointer"
          />

          <span>▼</span>
        </div>

        {open && (
          <div className="absolute left-0 mt-1 w-full bg-white border rounded shadow z-10">

            <div
              onClick={() => handleSelect("all")}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              All Activities
            </div>

            <div
              onClick={() => handleSelect("call")}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Call
            </div>

            <div
              onClick={() => handleSelect("message")}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Message
            </div>

            <div
              onClick={() => handleSelect("video")}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Video
            </div>

          </div>
        )}

      </div>

      {/* 🔥 LIST */}
      {filteredData.length === 0 ? (
        <p className="text-gray-500">No activity found</p>
      ) : (
        <div className="space-y-3">

          {filteredData.map(item => (
            <div
              key={item.id}
              className="p-4 bg-white shadow rounded"
            >

              <h2 className="font-bold">{item.name}</h2>

              <p className="text-sm text-gray-500">
                {item.type === "call" && "📞 Call"}
                {item.type === "message" && "💬 Message"}
                {item.type === "video" && "🎥 Video"}
              </p>

              <p className="text-xs text-gray-400">{item.time}</p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Timeline;