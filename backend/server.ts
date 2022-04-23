import axios from "axios";
import express, { Request, Response } from "express";
import path from "path";

require("dotenv").config();

const PORT =
    process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;
const app = express();

app.set("trust proxy", 1);
app.use(express.json()); 


app.get("/api/spoonacular/recipes/random", (req: Request<any, any, any, any>, res: Response<any>) => {
    let searchParams = new URLSearchParams(req.query);
    searchParams.append(`apiKey`, process.env.SPOONACULAR_KEY)
    const url = `https://api.spoonacular.com/recipes/random?${searchParams.toString()}`
    console.log(url)

    axios
        .get(`https://api.spoonacular.com/recipes/random?${searchParams.toString()}`)
        .then((response) => {
            res.json(response.data);
        });
});

app.get("/api/deezer/search/playlist", (req: Request<any, any, any, any>, res: Response<any>) => {
    let searchParams = new URLSearchParams(req.query);
    const url = `https://api.deezer.com/search/playlist?${searchParams.toString()}`
    console.log(url)

    axios
        .get(`https://api.deezer.com/search/playlist?${searchParams.toString()}`)
        .then((response) => {
            if (response.data && response.data.data) {
                let randomiser = Math.floor((Math.random() * response.data.data.length));
                res.json(response.data.data[randomiser]);
            } else {
                res.status(404).json({error: 'No results found'})
            }
            });
});


app.get("/api/themoviedb/3/search/movie", (req: Request<any, any, any, any>, res: Response<any>) => {
    let searchParams = new URLSearchParams(req.query);
    searchParams.append(`api_key`, process.env.THEMOVIEDB_KEY)
    const url = `https://api.themoviedb.org/3/search/movie?${searchParams.toString()}`
    console.log(url)

    axios
        .get(`https://api.themoviedb.org/3/search/movie?${searchParams.toString()}`)
        .then((response) => {
            if (response.data && response.data.results) {
                let randomiser = Math.floor((Math.random() * response.data.results.length));
                res.json(response.data.results[randomiser]);
            } else {
                res.status(404).json({error: 'No results found'})
            }
        });
});

// TODO
// app.get("/api/themoviedb/3/configuration", (req: Request<any, any, any, any>, res: Response<any>) => {
//     let searchParams = new URLSearchParams(req.query);
//     searchParams.append(`api_key`, process.env.THEMOVIEDB_KEY)
//     const url = `https://api.themoviedb.org/3/configuration?${searchParams.toString()}`
//     console.log(url)

//     axios
//         .get(`https://api.themoviedb.org/3/configuration?${searchParams.toString()}`)
//         .then((response) => {
//             res.json(response.data);
//         });
// });


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

    app.get("/*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "frontend", "build", "index.html")
        );
    });
}

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
