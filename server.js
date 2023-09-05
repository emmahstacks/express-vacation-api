const express = require("express");
const app = express();
const PORT = 8000;

const topAfricanSpot = {
  "cape town": {
    spotNum: 1,
    spotName: "CapeTown",
    country: "South Africa",
    desc: "Cape Town sits at the southern tip of South Africa, near where the Atlantic Ocean and Indian Ocean meet at the Cape of Good Hope. It is a culturally rich and visually stunning city that is very easy to fall in love with on a first visit.",
  },
  zanzibar: {
    spotNum: 2,
    spotName: "Zanzibar",
    country: "Tanzania",
    desc: "Zanzibar is an island in the Indian Ocean, just off the coast of Tanzania, is a place where Arab dhows (fishing boats) still ply the picture-perfect turquoise sea. You can get lost in the beauty of Stone Town, wandering its narrow alleys past old mosques, vibrant bazaars, and riads with intricately carved doorways.",
  },
  "pyramids of giza": {
    spotNum: 3,
    spotName: "Pyramids Of Giza",
    country: "Egypt",
    desc: "The Pyramids of Giza are easy to access from Egypt's capital and largest city, Cairo, which is equally fascinating to visit. Set on the banks of the Nile River, Cairo is a chaotic and buzzy place that appears to never slow down, even in the dead of night. ",
  },
  "victoria falls": {
    spotNum: 4,
    spotName: "Victoria Falls",
    country: "Zimbabwe",
    desc: "Victoria Falls is on the mighty Zambezi River and creates the border between Zimbabwe and Zambia. This waterfall is not only impressive for its dramatic drop but also for its length, which creates a 1.7-kilometer-long curtain of water as it drops. ",
  },
  "unknown place": {
    spotNum: 5,
    spotName: "unknown",
    country: "unknown",
    desc: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  response.json(topAfricanSpot);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Your server is running now on port ${PORT}!`);
});
