export async function getQuestion(subject, index) {
  const res = await fetch(`http://localhost:8000/quizzes?subject=${subject}`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  const data = await res.json();
  // console.log(data);
  // console.log(data[index]);
  return data[index];
}
