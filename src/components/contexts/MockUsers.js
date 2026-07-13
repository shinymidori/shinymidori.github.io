const mockUsers = [
    { username: "User1", pin: "1234567" },
    { username: "User2", pin: "7654321" }
];

if (!localStorage.getItem("mockUsers")) {
    localStorage.setItem("mockUsers", JSON.stringify(mockUsers));
}

export const getUsers = () => {
    const users = localStorage.getItem("mockUsers");
    return users ? JSON.parse(users) : [];
};

export const addUser = (newUser) => {
    const users = getUsers();
    users.push(newUser);
    localStorage.setItem("mockUsers", JSON.stringify(users));
};

export const userExists = (username) => {
    const users = getUsers();
    return users.some(u => u.username === username);
};

export const validateUser = (username, pin) => {
    const users = getUsers();
    return users.some(u => u.username === username && u.pin === pin);
};