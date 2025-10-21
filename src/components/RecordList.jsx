import React from "react";

/* 기록 목록 */
function RecordList({ records, deleteRecord }) {
  if (records.length === 0)
    return <p className="text-gray-500">아직 기록이 없습니다.</p>;

  return (
    <ul className="space-y-2">
      {records.map((record, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white p-2 rounded shadow"
        >
          <div>
            <p className="font-semibold">{record.subject}</p>
            <p className="text-sm text-gray-500">
              {record.duration}분 - {record.date}
            </p>
          </div>
          <button
            onClick={() => deleteRecord(index)}
            className="text-red-500 hover:text-red-700"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RecordList;
