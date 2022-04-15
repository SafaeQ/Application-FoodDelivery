import axios from "axios";
// import api from "../components/api";
import authHeader from "./auth-header";
const URL = 'http://localhost:9988/api/leaders'


const getAdminBoard = () => {
    return axios.get(URL +"admin", { headers: authHeader() });
};

const UserService = {
    getAdminBoard
}

export default UserService;