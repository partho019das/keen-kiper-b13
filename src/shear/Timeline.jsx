import React, { useEffect, useState, useRef } from 'react';

const Timeline = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  const boxRef = useRef();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(saved);
  }, []);

  // 🔥 close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    switch (filter) {
      case "call": return "Call";
      case "message": return "Message";
      case "video": return "Video";
      default: return "All Activities";
    }
  };

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-5">Timeline</h1>

      {/* 🔥 SEARCH STYLE FILTER */}
      <div ref={boxRef} className="relative w-72 mb-5">

        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center border px-3 py-2 rounded bg-white cursor-pointer"
        >
          <span className="text-gray-700">{getLabel()}</span>
          <span className="text-gray-400">⌄</span>
        </div>

        {open && (
          <div className="absolute left-0 mt-1 w-full bg-white border rounded shadow z-10">

            {[
              { label: "All Activities", value: "all" },
              { label: "Call", value: "call" },
              { label: "Message", value: "message" },
              { label: "Video", value: "video" },
            ].map(item => (
              <div
                key={item.value}
                onClick={() => handleSelect(item.value)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.label}
              </div>
            ))}

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