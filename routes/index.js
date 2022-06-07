const router = require("express").Router();

const celebrities = require("./celebrities.routes")

router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/celebrities', celebrities)

module.exports = router;
