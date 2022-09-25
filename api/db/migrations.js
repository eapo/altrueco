import { Migrations } from 'meteor/percolate:migrations';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../tasks/tasks.collection';

Migrations.add({
  version: 1,
  name: 'Add a seed username and password.',
  up() {
    Accounts.createUser({
      username: 'altruist',
      password: 'SzeretetGazdaság',
    });
  },
});

Migrations.add({
  version: 2,
  name: 'Add a few sample listings.',
  up() {
    const createdAt = new Date();
    const { _id: userId } = Accounts.findUserByUsername('altruist');
    TasksCollection.insert({
      description: 'Install Node@14',
      userId,
      createdAt,
    });
    TasksCollection.insert({
      description: 'Install MeteorJS',
      userId,
      createdAt,
    });
    TasksCollection.insert({
      description: 'Clone this repository',
      userId,
      createdAt,
    });
  },
});
