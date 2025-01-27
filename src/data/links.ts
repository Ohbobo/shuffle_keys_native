import { LinksGroupProps } from "../types/links"

export const links: LinksGroupProps[] = [
    {
        description: "Classique",
        mode: "classic",
        path: "classic",
        time: 6000
    },
    {
        description: "Aléatoire",
        mode: "random",
        path: "random",
        time: 90
    },
    {
        description: "Aveugle",
        mode: "blind",
        path: "blind",
        time: 90
    },
]

export const links2 = [
    {
        type: "normale",
        game: [
            {
                description: "Classique",
                mode: "classic",
                path: "classic",
                time: 6000
            },
            {
                description: "Aléatoire",
                mode: "random",
                path: "random",
                time: 90
            },
            {
                description: "Aveugle",
                mode: "blind",
                path: "blind",
                time: 90
            },
        ]
    },
    {
        type: "classée",
        game: [
            {
                description: "Classique",
                mode: "classic",
                path: "classic",
                time: 6000
            },
            {
                description: "Aléatoire",
                mode: "random",
                path: "random",
                time: 90
            },
            {
                description: "Aveugle",
                mode: "blind",
                path: "blind",
                time: 90
            },
        ]
    },
]