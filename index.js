"use strict"

let home = document.querySelector('#presentation');
let project = document.querySelector('#project');
let homeBtn = document.querySelector('.home');
let projectBtn = document.querySelector('.project');


homeBtn.addEventListener('click', function () {
    home.style.display = "flex";
    if (project.style.display = "flex") {
        project.style.display = "none";
        
    }
    
});

projectBtn.addEventListener('click', function () {
    project.style.display = "flex";
    if (home.style.display = "flex") {
        home.style.display = "none";
        
    }
    
});
