import React, { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import FilterSearch from "./components/FilterSearch";
import WeeklyChart from "./components/WeeklyChart";
import { saveRecords, loadRecords } from "./utils/storage";
import { getWeeklyTotal, getWeeklyRecords } from "./utils/stats";

function App() {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState({ tag: "", search: "" });
  /* 초기 로드 및 저장 */
  useEffect(() => setRecords(loadRecords()), []);
  useEffect(() => saveRecords(records), [records]);

  const addRecord = (record) => setRecords([record, ...records]);
  const deleteRecord = (index) => {
    const newRecords = [...records];
    newRecords.splice(index, 1);
    setRecords(newRecords);
  };
 // 필터링된 기록
  const filteredRecords = records.filter(r => 
    (!filter.tag || r.tag === filter.tag) &&
    (!filter.search || r.subject.includes(filter.search))
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">StudyLog</h1>

      {/* 주간 통계 */}
      <div className="mb-4 p-4 bg-blue-100 rounded">
        이번 주 총 공부 시간: {getWeeklyTotal(records)}분(시간 분 변경)
      </div>

      {/* 주간 그래프 */}
      <div className="mb-6">
        <WeeklyChart weeklyData={getWeeklyRecords(records)} />
      </div>

      {/* 필터/검색 */}
      <FilterSearch filter={filter} setFilter={setFilter} records={records} />

      {/* 기록 입력 */}
      <RecordForm addRecord={addRecord} />

      {/* 기록 리스트 */}
      <RecordList records={filteredRecords} deleteRecord={deleteRecord} />
    </div>
  );
}

export default App;
