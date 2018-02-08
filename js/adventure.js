// create function to trigger this javascrip
function game(){
  
  // Defin the size of the game play are
  var maxX = 2
  var maxY = 2

  // User starts at (x,y)=(0,0) (bottom left of board)
  var userX = 0
  var userY = 0

  // Hide the treasure, also with x y values
  var treasureX = 2
  var treasureY = 1

  // Flag that controls loop
  var treasureFound = false

  // Get user's name
  var name = prompt("Welcome brave adventure! What are you called?")

  while(!treasureFound){
    var direction = prompt("Which direction are you going? (north, south, east, west)")
    console.log(direction)

    // temp vars, only use for checking validity of new user location after move
    var newX
    var newY
    // see what new user location should be 
    // check if new user location is valid

    // check if new user location is treasure
    if(direction == "north"){
      newX = userX
      newY = userY + 1
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      }else{
        console.log("There is a forbidding mountain range in that directinon, you cannot go")
      }

    }else if(direction == "east"){
      newX = userX + 1
      newY = userY
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      }else{
        console.log("There is a forbidding mountain range in that directinon, you cannot go")
      }

    }else if(direction == "south"){
      newX = userX
      newY = userY - 1
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      }else{
        console.log("There is a forbidding mountain range in that directinon, you cannot go")
      }

    }else if(direction == "west"){
      newX = userX - 1
      newY = userY
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      }else{
        console.log("There is a forbidding mountain range in that directinon, you cannot go")
      }

    }else{
      console.log("Please enter a real direction")
    }

   // see if user location matches treasure
        if(userX == treasureX && userY == treasureY){
          treasureFound = true
          console.log("Found treasure!!!")
          var audio = new Audio('TaDa.mp3');
          audio.play();
        }
  }
  
}
