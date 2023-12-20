export interface User {
    email: string;
    password: string;
    name: string;
}

class UserData {
    static users: User[] = [
        { email: 'nikhil@successive.com', password: 'nik123', name: 'Nikhil' },
        { email: 'somil@successive.com', password: 'somil123', name: 'Somil' },
    ];

    static getUsers(): User[] {
        return this.users;
    }

    static getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
}

export default UserData;
