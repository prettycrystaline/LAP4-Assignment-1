var express = require('express');
var router = express.Router();

const students = [];

router.get('/', function(req, res, next) {
    res.status(200).json({
        message: 'Student list',
        result: students 
    });
});

router.post('/', function(req, res) {
  const newStudent = {id:Date.now(), ...req.body}; 
  students.push(newStudent); 
  res.status(201).json({
      message: "One student added successfully",
      result: newStudent
  });
});

router.get('/:id', function(req, res) {
    const newStudent = students.find(i => i.id === parseInt(req.params.id));

    if (!newStudent) {
        return res.status(400).json({
            message: 'Student not found',
            result: []
        });
    }

    res.status(200).json({
        message: 'Student found',
        result: newStudent
    });
});


router.delete('/:id', function(req, res) {
    const index = students.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({
            message: "Student not exit"
        });
    }

    students.splice(index, 1);
    res.status(200).json({
        message: "Successfully deleted"
    });
});

router.put('/:id',function(req,res){
    const newStudent = students.find(i => i.id === parseInt(req.params.id));
    if(!newStudent){
        return res.status(404).json({
            message: "Student not exit"
        });
    }
    newStudent.name = req.body.name || newStudent.name;
    newStudent.age = req.body.age || newStudent.age;
    res.status(201);
    res.json(students);
})
module.exports = router;
