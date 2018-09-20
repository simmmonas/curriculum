let homeWrapper = document.querySelector(".homeWrapper");
let teachingWrapper = document.querySelector(".teachingWrapper");
let teachingMenu = document.querySelector(".teachingMenu");
let abroadMenu = document.querySelector(".abroadMenu");
let internshipMenu = document.querySelector(".internshipMenu");
let abroadWrapper = document.querySelector(".abroadWrapper");
let internshipWrapper = document.querySelector(".internshipWrapper");


teachingMenu.addEventListener('click', showTeachingWrapper);

function showTeachingWrapper()
{
  homeWrapper.style.display = "none";
  teachingWrapper.style.display = "block";
}
abroadMenu.addEventListener('click', showAbroadWrapper);

function showAbroadWrapper()
{
  homeWrapper.style.display = "none";
  abroadWrapper.style.display = "block";
}

internshipMenu.addEventListener('click', showInternshipWrapper);

function showInternshipWrapper()
{
  homeWrapper.style.display = "none";
  internshipWrapper.style.display = "block";
}




//TRYING TO FETCH JSON



const templateSemesters = document.querySelector(".semesters").content;
const semTitle = document.querySelector(".semTitle");
const parent = document.querySelector("main");
window.addEventListener("load", ()=>{
    fetch("curriculum1.json").then(res=>res.json()).then(function(data){
        showSemesters(data)
    })

})



function showSemesters(data){
//    console.log(data);
    data.forEach(showSingleSemester)

}
function showSingleSemester(semester){
    console.log(semester)
    const clone = templateSemesters.cloneNode(true);
    clone.querySelector("h2").textContent=semester.title;
    clone.querySelector(".description").textContent=semester.description;
    clone.querySelector(".coreName").textContent=semester.coreName;
    clone.querySelector(".skills").textContent=semester.skills;
    clone.querySelector(".knowledge").textContent=semester.knowledge;
    clone.querySelector(".competencies").textContent=semester.competencies;
    clone.querySelector(".com").textContent=semester.coreName1;


    parent.appendChild(clone);
}
