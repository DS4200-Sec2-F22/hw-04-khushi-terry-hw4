let totalClicks =0;
let circles = document.getElementsByTagName('circle')
let numCircles = circles.length;
for (var i = 0; i<circles.length;i++) {
    circles[i].addEventListener('click', changeCircle)
}

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

    addCircle(x, y);
}

document.getElementById('submit').addEventListener("click", submitClicked);

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


