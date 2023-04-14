const Mock = require("mockjs");
const uuid = require("uuid");

const database = { users: [] };

const hobbiesList = [
  "Reading",
  "Music",
  "Sports",
  "Traveling",
  "Cooking",
  "Photography",
  "Drawing",
  "Writing",
  "Dancing",
  "Gardening",
  "Gaming",
  "Coding",
];

Mock.Random.shuffle(hobbiesList);

for (let i = 0; i < 40; i++) {
  database.users.push(
    Mock.mock({
      id: () => uuid.v4(),
      name: "@name",
      email: "@email",
      phone: "@integer(10000000000,99999999999)",
      dob: "@date",
      gender: "@gender",
      hobbies: Mock.Random.pick(hobbiesList, 3),
    })
  );
}
console.log(JSON.stringify(database));
