
   document.addEventListener('DOMContentLoaded', function () {
      var bookContainer = document.querySelector('.book__container');

   bookContainer.addEventListener('click', function () {
      this.classList.toggle('active');
      });
   });


/*
document.addEventListener('DOMContentLoaded', function () {
   // Get all tab links
   const tabLinks = document.querySelectorAll('.tabs__link');

   // Get all tab contents
   const tabContents = document.querySelectorAll('.tabs__content');

   // Add click event listener to each tab link
   tabLinks.forEach((tabLink, index) => {
      tabLink.addEventListener('click', function (event) {
         event.preventDefault();

         // Remove 'active' class from all tab links and contents
         tabLinks.forEach(link => link.classList.remove('active'));
         tabContents.forEach(content => content.classList.remove('active'));

         // Add 'active' class to the clicked tab link and corresponding content
         tabLink.classList.add('active');
         tabContents[index].classList.add('active');
      });
   });
});
*/
document.addEventListener('DOMContentLoaded', function () {
   const tabLinks = document.querySelectorAll('.tabs__link');

   const tabContents = document.querySelectorAll('.tabs__content');

   tabLinks[0].classList.add('active');
   tabContents[0].classList.add('active');

   tabLinks.forEach((tabLink, index) => {
      tabLink.addEventListener('click', function (event) {
         event.preventDefault();

         tabLinks.forEach(link => link.classList.remove('active'));
         tabContents.forEach(content => content.classList.remove('active'));

         tabLink.classList.add('active');
         tabContents[index].classList.add('active');
      });
   });
});


/*
document.querySelector('.tabs__nav-btn').addEventListener('click', function () {
   var menuDrop = document.querySelector('.tabs__sub-list');
   menuDrop.classList.toggle('visible');

   this.classList.toggle('hidden');
});

*/

document.addEventListener('DOMContentLoaded', function () {
   var subListItems = document.querySelectorAll('.tabs__sub-list');
   var navBtn = document.querySelector('.tabs__nav-btn');

   navBtn.addEventListener('click', function () {
      subListItems.forEach(function (item) {
         item.classList.toggle('visible'); 
      });

     // navBtn.classList.toggle('hidden'); 
   });
});



var buttons = document.querySelectorAll('.tabs__nav-btn');

buttons.forEach(function (button) {
   button.addEventListener('click', function () {
      var parent = button.closest('.tabs__show');

      document.querySelectorAll('.tabs__show').forEach(function (element) {
         element.classList.remove('active');
      });
      parent.classList.add('active');
   });
});
