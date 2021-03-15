const Workout = require("../models");

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });


    app.post("/api/workouts",function ({ body },res){    
        Workout.create(body)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
          Workout.findOneAndUpdate({
            _id: req.params.id
          }, {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
          }, { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
          }).catch(err => {
            res.json(err);
          });

});
}

