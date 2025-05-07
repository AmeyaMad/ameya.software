const express = require("express");
const path = require("path");

const app = express();
//change this to 443 when sll is set up
const PORT = 80;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server running at http://ameya.software`);

});
