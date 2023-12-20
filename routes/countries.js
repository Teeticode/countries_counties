const express = require("express");
const router = express.Router();
const countries = require("../json/countries");

router.get("/", (req, res) => {
  if (countries) {
    return res.status(200).json({ countries: countries });
  } else {
    return res.status(404).json({ error: "No country found" });
  }
});

module.exports = router;
