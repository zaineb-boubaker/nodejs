const generatepwd = require("generate-password")


const pwd = generatepwd.generate({
  length: 10,
    numbers: true,
  symbols:true,
});
console.log(pwd);