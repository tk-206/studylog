import React from "react";

function FilterSearch({ filter, setFilter, records }) {
  const tags = Array.from(new Set(records.map(r => r.tag))).filter(t => t);

  return (
    <div className="mb-4 flex gap-2">
      <select className="border p-1 rounded" value={filter.tag} onChange={e=>setFilter({...filter, tag:e.target.value})}>
        <option value="">전체 태그</option>
        {tags.map((t,i)=><option key={i} value={t}>{t}</option>)}
      </select>
      <input type="text" placeholder="검색" value={filter.search} onChange={e=>setFilter({...filter, search:e.target.value})} className="border p-1 rounded flex-1"/>
    </div>
  );
}

export default FilterSearch;
