export interface IPosts {
    id: number;
    title: string;
    body: string;
}

export interface IComments {
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface IImages {
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}