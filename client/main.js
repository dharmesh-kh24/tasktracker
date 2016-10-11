import { Template } from 'meteor/templating';
import './main.html';
Tasks= new Mongo.Collection('tasks');
Template.body.helpers({
      tasks:function(){
        return Tasks.find();
      }
  });

  Template.body.events({
      'submit .task-form':function(event){
        var task=event.target.task.value;
        Tasks.insert({
           task:task,
           createdAt:new Date().toUTCString()
        });
        event.target.task.value="";
        return false;
      }
  });
