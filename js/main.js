let students = [{name: 'Иванна', age: 24}, {name: 'Александр', age: 27},
                {name: 'Владимир', age: 25}, {name: 'Денис', age: 26}];
let group = students;
group[1].age = 22;

console.log(students);
console.log(group);



let group2 = students.map(array => {return {...array}});
group2[1].age = 22;

console.log(students);
console.log(group);



let group3 = jQuery.extend(true, { }, students);
group3[1].age = 22;

console.log(students);
console.log(group);