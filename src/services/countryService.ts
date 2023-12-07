import ICountry from "../interface/ICountry";
import CountryRepo from "../repositories/CountryRepo";

class CountryService {
    private repo: CountryRepo
    constructor() {
        this.repo = new CountryRepo();
    }
    public getAllCountry = async() => {
        await this.repo.getAllCountry();
    }
    public addCountry = async(data:ICountry) => {
        await this.repo.addCountry(data);
    }
}
export default CountryService;