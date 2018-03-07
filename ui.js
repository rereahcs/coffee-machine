document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready for action!");

  
  document.getElementById("espresso").addEventListener("click", function() {
    console.log("Espresso");
    console.log(coffeeMachine.espresso())
    showWaterLevel()

  });
  
  document.getElementById("americano").addEventListener("click", function() {
    console.log("Americano");
    console.log(coffeeMachine.americano())
  });

  document.getElementById("fillBeans").addEventListener("click", function() {
    console.log("Fills Beans");
    console.log(coffeeMachine.fillBeans())
  });

  document.getElementById("fillWater").addEventListener("click", function() {
    console.log("Fills Water");
    console.log(coffeeMachine.fillWater())
  });

  document.getElementById("emptyGrounds").addEventListener("click", function() {
    console.log("Empties Grounds");
    console.log(coffeeMachine.emptyGrounds())
  });


  
  document.getElementById("getState").innerHTML = "Water: " + coffeeMachine.getState().water + "<br>" + "Beans: " + coffeeMachine.getState().beans + "<br>" + "Grounds: "  + coffeeMachine.getState().beans;
  


 //// var percentWater = (1000 / coffeeMachine.getState().water * 100);


function showWaterLevel() {
  document.getElementById("water").style.height = 1000 / coffeeMachine.getState().water * 100;
}



});

  
