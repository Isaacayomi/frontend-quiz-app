// export async function getQuestion(subject, index) {
//   const res = await fetch(`http://localhost:8000/quizzes?subject=${subject}`);
//   if (!res.ok) throw new Error("Failed to fetch questions");
//   const data = await res.json();

//   return data[index];
// }

export async function getQuestion(subject, index) {
  const res = await fetch("/quizzes.json");
  if (!res.ok) throw new Error("Failed to fetch questions");

  const data = await res.json();
  console.log("Fetched data:", data);

  const filtered = data.filter((q) => q.subject === subject);
  console.log("Filtered questions:", filtered);

  return filtered[index];
}
