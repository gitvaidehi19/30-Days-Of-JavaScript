const analyzeBtn = document.getElementById('analyzeBtn');

analyzeBtn.addEventListener('click', function () {

    const studentName = document.getElementById('studentName').value;

    const maths = Number(document.getElementById('maths').value);
    const science = Number(document.getElementById('science').value);
    const english = Number(document.getElementById('english').value);
    const computer = Number(document.getElementById('computer').value);
    const social = Number(document.getElementById('social').value);

    // Store all marks in an array
    let marks = [];
    marks.push(maths, science, english, computer, social);

    // Calculate total
    const totalMarks = maths + science + english + computer + social;

    // Calculate average
    const averageMarks = totalMarks / 5;

    // Calculate grade
    const grade = averageMarks >= 90 ? 'A+' :
                  averageMarks >= 80 ? 'A' :
                  averageMarks >= 70 ? 'B' :
                  averageMarks >= 60 ? 'C' :
                  averageMarks >= 50 ? 'D' : 'F';

    // Check Pass / Fail
    let result = 'Pass';

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 35) {
            result = 'Fail';
            break;
        }
    }

    // Subjects array
    let subjects = [
        'Maths',
        'Science',
        'English',
        'Computer',
        'Social Studies'
    ];

    // Assume first mark is highest and lowest
    let highest = marks[0];
    let lowest = marks[0];

    let highestIndex = 0;
    let lowestIndex = 0;

    // Find highest and lowest marks
    for (let i = 1; i < marks.length; i++) {

        if (marks[i] > highest) {
            highest = marks[i];
            highestIndex = i;
        }

        if (marks[i] < lowest) {
            lowest = marks[i];
            lowestIndex = i;
        }
    }

    // Find subject names
    const bestSubject = subjects[highestIndex];
    const lowestSubject = subjects[lowestIndex];

    // Display results
    document.getElementById('printName').textContent = studentName;

    document.getElementById('printTotal').textContent = totalMarks;

    document.getElementById('printAverage').textContent =
        averageMarks.toFixed(2);

    document.getElementById('printGrade').textContent = grade;

    document.getElementById('printResult').textContent = result;

    document.getElementById('printHighest').textContent =
        `${bestSubject}: ${highest}`;

    document.getElementById('printLowest').textContent =
        `${lowestSubject}: ${lowest}`;

});