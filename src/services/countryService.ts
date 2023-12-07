import CountryRepo from "../repositories/CountryRepo";

class CountryService {
    private repo: CountryRepo
    constructor() {
        this.repo = new CountryRepo();
    }
    public getAllCountry = async() => {
        await this.repo.getAllCountry();
    }
}
export default CountryService;