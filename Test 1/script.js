function getRequiredText(message) {
  let input = prompt(message);

  while (input === null || input.trim() === "") {
    alert("This field is required.");
    input = prompt(message);
  }

  return input.trim();
}


function getValidMark(message) {
  let input = getRequiredText(message);
  let mark = Number(input);

  while (Number.isNaN(mark) || mark < 0 || mark > 100) {
    alert("Enter a valid number between 0 and 100.");
    input = getRequiredText(message);
    mark = Number(input);
  }

  return mark;
}


function calculateAverage(markOne, markTwo, markThree) {
  return (markOne + markTwo + markThree) / 3;
}

function calculateGrade(average) {
  if (average >= 80) {
    return "A";
  } else if (average >= 70) {
    return "B";
  } else if (average >= 60) {
    return "C";
  } else if (average >= 50) {
    return "D";
  } else {
    return "E";
  }
}


let studentName = getRequiredText("Input Student Full Name");
let courseName = getRequiredText("Input Course Name");


let subjectOne = getValidMark("Input marks for subject 1");
let subjectTwo = getValidMark("Input marks for subject 2");
let subjectThree = getValidMark("Input marks for subject 3");


let average = calculateAverage(subjectOne, subjectTwo, subjectThree);
let grade = calculateGrade(average);

let result = `STUDENT RESULTS
Student: ${studentName}
Course: ${courseName}
Subject 1: ${subjectOne}
Subject 2: ${subjectTwo}
Subject 3: ${subjectThree}
Average: ${average.toFixed(2)}
Grade: ${grade}`;

console.log(result);
alert(result);