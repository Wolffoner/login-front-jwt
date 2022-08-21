import { ServerUser } from "@/models";
import FetchService from "./fetch.service";

class AuthService {
    private fetchService: FetchService;
    constructor() {
        this.fetchService = new FetchService();
    }

    public login = async (serverUser: ServerUser): Promise<any> => {
        return this.fetchService.post(`/authenticate`, serverUser);
    }
}

export default new AuthService();