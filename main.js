let totalClicks =0;
let c1Clicks=0;
let c2Clicks=0;
let c3Clicks=0;
let c4Clicks=0;

function changeCircle(e) {
    let circleItem = document.getElementById(e.target.id);
    circleItem.classList.add('circle-outline');
    switch(e.target.id) {
        case "c1":
            let cButton1 = document.getElementById('c1');
            let coordinates = document.getElementById('coordinates');
            if(totalClicks==0) {
                cButton1.classList.add('circle-outline');
                coordinates.innerHTML +='Last point clicked: (1,2)';
                totalClicks +=1;
                c1Clicks +=1;
            } else if(c1Clicks%2!==0) {
                cButton1.classList.remove('circle-outline');
                coordinates.innerHTML = "Last point clicked: (1,2)";
                totalClicks +=1;
                c1Clicks +=1;
            } else {
                cButton1.classList.add('circle-outline');
                coordinates.innerHTML = "Last point clicked: (1,2)";
                totalClicks +=1;
                c1Clicks +=1;
            }
            break;
        case "c2":
            let cButton2 = document.getElementById('c2');
            let coordinates2 = document.getElementById('coordinates');
            if(totalClicks==0) {
                cButton2.classList.add('circle-outline');
                coordinates2.innerHTML +='Last point clicked: (2,4)';
                totalClicks +=1;
                c2Clicks +=1;
            } else if(c2Clicks%2!==0) {
                cButton2.classList.remove('circle-outline');
                coordinates2.innerHTML = "Last point clicked: (2,4)";
                totalClicks +=1;
                c2Clicks +=1;
            } else {
                cButton2.classList.add('circle-outline');
                coordinates2.innerHTML = "Last point clicked: (2,4)";
                totalClicks +=1;
                c2Clicks +=1;
            }
            break;
        case "c3":
            let cButton3 = document.getElementById('c3');
            let coordinates3 = document.getElementById('coordinates');
            if(totalClicks==0) {
                cButton3.classList.add('circle-outline');
                coordinates3.innerHTML +='Last point clicked: (6,2)';
                totalClicks +=1;
                c3Clicks +=1;
            } else if(c3Clicks%2!==0) {
                cButton3.classList.remove('circle-outline');
                coordinates3.innerHTML = "Last point clicked: (6,2)";
                totalClicks +=1;
                c3Clicks +=1;
            } else {
                cButton3.classList.add('circle-outline');
                coordinates3.innerHTML = "Last point clicked: (6,2)";
                totalClicks +=1;
                c3Clicks +=1;
            }
            break;
        case "c4":
            let cButton4 = document.getElementById('c4');
            let coordinates4 = document.getElementById('coordinates');
            if(totalClicks==0) {
                cButton4.classList.add('circle-outline');
                coordinates4.innerHTML +='Last point clicked: (9,9)';
                totalClicks +=1;
                c4Clicks +=1;
            } else if(c4Clicks%2!==0) {
                cButton4.classList.remove('circle-outline');
                coordinates4.innerHTML = "Last point clicked: (9,9)";
                totalClicks +=1;
                c4Clicks +=1;
            } else {
                cButton4.classList.add('circle-outline');
                coordinates4.innerHTML = "Last point clicked: (9,9)";
                totalClicks +=1;
                c4Clicks +=1;
            }
            break;
    }
}

