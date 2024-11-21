import axios from "axios";

const baseURL = process.env.REACT_APP_WORDPRESS_BASE_URL;

const getAllPages = async () => {
    try {
        await axios.get(`${baseURL}/pages`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

export default getAllPages;