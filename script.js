function openBar() {
    const bar = document.querySelector(".fa-bars");
    const menu = document.querySelector(".menu");
    let val = 1;

    bar.style.right = "25px";
    menu.style.right = "-160px";
    val = 0;

    bar.addEventListener("click", () => {
        if (val == 1) {
            bar.style.right = "25px";
            menu.style.right = "-160px";
            val = 0;
        } else {
            bar.style.right = "325px";
            menu.style.right = "150px";
            val = 1;
        }
    });
}