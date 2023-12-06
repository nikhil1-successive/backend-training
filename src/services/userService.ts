import UserRepo from "../repositories/UserRepo";

class UserService{
    private repo:UserRepo
    constructor(){
        this.repo=new UserRepo();
    }
    public getAllUsers=()=>{
        this.repo.getAllUsers();
    }




}
export default UserService;