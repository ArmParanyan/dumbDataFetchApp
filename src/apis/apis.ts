import { IComments, IImages, IPosts } from "../interfaces/interfaces";

export const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await res.json() as IPosts[];
    } catch (error) {
        throw(error);
    }
}

export const getComments = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        return await res.json() as IComments[];
    } catch (error) {
        throw(error);
    }
}

export const getImages = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        return await res.json() as IImages[];
    } catch (error) {
        throw (error);
    } 
}