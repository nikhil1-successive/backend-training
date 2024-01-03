export interface IUser {
    email: string;
    password: string;
    name: string;
}
class UserData {
    static users: IUser[] = [
        { email: 'nikhil@successive.com', password: 'nik123', name: 'Nikhil' },
        { email: 'somil@successive.com', password: 'somil123', name: 'Somil' },
    ];
    static getUsers(): IUser[] {
        return this.users;
    }
    static getUserByEmail(email: string): IUser | undefined {
        return this.users.find(user => user.email === email);
    }
}
export default UserData;
