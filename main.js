let totalClicks =0;
let circles = document.getElementsByTagName('circle')
let numCircles = circles.length;

function changeCircle(e) {
    let circleItem = document.getElementById(e.target.id);
    if(totalClicks==0) {
        circleItem.classList.add('circle-outline');
        coordinates.innerHTML += "Last point clicked" + e.target.id;
        totalClicks+=1;
        }else if(circleItem.classList.contains('circle-outline') && totalClicks>0) {
            circleItem.classList.remove('circle-outline');
            coordinates.innerHTML = "Last point clicked:" + e.target.id
            totalClicks+=1;
        } else{
            circleItem.classList.add('circle-outline');
            coordinates.innerHTML = "Last point clicked:" + e.target.id
            totalClicks+=1;
        }
    }

for (var i = 0; i<circles.length;i++) {
    circles[i].addEventListener('click', changeCircle)
}


const vals = document.getElementsByTagName('option');

function submitClicked() {

    let x;
    let y;

    for (let i = 0; i<vals.length; i++) {
        if(vals[i].selected) { 
            if (vals[i].id == 'x') {
                x = vals[i].value;
                vals[i].selected = true;
                console.log(x);
            } else if (vals[i].id =='y') {
                y = vals[i].value;
                vals[i].selected = true;
                console.log(y);
            }
        }
    }

    let parentElement = document.getElementById('frame');
    
    let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    let id = "("+x+","+y+")";
    newPoint.setAttribute("id", id);
    let cx = 100 + 20*x;
    let cy = 300 - 20*y;
    newPoint.setAttribute("cx", cx);
    newPoint.setAttribute("cy", cy);
    newPoint.setAttribute("r", 8);
    console.log(newPoint);
    parentElement.appendChild(newPoint);
    console.log(numCircles);
    console.log(circles[numCircles]);
    numCircles+=1;
    circles[numCircles].addEventListener('click', changeCircle);
    console.log(frame);
    //addCircle(x, y);

}

document.getElementById('submit').addEventListener("click", submitClicked);

/*
vals[2].selected = true;
for (let i = 0; i<vals.length; i++) {
        if(vals[i].selected) { 
            if (vals[i].id == 'x') {
                let x = vals[i].value;
                vals[i].selected = true;
                console.log(x);
            } else if (vals[i].id =='y') {
                let y = vals[i].value;
                vals[i].selected = true;
                console.log(y);
            }
        }
    }

let x = 2;
let y = 2;
frame.innerHTML += "<circle id='("+x+","+y+")' cx='"+(100 + 20*x)+"' cy='"+(300 - 20*y)+"' r='"+8+"'></circle>";
console.log(frame);
*/

/*

let x = 1;
let y = 1;
let parentElement = document.getElementById('frame');
console.log(parentElement);

let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
let id = "("+x+","+y+")";
newPoint.setAttribute("id", id);
let cx = 100 + 20*x;
let cy = 300 - 20*y;
newPoint.setAttribute("cx", cx);
newPoint.setAttribute("cy", cy);
newPoint.setAttribute("r", 8);
console.log(newPoint);
parentElement.appendChild(newPoint); 

frame.innerHTML += "<circle id='(2,1)'cx='120' cy='260' r='8'></circle>";
console.log(document.getElementById('frame'));
*/

function addCircle(x, y) {
    let parentElement = document.getElementById('frame');
    console.log(parentElement);

    //let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    //let id = "("+x+","+y+")";
    //newPoint.setAttribute("id", id);
    //let cx = (100 + (20*x));
    //let cy = (300 - (20*y));
    //newPoint.setAttribute("cx", cx);
    //newPoint.setAttribute("cy", cy);
    //newPoint.setAttribute("r", 8);
    //console.log(newPoint);


    //parentElement.appendChild(newPoint); 
    frame.innerHTML += "<circle id='("+x+","+y+")' cx='"+(100 + 20*x)+"' cy='"+(300 - 20*y)+"' r='"+8+"'></circle>";
    document.getElementById("container").innerHTML += "";
}


