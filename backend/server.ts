import axios from "axios";

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

import express, { Request, Response } from "express";
import path from "path";

const PORT =
    process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;
const app = express();


app.set("trust proxy", 1);
app.use(express.json()); // support json encoded bodies

app.get("/api/test", (req: Request<any, any, any, any>, res: Response<any>) => {
    res.json({ date: new Date().toString() });
});

app.get("/api/spoonacular/recipes/random", (req: Request<any, any, any, any>, res: Response<any>) => {
    let searchParams = new URLSearchParams(req.query);
    searchParams.append(`apiKey`, '8b5eb78872c34ed190cf5fd383821c3f')
    const url = `https://api.spoonacular.com/recipes/random?${searchParams.toString()}`
    console.log(url)


    axios
            .get(`https://api.spoonacular.com/recipes/random?${searchParams.toString()}`)
            .then((response) => {
                res.json(response.data);
            });
});


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
