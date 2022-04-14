"use strict";
const person = {
    name: 'Sisham',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
//person.role[1] =10;
let FavoriteActivities;
FavoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase);
}
