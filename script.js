function whatMealsIT(hour) { 
    if (hour >= 0 && hour <=3){ 
        console.log(`Its breakfast time! Eat eggs.`)
    } else if (hour >=3 && hour <= 7){ 
        console.log(`Lunch time! Sammich time!`) 
    } else if (hour >= 7 && hour <= 11){ 
        console.log(`Its time for dinner. Eat some burgers.`)
    } else { 
        console.log(`Don't eat.`)
    }
}

whatMealsIT(2);
whatMealsIT(4);
whatMealsIT(8);
whatMealsIT(13);

function findShortestWord(array) {
    let choiceWord = array[0];
    for(let i = 0; i < array.length; i++) { 
        if (choiceWord.length < array[i].length) { 
            choiceWord = array[i];
        }
        return choiceWord;
    } 
}

let words = ["banana", "glue", "cup", "flowers"];
console.log(findShortestWord(words));




let numbers = [2, 19, 8, 17, 4, 8];

function divisibleArray(array) {
    let num = [];
    for(let i = 0; i < array.length; i++) { 
        if (array[i] % 2 == 0){
            num.push(array[i]);
        } 
    }
    return num;
}

console.log(divisibleArray(numbers));


const singers = [
    {name: 'Beyonce', profession: 'singers', age: 38},
    {name: 'Mae Jemison', profession: 'astronaut', age: 63},
    {name: 'Patrick Stewart', profession: 'actor', age: 79},
    {name: 'Greta Thunberg', profession: 'activist', age: 15}
]

function getPersonInfo(name){ 
    let 
}



// Lab 3

let submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
]

function addSubmission(array, newName, newScore, newDate) { 
    let newSubmissions = {
        name: newName, score: newScore, date: newDate, passed: newScore >= 60
    }
    array.push(newSubmissions);
}

addSubmission(submissions, 'Louise', 79, '2020-03-20');
console.log(submissions);
