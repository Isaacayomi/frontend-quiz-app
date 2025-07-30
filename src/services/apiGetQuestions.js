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
  const filtered = data.filter(
    (q) => q.subject && q.subject.toLowerCase() === subject.toLowerCase(),
  );

  if (filtered.length === 0) {
    throw new Error(`No questions found for subject: ${subject}`);
  }

  if (index < 0 || index >= filtered.length) {
    throw new Error(`Index ${index} is out of bounds for subject ${subject}`);
  }

  return filtered[index];
}
