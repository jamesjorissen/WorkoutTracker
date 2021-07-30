const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
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
    return this.exercise.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
});

workoutSchema.virtual("totalDistance").get(function () {
    return this.exercise.reduce((total, exercises) => {
        return total + exercises.distance;
    }, 0);
});


const Workout = mongoose.model("workoutsDB", workoutSchema);

module.exports = Workout;