import UserRepo from "../repositories/UserRepo.js";

class CountryService {
    private repo: UserRepo
    constructor() {
        this.repo = new UserRepo();
    }
    public getAllUsers = () => {
        this.repo.getAllUsers();
    }
}
export default CountryService;