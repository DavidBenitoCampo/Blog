import { Url } from "url";

export interface Post {
    titulo?: string;
    texto?: string;
    autor?: string;
    imagen?: Url;
    fecha?: string;
    categoria?: string;


}