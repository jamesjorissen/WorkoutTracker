const router = express.Router();
const db = require("../Models/workout");
const express = require("express");

router.get("/workouts", (req, res) => {
    db.find({}).sort({ date: -1 }).then(workoutDB => {
        console.log(workoutDB)
        res.json(workoutDB);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/workouts", (req, res) => {
    db.create({})
        .then(workoutDB => {
            res.json(workoutDB)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

router.put("/workouts/:id", function (req, res) {
    db.findByIdAndUpdate(
        req.params.id,
        { $push: { exercise: req.body } },
        { new: true }
    )
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).then(workoutDB => {
        res.json(workoutDB);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;