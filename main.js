window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // $(".content").css("padding-top", "7.5rem")
  } else {
    navbar.classList.remove("sticky");
    // $("#content").css("padding-top", "0")

  }
}

/*var acc = document.getElementsByClassName("job");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}*/
$(".job").each(function() {

  $(this).click(function() {

    $(this).toggleClass("active");

    $(this).next().slideToggle(200);

  });
});
