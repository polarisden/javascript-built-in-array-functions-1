const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let average = 0;
  let result = 0;
  result = students.reduce((acc,student) => {
    return acc + student.score;
  },0);

  return average = result/students.length;

}

console.log(getAverageStudentScore(students)); // Output: 87.5
