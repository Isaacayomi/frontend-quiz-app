export default async function getQuestion() {
  const res = await fetch(`http://localhost:8000/quizzes`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  const data = await res.json();
  return data;
}
