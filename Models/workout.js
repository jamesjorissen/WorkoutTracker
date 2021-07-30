const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
                required: "enter the name of your exercise: "
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

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

workoutSchema.virtual("totalDistance").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0);
});


const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;