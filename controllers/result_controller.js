// Result Model
const Result = require("../model/result");

// Add New Result Record
exports.addResult = (req, res) => {
  try {
    // Calculate Accuracy
    const accu = (req.body.correct * 100) / req.body.attend_quest;

    let addnewResult = new Result({
      username: req.body.username,
      total_quest: req.body.total_quest,
      attend_quest: req.body.attend_quest,
      correct: req.body.correct,
      attempt: req.body.attempt,
      accuracy: accu.toFixed(2),
      score: req.body.correct,
    });

    addnewResult.save();
    res.status(200).send({
      status: true,
      message: "New Result is added",
    });
  } catch (error) {
    console.log("Error to create new result", error);
    res.send({
      status: false,
      message: "Internal Server Error",
    });
  }
};

// Find Result list
exports.findResulList = (req, res) => {
  Result.find({ delflag: false, status: true }, { createdAt: 0, updatedAt: 0 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Error to fetch bloglist", err);
      res.send({ message: "Internal Server Error" });
    });
};

// Find Result and Delete by ID
exports.deleteResult = (req, res) => {
  Result.findByIdAndUpdate({ _id: req.params.id }, { delflag: true })
    .then((data) => {
      res.send({
        status: true,
        message: "Deleted successfully",
      });
    })
    .catch((err) => {
      console.log("Error to Deleted by ID", err);
      res.send({
        status: false,
        message: "Internal Server Error",
      });
    });
};

// Find Result by ID
exports.editFindResult = (req, res) => {
  Result.findById({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Error to Find Result by ID", err);
      res.send({
        status: false,
        message: "Internal Server Error",
      });
    });
};

// Update Result by ID
exports.updateResult = (req, res) => {
  Result.findByIdAndUpdate(
    { _id: req.body.id },
    {
      username: req.body.username,
      total_quest: req.body.total_quest,
      attend_quest: req.body.attend_quest,
      correct: req.body.correct,
      attempt: req.body.attempt,
    }
  )
    .then((data) => {
      res.send({
        status: true,
        message: "Edited successfully",
      });
    })
    .catch((err) => {
      console.log("Error to Edit", err);
      res.send({
        status: false,
        message: "Internal Server Error",
      });
    });
};
