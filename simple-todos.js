
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
if (Meteor.isClient) {

  // This code only runs on the client

  Template.body.helpers({

    tasks: [

      { text: "This is task 1" },

      { text: "This is task 2" },

      { text: "This is task 3" }

    ]
    tasks: function () {
      return Tasks.find({});
    }
   });
 }


  });

}
