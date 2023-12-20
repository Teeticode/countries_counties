const express = require("express");
const router = express.Router();
const counties = require("../json/counties");

router.get("/", (req, res) => {
  if (counties) {
    return res.status(200).json({ counties: counties });
  } else {
    return res.status(404).json({ error: "No country found" });
  }
});

module.exports = router;
