const checkCodecamp = (req, res, next) => {
  const { message } = req.body;

  if (message === "Codecamp") {
    req.user = { title: "Codecamp19" };
    return next();
  }

  res.json({ message: "Unknown" });
};

module.exports = checkCodecamp;
