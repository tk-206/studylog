const STORAGE_KEY = "studylog_records";

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
