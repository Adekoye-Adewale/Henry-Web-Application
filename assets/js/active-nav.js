const href = window.location.href;
const base = href.split("/")
let id = (base[base.length - 1]).split(".")[0];



let navLink = document.getElementById(id);


if (id.includes("project")) {
    id = "project";
} else if (id.includes("customer")) {
    id = "customer";



    navLink = document.getElementById(id);
    navLink.classList.add("active"); 




