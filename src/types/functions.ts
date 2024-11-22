import { Dispatch, SetStateAction } from "react";
import { Blog } from "./interface";

export type GetSinglePageProps = {
    pageId: number,
    setPage: Dispatch<SetStateAction<object>>
};

export type GetSingleBlogProps = {
    blogId: number,
    setBlog: Dispatch<SetStateAction<Blog | undefined>>
}