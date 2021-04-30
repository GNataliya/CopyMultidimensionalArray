let students = [{name: 'Иванна', age: 24}, {name: 'Александр', age: 27},
                {name: 'Владимир', age: 25}, {name: 'Денис', age: 26}];
let group = students;
group[1].age = 22;

console.log(students);
console.log(group);


students.map(array => {return {...array}});