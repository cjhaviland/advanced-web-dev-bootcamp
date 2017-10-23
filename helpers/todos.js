var db = require('../models');

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createTodos = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.getTodo = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
       res.send(err);
   });
}

exports.updateTodo = function(res, req){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //will respond with the updated version
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(err){
      res.send(err); 
   });
}

exports.deleteTodo = function(res, req){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'We deleted it!'})
    })
    .catch(function(err){
        res.send(err);
    });
}

module.exports = exports;