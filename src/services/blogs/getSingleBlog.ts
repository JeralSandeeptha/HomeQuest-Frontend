import axios from "axios";
import { GetSingleBlogProps } from "../../types/functions";

const baseURL = process.env.REACT_APP_WORDPRESS_BASE_URL;

const getSingleBlog = (props: GetSingleBlogProps) => {
    try {
        axios.get(`${baseURL}/blogs/${props.blogId}`)
            .then((res) => {
                console.log(res.data);
                props.setBlog({
                    title: res.data.acf.blog_title,
                    date: res.data.acf.blog_date,
                    content: res.data.content.rendered
                });
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}

export default getSingleBlog;