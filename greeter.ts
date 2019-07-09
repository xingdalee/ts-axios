class User {
  // 声明好，
  fullName: string;
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.fullName = firstName + lastName);
  }
}
// 定义接口
interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person) => {
  return "hello" + person.firstName + "" + person.lastName;
};
const _user = new User("li", "xingda");
console.log(greeter(_user));
// 运行方式：
// tsc .\greeter.ts
// node .\greeter.js