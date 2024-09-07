const userDatabase = new Map();

function addUser(id, userInfo) {
    userDatabase.set(id, userInfo);
}

function getUser(id) {
    return userDatabase.get(id);
}

// Usage Example
addUser(1, { name: "Alice", email: "alice@example.com" });
addUser(2, { name: "Bob", email: "bob@example.com" });

console.log(getUser(1)); // { name: "Alice", email: "alice@example.com" }
console.log(getUser(3)); // undefined (user not found)
