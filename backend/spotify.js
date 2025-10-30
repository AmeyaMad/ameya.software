require("dotenv").congig();
const axios = require("axios");

async function getToken(){
    //need to post in base64 per spotify
    const credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
        .toString('base64');


    const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
            headers: {
                Authorization: `Basic ${credentials}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );

    console.log("Spotify Response Token: ", response.data.access_token);
}





getToken();