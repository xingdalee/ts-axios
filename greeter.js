var User = /** @class */ (function () {
    function User(firstName, lastName) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.fullName = firstName + lastName);
    }
    return User;
}());
var greeter = function (person) {
    return "hello" + person.firstName + "" + person.lastName;
};
var _user = new User("li", "xingda");
console.log(greeter(_user));
