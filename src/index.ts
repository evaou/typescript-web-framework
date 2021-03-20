import { User } from './models/User';

const user = new User({ name: 'NEW RECORD', age: 0 });
user.save();
