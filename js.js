const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBox)

function showBox(){
  const triggerBottom = window.innerHeight / 1.30; //پایین ترین نقطه رو صفحه رو بهمون نشون میده

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}