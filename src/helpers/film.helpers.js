export default function filterFilmsByDirector(list, director) {
  return director ? list.filter((film) => film.director === director) : list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map(item => item[prop]))];
}

export function getFilmStats(list) {
  const rtScores = list.map(item => parseInt(item.vote_average));
  const total = rtScores.length;
  const accScore = rtScores.reduce((sum,val) => sum + val, 0);
  const avgScore = accScore / total;
  const latest = list.map(item => item.release_date).sort((a,b) => b-a);

  return {
    "acc_score": accScore,
    "avg_score": avgScore,
    "total": total,
    "latest": latest[0]
  };
}