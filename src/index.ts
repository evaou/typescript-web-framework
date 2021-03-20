import { User } from './models/User';

const user = new User({ name: 'NEW RECORD', age: 0 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
