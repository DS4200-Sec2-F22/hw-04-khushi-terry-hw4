let totalClicks =0;
let circles = document.getElementsByTagName('circle')

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


function submitClicked() {

    let vals = document.getElementsByTagName('option');

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
 // need to add circle to scatter
    // const parentElement = document.querySelector('svg');
    // parentElement.appendChild(yourDynamicChildElement); 
}

document.getElementById('submit').addEventListener("click", submitClicked);
