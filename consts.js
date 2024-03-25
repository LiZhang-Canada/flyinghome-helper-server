const bcrypt = require("bcryptjs");
const users = [
  {
    id: "1",
    name: "Li Zhang",
    email: "li.zhang@gmail.com",
    password: bcrypt.hashSync("rootroot"),
  },
  {
    id: "2",
    name: "Yan Zhang",
    email: "yan.zhang@qq.com",
    password: bcrypt.hashSync("test1234"),
  },
]

module.exports = { users };