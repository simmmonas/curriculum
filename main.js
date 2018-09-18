//TRYING TO FETCH JSON



const templateSemesters = document.querySelector("template").content;
const semTitle = document.querySelector(".semTitle");
const parent = document.querySelector("main");
window.addEventListener("load", () => {
  fetch("curriculum1.json").then(res => res.json()).then(showSemesters)

})



function showSemesters(data) {
  console.log(data);
  semTitle.textContent = data.title;
  data.articles.forEach(showSingleSemester)


}

function showSingleSemester(semester) {
  console.log(semester)
  const clone = templateSemesters.cloneNode(true);
  clone.querySelector("h2").textContent = semester.title;

  parent.appendChild(clone);
}