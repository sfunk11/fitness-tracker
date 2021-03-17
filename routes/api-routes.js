const db = require("../models");

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
      
      
      
      db.Workout.find()
       .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });


    app.post("/api/workouts",function ({ body },res){    
        db.Workout.create(body)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        db.Workout.find()
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
          db.Workout.findByIdAndUpdate(req.params.id, {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
          }, { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
          }).catch(err => {
            res.json(err);
          });

});
}

