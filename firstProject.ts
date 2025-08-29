type User = {
    name: string;
    age: number;
    isAdmin?: boolean;
};

let user1: User = { name: "Ayush", age: 19 };
let user2: User = { name: "Raj", age: 25, isAdmin: true };

const showUser = (user: User): void => {
     console.log(`Name: ${user.name}, Age: ${user.age}, Admin: ${user.isAdmin ?? "No"}`);
}


showUser(user2);