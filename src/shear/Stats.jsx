import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(saved);
  }, []);

  const call = data.filter(i => i.type === "call").length;
  const message = data.filter(i => i.type === "message").length;
  const video = data.filter(i => i.type === "video").length;

  const total = call + message + video || 1;

  const callPer = (call / total) * 100;
  const msgPer = (message / total) * 100;
  const videoPer = (video / total) * 100;

  // 🔥 GAP SIZE (small white separation)
  const gap = 1;

  return (
    <div className="p-5">

      <h2 className="text-3xl font-bold text-green-900 mb-10">
        Friendship Analytics
      </h2>

      {/* PIE CHART */}
      <div className="flex justify-center">

        <div
          className="w-72 h-72 rounded-full shadow-lg relative"
          style={{
            background: `conic-gradient(
              green 0% ${callPer - gap}%,
              white ${callPer - gap}% ${callPer}%,

              #244D3F ${callPer}% ${callPer + msgPer - gap}%,
              white ${callPer + msgPer - gap}% ${callPer + msgPer}%,

              purple ${callPer + msgPer}% ${100 - gap}%,
              white ${100 - gap}% 100%
            )`
          }}
        >

          {/* CENTER */}
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow">

            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold">{total}</p>

          </div>

        </div>
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-6 mt-8">

        <div className="text-green-600 font-bold">
          📞 Call {call}
        </div>

        <div className="text-[#244D3F] font-bold">
          💬 Message {message}
        </div>

        <div className="text-purple-600 font-bold">
          🎥 Video {video}
        </div>

      </div>

    </div>
  );
};

export default Stats;