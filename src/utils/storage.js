const STORAGE_KEY = "studylog_records";

/* 데이터 저장 및 불러오기 유틸리티 함수 */
export const saveRecords = (records) => {
  try {
    if (!Array.isArray(records)) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    console.error("LocalStorage 저장 실패", e);
  }
};

export const loadRecords = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("LocalStorage 불러오기 실패", e);
    return [];
  }
};
