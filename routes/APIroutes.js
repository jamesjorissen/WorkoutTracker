const router = require("express").Router();
const express = require("express");
const db = require("../Models/workout");

router.get("/workouts", (req, res) => {
    db.find({}).sort({ date: -1 }).then(WorkoutsDB => {
        console.log(workoutsDB)
        res.json(workoutsDB);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/workouts", (req, res) => {
    db.create({})
        .then(workoutsDB => {
            res.json(workoutsDB)
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
        .then(workoutsDB => {
            res.json(workoutsDB);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    db.find({}).then(workoutsDB => {
        res.json(workoutsDB);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;