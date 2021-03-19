import { User } from './models/User';

console.log('Hi there!');

const user = new User({});

user.set({ age: 888 });

console.log(user.get('name'));
console.log(user.get('age'));
