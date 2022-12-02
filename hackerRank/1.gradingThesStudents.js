/*
HackerLand University has the following grading policy:

* Every student receives a grade in the inclusive range from 0 to 100.

* Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:

© Ifthe difference between the grade and the next multiple of 5 is less than 3, round grade up to the next
multiple of 5.

© If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
Examples

« grade = 84 round to 85 (85 - 84 is less than 3)

* grade = 29 do not round (result is less than 40)

© grade = 57 do not round (60 - 57 is 3 or higher)


1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 — 73 < 3, the student's grade
is rounded to 75.

2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 — 67 = 3, the grade will not be
modified and the student's final grade is 67.

3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 — 38 < 3, the student's grade
will be rounded to 40.

4. Student 4 received a grade below 33, so the grade will not be modified and the student's final grade is 33.

*/

//my code
function gradingStudents(grades) {
    // Write your code here
    for(let i =0; i<grades.length;i++) {
        if(grades[i] <38 ) {
            continue
        }
        else {
            let multipleOfFive = Math.round(grades[i]/10)*10
            let difference = grades[i] - multipleOfFive

            if(difference > 0 && difference>2) {
                grades[i] = multipleOfFive+5   // ex :multipleOfFive: 73 -> 70, then grades[i] = 70 +5 = 75
            }
            else if(difference<0 && Math.abs(difference) <3){
                grades[i] = multipleOfFive   //ex:multipleOfFive: 78 -> 80, then grades[i] =80
            }
            
        }
    }

    return grades

}

console.log(gradingStudents([33,73,78,71]))