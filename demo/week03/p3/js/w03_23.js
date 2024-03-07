import { scores_data,students } from "../data/d.js";
console.log(scores_data);
console.log(students);
scores_data.sort();//by alphabet
console.log("after sorted ",scores_data );

console.log(`${scores_data} sorted` );
scores_data.sort((a,b)=>{return b-a;});
console.log(`${scores_data} sorted` );

console.log(`${scores_data[0]} is the higest` );
console.log(`${scores_data[scores_data.length-1]} is the lowerest` );



const decorateStudents=students.map((s)=>{
    return {...s,role:'tku student'};

});
console.log(decorateStudents);

console.log("sorted by desc");
console.log(students.sort((i,j)=>{
    return j.score- i.score;
}));
console.log(`${students[0].score} ${students[0].name} is the higest` );
console.log(`${students[students.length-1].name} is the lowerest ${students[students.length-1].score} ` );