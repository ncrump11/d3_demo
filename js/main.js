//execute script when window is loaded
window.onload = function(){

	var w = 900, h = 500;
    
    var container = d3.select("body")
    	.append("svg")
    	.attr("width", w)
    	.attr("height", h)
    	.attr("class", container)
    	.style("background-color", "#D3D3D3") //svg background color
    	
    //innerRect block
    var innerRect = container.append("rect") //put a new rect in the svg
        .datum(400)
        .attr("width", function(d){
        	return d * 2; //the datum * 2
        }) //rectangle width
        .attr("height", function(d){
        	return d; 
        })
        .attr("class", "innerRect") //class name
        .attr("x", 50) //position from left on the x (horizontal) axis
        .attr("y", 50) //position from top on the y (vertical) axis
        .style("fill", "#FFFFFF"); //fill color

    var dataArray = [10, 20, 30, 40, 50];
    var circles = container.selectAll(".circles") //but wait--there are no circles yet!
        .data(dataArray) //here we feed in an array
        .enter()
        .append("circle") //add a circle for each datum
        .attr("class", "circles") //apply a class name to all circles
        .attr("r", function(d, i){ //circle radius
            console.log("d:", d, "i:", i); //let's take a look at d and i
            return d;
        })
        .attr("cx", function(d, i){ //x coordinate
            return 70 + (i * 180);
        })
        .attr("cy", function(d){ //y coordinate
            return 450 - (d * 5);
        });
};

var numbersArray = [1, 2, 3];

var stringsArray = ["one", "two", "three"];

var colorsArray = ["#F00", "#0F0", "#00F"];

var objectsArray = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    }
];

var arraysArray = [
    ['Madison', 23209],
    ['Milwaukee', 593833],
    ['Green Bay', 104057]
];
