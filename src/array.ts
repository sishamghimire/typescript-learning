const person:{
    name:string;
    age: number;
    hobbies: string[];
    role:[number,string];
}
={
    name:'Sisham',
    age:20,
    hobbies: ['Sports','Cooking'],
    role:[2,'author']
};

person.role.push('admin');
//person.role[1] =10;

let FavoriteActivities: string[];
FavoriteActivities =['Sports']; 


console.log(person.name);

for( const hobby of person.hobbies){
    console.log(hobby.toLocaleLowerCase);
}