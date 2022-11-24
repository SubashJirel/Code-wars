let students = [
    { name: 'Robin', scores: [95, 90, 90, 91] },
    { name: 'James', scores: [90, 80, 80, 60] },
    { name: 'Harry', scores: [70, 60, 90, 90] },
    { name: 'Pogba', scores: [80, 90, 90, 70] }
    ];
    
    //To calculate the grade obtained by the student look at below explanation.
    // Average score greater than or equal to 91 -> A grade
    // Average score greater than or equal to 81 -> B grade
    // Average score greater than or equal to 71 -> C grade
    // Average score greater than or equal to 61 -> D grade
    // For other average scores -> E

    /*
    Task1 : Calculate the grade based on the average score of each student and print it. for eg.
             Robin A
             James B
    Task2 : Add 'grade' as the new property to each student object and store the value of the calculated grade into it.
    Task3 : Print the minimum and maximum average score
    */

    let EveryStudentsMarks =[]
    let avgScore=0
    let min =0
    let max = 0

   const average = (arr)=> {
    let total = arr.reduce((acc,curr) => {
        return acc+=curr
    },0)
    let average = total/arr.length
    return average
   }
   
   
   for(let i =0; i<students.length; i++) {
     avgScore = average(students[i].scores)
    if(avgScore>=91) {
        console.log(`${students[i].name} A`)
        students[i]['Grade'] = 'A'
        EveryStudentsMarks.push(avgScore)
    }
    else if(avgScore>=81) {
        console.log(`${students[i].name} B`)
        students[i]['Grade'] = 'B'
         EveryStudentsMarks.push(avgScore)
    }
    else if(avgScore>=71) {
        console.log(`${students[i].name} C`)
        students[i]['Grade'] = 'C'
         EveryStudentsMarks.push(avgScore)
    }
    else if(avgScore>=61) {
        console.log(`${students[i].name} D`)
        students[i]['Grade'] = 'D'
         EveryStudentsMarks.push(avgScore)
    }
    else  {
        console.log(`${students[i].name} E`)
        students[i]['Grade'] = 'E'
         EveryStudentsMarks.push(avgScore)
    }

   }
   EveryStudentsMarks.sort((a,b) => a-b)
   min = EveryStudentsMarks[0]
   max = EveryStudentsMarks[EveryStudentsMarks.length-1]
   console.log(students, min, max)
   

    