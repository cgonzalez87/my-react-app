import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:'994b2083fffd4c08b9b07dd7404f2757'
    }
})