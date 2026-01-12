import React from "react";

function Card(props) {
  const { title, desc, link = false } = props;

  return (
    // Tambahkan class 'h-full'
    <div className="flex flex-col h-full"> 
      <div className="flex justify-between items-center text-gray-02 mb-2">
        <div className="text-2xl">{title}</div>
        {link && <div className="text-xs">View All</div>}
      </div>
      {/* Tambahkan class 'flex-1' agar background putih memanjang ke bawah */}
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
}

export default Card;