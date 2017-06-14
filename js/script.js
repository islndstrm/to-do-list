// web app to create a dynamic to do list*/

// jQuery wrapper
$(document).ready(function(){

    // make to do list position draggable
    $( "#draggable" ).draggable();
    // $('li').sortable(); //too much movement, either this or draggable

    // declare variables
    var listItems = [];
    var listItem1JS = document.getElementById("listItem1");
    var input = document.getElementById("itemDescription");
    //var deleteIndex = document.getElementById("deleteItem");
    var addButton = document.getElementsByTagName("button")[0];
    var delButton = document.getElementsByTagName("button")[1];
    var listOfItemsJS = document.getElementById("listOfItems");
    var newText;

    // add a new task function
    var addTask = function() {
      listItems.push(input.value);
      if (listItems.length === 1) {
        newText = input.value;
      } else {
        newText += '<li>' + input.value + '</li>';
      }
      listItem1JS.innerHTML = newText;
      input.value = "";
    };

    // delete a task as specified by user
    var deleteTask = function() {
        var deleteIndex = document.getElementById("deleteItem");
        if (listItems.length === 1 ) {
          newText = 'add items to your list';
        } else {
            deleteIndex = deleteIndex.value - 1;
            listItems.splice(deleteIndex, 1);
            for (var i = 0; i < listItems.length; i++) {
              if (i === 0) {
                newText = listItems[0];
              } else {
                newText += '<li>' + listItems[i] + '</li>';
              }
            }
        }
        listItem1JS.innerHTML = newText;
        deleteIndex.value = "";
    };

    addButton.addEventListener("click", addTask);
    delButton.addEventListener("click", deleteTask);


});
