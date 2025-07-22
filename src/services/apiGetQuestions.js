export async function getQuestion(index) {
  const res = await fetch(`http://localhost:8000/quizzes`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  const data = await res.json();
  console.log(data[index]);
  return data[index];
}
