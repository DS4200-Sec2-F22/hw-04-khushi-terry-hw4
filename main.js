
// Tracks the total number of clicks to determine whether a circle has been clicked at all.
let totalClicks =0;

// list of all options
const vals = document.getElementsByTagName('option');

// list of all elements that are circles.
let circles = document.getElementsByTagName('circle');

// add event listeners to all circles
let numCircles = circles.length;
for (var i = 0; i<circles.length;i++) {
    circles[i].addEventListener('click', changeCircle);
}

// function to change the state of the circle (outline/no outline).
function changeCircle(e) {
    let circleItem = document.getElementById(e.target.id);
    if(totalClicks==0) {
        circleItem.classList.add('circle-outline');
        coordinates.innerHTML += "Last point clicked" + e.target.id;
        totalClicks+=1;
        }else if(circleItem.classList.contains('circle-outline') && totalClicks>0) {
            circleItem.classList.remove('circle-outline');
            coordinates.innerHTML = "Last point clicked:" + e.target.id;
            totalClicks+=1;
        } else{
            circleItem.classList.add('circle-outline');
            coordinates.innerHTML = "Last point clicked:" + e.target.id;
            totalClicks+=1;
        }
    }


// Sets the received input from dropdown to create a circle when submitted.
function submitClicked() {

    let x;
    let y;

    for (let i = 0; i<vals.length; i++) {
        if(vals[i].selected) { 
            if (vals[i].id == 'x') {
                x = vals[i].value;
                vals[i].selected = true;
            } else if (vals[i].id =='y') {
                y = vals[i].value;
                vals[i].selected = true;
            }
        }
    }

    addCircle(x, y);
}
document.getElementById('submit').addEventListener("click", submitClicked);

// creates a new circle with the received attributes that has the same characteristics of other points.
function addCircle(x, y) {
    let parentElement = document.getElementById('frame');
    let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    let id = "("+x+","+y+")";
    newPoint.setAttribute("id", id);
    let cx = 100 + 20*x;
    let cy = 300 - 20*y;
    newPoint.setAttribute("cx", cx);
    newPoint.setAttribute("cy", cy);
    newPoint.setAttribute("r", 8);
    parentElement.appendChild(newPoint);

    circles[numCircles].addEventListener('click', changeCircle);
    numCircles+=1;
}


