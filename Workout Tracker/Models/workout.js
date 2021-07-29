const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutData = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "please complete your exercise:"
            },
            name: {
                type: String,
                required: "enter a name for exercise"
            },

            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ]

},
    {
        toJSON: {

            virtuals: true
        }
    }
);

workoutData.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

workoutData.virtual("totalDistance").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0);
});


const Workout = mongoose.model("workoutDB", workoutData);

module.exports = workoutDB;