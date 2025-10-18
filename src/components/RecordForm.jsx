import React, { useState } from "react";

function RecordForm({ addRecord }) {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !duration) return;

    const today = new Date();
    const isoDate = today.toISOString().split("T")[0];

    addRecord({ subject, duration: Number(duration), tag, date: isoDate });

    setSubject(""); setDuration(""); setTag("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
      <input type="text" placeholder="주제" value={subject} onChange={e=>setSubject(e.target.value)} className="w-full mb-2 p-2 border rounded"/>
      <input type="number" placeholder="시간(분)" value={duration} onChange={e=>setDuration(e.target.value)} className="w-full mb-2 p-2 border rounded"/>
      <input type="text" placeholder="태그" value={tag} onChange={e=>setTag(e.target.value)} className="w-full mb-2 p-2 border rounded"/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">기록 추가</button>
    </form>
  );
}

export default RecordForm;
