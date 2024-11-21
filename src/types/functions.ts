import { Dispatch, SetStateAction } from "react";

export type GetSinglePageProps = {
    pageId: number,
    setPage: Dispatch<SetStateAction<object>>
};