window.onload = function() {
    document.getElementById("about").style.left = "50%";
    setTimeout(function() {
        animateHr(document.getElementById("about"), "show");
    }, 200);
}

let displayed = 1;

function animateHr(parent, opt) {
    let hr = parent.getElementsByTagName("hr")[0];
    
    if(opt === "show") hr.classList.add("animateHr");
    else if(opt === "hide") hr.classList.remove("animateHr");
}

function displayId(id) {
    if(id === displayed) return true;
    let direction = (id < displayed) ? "right" : "left";

    let currentItem = document.querySelectorAll("[data-id='" + displayed + "']")[0];
    let newItem = document.querySelectorAll("[data-id='" + id + "']")[0];

    
    slide(newItem, "mid");
    slide(currentItem, direction);
    
    if(displayed-id > 1) {
        let rightItem = document.querySelectorAll("[data-id='" + (id+1) + "']")[0];
        rightItem.style.transitionDuration = "0s";
        rightItem.style.left = "150%";
        animateHr(rightItem, "hide");
    }

    if(id-displayed > 1) {
        let leftItem = document.querySelectorAll("[data-id='" + (id-1) + "']")[0];
        leftItem.style.transitionDuration = "0s";
        leftItem.style.left = "-50%";
        animateHr(leftItem, "hide");
    }


    setTimeout(function() {
        animateHr(newItem, "show");
        animateHr(currentItem, "hide");
    }, 200)

    displayed = id;
}

function slide(element, direction) {
    element.style.transitionDuration = "0.5s";

    switch(direction) {
        case "left":
            element.style.left = "-50%";
        break;
        case "right":
            element.style.left = "150%";
        break;
        case "mid":
            element.style.left = "50%";
        break;
    }
}