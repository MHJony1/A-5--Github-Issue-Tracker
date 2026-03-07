// toggle button fucntionality
  const allBtn = document.getElementById("allBtn");
  const openBtn = document.getElementById("openBtn");
  const closedBtn = document.getElementById("closedBtn");

function toggleBtn(id){
  const buttons = [allBtn, openBtn, closedBtn];
  buttons.forEach(btn => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-soft");
  });

  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");
  selected.classList.remove("btn-soft");
}