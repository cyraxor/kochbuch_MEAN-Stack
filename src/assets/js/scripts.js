// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {

//     // Add a click event on each of them
//     $navbarBurgers.forEach( el => {
//       el.addEventListener('click', () => {

//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');

//       });
//     });
//   }

// });




$(document).ready(function() {
  // // $(".overlay-container").hide();
  // let overlay = $('app-edit-categories');
  // console.log(overlay);

  // $(overlay).find('.showbutton').click(function(){
  //   $(overlay).find(".overlay-container").show();
  //   alert('test');
  // });

  // $(".cancelbutton").click(function(){
  //   $(".overlay-container").hide();
  // });



  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });



  if (window.matchMedia("(max-width: 767px)").matches) {
    const $navDropdowns = document.querySelectorAll(".navbar-item.has-dropdown.is-hoverable");
    if ($navDropdowns.length > 0) {
      // HIDE THE DROP-DOWN ON THE INITIAL LOAD
      $navDropdowns.forEach((el) => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          $target.style.display = "none";

      //Register the click event on the dropdown list
          el.addEventListener("click", () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              if ($target.style.display === "block") {
                  $target.style.display = "none";
              } else {
                  $target.style.display = "block";
              }
          });
      });
    }
  }


});


