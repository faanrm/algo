function gradingStudents(grades: number[]): number[] {
  let note: number[] = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
      if (nextMultipleOfFive - grades[i] < 3) {
        note.push(nextMultipleOfFive);
      } else {
        note.push(grades[i]);
      }
    } else {
      note.push(grades[i]);
    }
  }
  return note;
}
