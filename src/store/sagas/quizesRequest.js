import animals from "./imagens/animals.jpg";
import animation from "./imagens/animation.jpg";
import anime from "./imagens/anime.jpg";
import computers from "./imagens/computers.jpg";
import film from "./imagens/film.jpg";
import games from "./imagens/games.jpeg";
import mathematic from "./imagens/mathematic.jpg";
import mythology from "./imagens/mythology.jpg";
import nature from "./imagens/nature.jpg";
import sports from "./imagens/sports.jpg";


const API_BASE = "https://opentdb.com/api.php?"


async function basicFetch(complemento){
    const resposta = await fetch(`${API_BASE}${complemento}`).then(res=>res.json());
    return resposta;
}




export default async()=>{

    const API_KEY_REQUEST = await fetch("https://opentdb.com/api_token.php?command=request").then(KEY=>KEY.json());
    const API_KEY = API_KEY_REQUEST.token;
    
    return [
        {
            title: "Film",
            image: film,
            item: await basicFetch(`amount=15&category=11&token=${API_KEY}`)
        },
        {
            title: "Games",
            image: games,
            item: await basicFetch(`amount=15&category=15&token=${API_KEY}`)
        },
        {
            title: "Science & Nature",
            image: nature,
            item: await basicFetch(`amount=15&category=17&token=${API_KEY}`)
        },
        {
            title: "Computers",
            image: computers,
            item: await basicFetch(`amount=15&category=18&token=${API_KEY}`)
        },
        {
            title: "Mathematics",
            image: mathematic,
            item: await basicFetch(`amount=15&category=19&token=${API_KEY}`)
        },
        {
            title: "Mythology",
            image: mythology,
            item: await basicFetch(`amount=15&category=20&token=${API_KEY}`)
        },
        {
            title: "Sports",
            image: sports,
            item: await basicFetch(`amount=15&category=21&token=${API_KEY}`)
        },
        {
            title: "Anime & Mangá",
            image: anime,
            item: await basicFetch(`amount=15&category=31&token=${API_KEY}`)
        },
        {
            title: "Cartoon & Animations",
            image: animation,
            item: await basicFetch(`amount=15&category=32&token=${API_KEY}`)
        },
        {
            title: "Animals",
            image: animals,
            item: await basicFetch(`amount=15&category=27&token=${API_KEY}`)
        }
    ]
}