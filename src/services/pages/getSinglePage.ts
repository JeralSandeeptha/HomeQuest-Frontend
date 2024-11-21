import axios from "axios";
import { GetSinglePageProps } from "../../types/functions";

const baseURL = process.env.REACT_APP_WORDPRESS_BASE_URL;

const getSinglePage = async (props: GetSinglePageProps) => {
    try {
        await axios.get(`${baseURL}/pages/${props.pageId}`)
            .then((res) => {
                console.log(res.data.acf);
                props.setPage(res.data.acf);
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

export default getSinglePage;