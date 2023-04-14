const Mock = require("mockjs");
const uuid = require("uuid");

const database = { users: [] };

const hobbiesList = ["travelling", "writing", "gaming", "coding"];

Mock.Random.shuffle(hobbiesList);

const genders = ["male", "female", "transgender"];

for (let i = 0; i < 40; i++) {
  database.users.push(
    Mock.mock({
      id: () => uuid.v4(),
      name: "@name",
      email: "@email",
      phone: "@integer(10000000000,99999999999)",
      dob: "@date",
      gender: "@pick(" + genders + ")",
      hobbies: Mock.Random.pick(hobbiesList, 2),
    })
  );
}
console.log(JSON.stringify(database));
