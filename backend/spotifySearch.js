require("dotenv").config();
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
    return response.data;
}

async function searchSpotify(query){
    const token = await getToken();

    const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );


    console.log("Response from spotify for ", query);
    response.data.tracks.forEach((track, i) => {
        console.log(`${i}. ${track}`);
    })
}


searchSpotify("Kanye West")
    .catch(err => console.error(err));