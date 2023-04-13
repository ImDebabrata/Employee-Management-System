const Mock = require("mockjs");
const uuid = require("uuid");

const mockUser = Mock.mock({
  "users|50": [
    {
      id: () => uuid.v4(),
      name: Mock.Random.name(),
      email: Mock.Random.email(),
      phone: Mock.Random.string("number", 10),
      dob: Mock.Random.date(),
      gender: Mock.Random.boolean() ? "male" : "female",
      hobbies: Mock.Random.shuffle([
        "reading",
        "traveling",
        "cooking",
        "painting",
      ]),
    },
  ],
});
console.log(JSON.stringify(mockUser));
