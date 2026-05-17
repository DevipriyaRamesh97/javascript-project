const students = [];

function addstudent(name, score) {
    score = Number(score);
    score = score ?? 0;

    name = name.trim().toUpperCase();

    students.push({ name, score });
}

function getGrade() {
    return students.map((student) => {
        let grade = "F";

        if (student.score >= 90) {
            grade = "A";
        } else if (student.score >= 75) {
            grade = "B";
        } else if (student.score >= 50) {
            grade = "C";
        } else if (student.score >= 35) {
            grade = "D";
        }

        return { ...student, grade };
    });
}

// Top score
function getTopScore() {
    return students.filter((student) => student.score >= 75);
}

// Find student
function findStudent(name) {
    return students.find(
        (student) => student.name === name.toUpperCase()
    );
}

// Check failure
function hasFailure() {
    return students.some((student) => student.score < 35);
}

// Display
function display() {
    const graded = getGrade();

    console.log("Students Data");
    console.log("All Students with Grades");
    console.log("NAME | SCORE | GRADE");

    graded.forEach((student) => {
        console.log(
            `${student.name} | ${student.score} | ${student.grade}`
        );
    });
}

// Adding students
addstudent("devi", "91");
addstudent("priya", "82");
addstudent("pavi", "60");
addstudent("lathika", "75");
addstudent("anithai", "45");
addstudent("Aarti", "26");

// Display
display();

// Top score
console.log("\nTop Score:");
console.log(getTopScore());

// Find student
console.log("\nSearching for DEVI...");
console.log(findStudent("DEVI"));

// Check failures
console.log("\nAny Failures?");
console.log(
    hasFailure()
        ? "Yes, some students failed"
        : "No failures"
);