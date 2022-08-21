import FetchService from "./fetch.service";

class UserService {
    private fetchService: FetchService;
    constructor() {
        this.fetchService = new FetchService();
    }

    public getUser = async (): Promise<any> => {
        return this.fetchService.get(`/users/me`);
    }
}

export default new UserService();