import { useEffect } from "react";

import React, { useState } from "react";
import axios from "axios";
const ChatBox = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     window.botpressWebChat.init({
  //       botId: "your-bot-id",
  //       host: "https://cdn.botpress.cloud/webchat/v1",
  //       messagingUrl: "https://messaging.botpress.cloud",
  //       clientId: "your-bot-id",
  //       lazy: true
  //     });
  //   };
  // }, []);

  // return null;




  return (
    <div className="w-full max-w-xl mx-auto p-4 border rounded-xl bg-white shadow">
      <div className="h-96 overflow-y-auto mb-4 space-y-2">
        {messages.slice(1).map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-500">Đang trả lời...</div>}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          placeholder="Nhập câu hỏi của bạn..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Gửi
        </button>
      </div>
    </div>
  );

};

export default ChatBox;
