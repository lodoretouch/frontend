const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

const URL = "https://test-os-amihanovica-os.cms.skole.hr/";

app.get("/api/posts", async (req, res) => {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);
        let posts = [];

        $(".vijest").each((index, element) => {
            let title = $(element).find("h3").text().trim();
            let link = URL + $(element).find("a").attr("href");
            let date = $(element).find(".datum").text().trim();
            let content = $(element).find("p").text().trim();

            posts.push({ title, date, link, content });
        });

        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Greška pri dohvaćanju objava." });
    }
});

app.listen(5000, () => console.log("Server pokrenut na portu 5000"));
