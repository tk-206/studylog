// 이번 주 총 공부 시간
export const getWeeklyTotal = (records) => {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0,0,0,0);

  return records.reduce((sum, r) => {
    const recordDate = new Date(r.date);
    if (recordDate >= startOfWeek) return sum + Number(r.duration);
    return sum;
  }, 0);
};

// 주간 기록 그룹화 (그래프용)
export const getWeeklyRecords = (records) => {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0,0,0,0);

  const days = Array(7).fill(0); // 일~토
  records.forEach(r => {
    const recordDate = new Date(r.date);
    if (recordDate >= startOfWeek) {
      const dayIndex = recordDate.getDay();
      days[dayIndex] += Number(r.duration);
    }
  });
  return days;
};
