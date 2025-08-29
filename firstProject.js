var user1 = { name: "Ayush", age: 19 };
var user2 = { name: "Raj", age: 25, isAdmin: true };
var showUser = function (user) {
    var _a;
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age, ", Admin: ").concat((_a = user.isAdmin) !== null && _a !== void 0 ? _a : "No"));
};
showUser(user2);
