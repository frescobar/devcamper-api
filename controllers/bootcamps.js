//Get all bootcamps
// route  GET /api/v1/bootcamps
// public
exports.getBootcampsController = (req, res, next) => {
  res.json({ success: true, msg: "Show all Bootcamps" });
};

//Get one bootcamp
// route  GET /api/v1/bootcamps/:id
// public
exports.getBootcampController = (req, res, next) => {
  res.json({ success: true, msg: "Show single Bootcamps" });
};

//Create bootcamp
// route  POST /api/v1/bootcamps
// private
exports.createBootcampController = (req, res, next) => {
  res.json({ success: true, msg: "Create Bootcamps" });
};

//Update bootcamp
// route  PUT /api/v1/bootcamps/:id
// private
exports.updateBootcampController = (req, res, next) => {
  res.json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};

//Delete bootcamp
// route  DELETE /api/v1/bootcamps/:id
// private
exports.deleteBootcampController = (req, res, next) => {
  res.json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};
