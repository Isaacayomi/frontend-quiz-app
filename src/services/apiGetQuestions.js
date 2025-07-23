export async function getQuestion(subject, index) {
  const res = await fetch(`http://localhost:8000/quizzes?subject=${subject}`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  const data = await res.json();

  return data[index];
}
