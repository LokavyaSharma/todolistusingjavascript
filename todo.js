var todos = ["Enter the tasks for the day"];
var input = prompt("What you would like to do for today's list?");

while(input !=="Quit"){
  if(input ==="List"){
    console.log("**********");
    todos.forEach(function(todo,i){
      console.log(i + ": " + todo);
    });
    console.log("**********");
  } else if(input==="New"){
    var newTodo = prompt("Enter New Todo");
    todos.push(newTodo);
    console.log("Added Todo");
  } else if(input ==="Delete"){
    var index = prompt("Enter the index of todo list to be deleted");
    todos.splice(index,1);
    console.log("Deleted Todo");
  }
  input = prompt("What would like to do next for today's list?");
}
console.log("OK, You have quit the app");
