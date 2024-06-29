/*
//рух блоку при наведенні
const elementsWith3D = document.querySelectorAll('[data-3dX][data-3dY]');

elementsWith3D.forEach(element => {
   const offsetX = parseFloat(element.getAttribute('data-3dX')); // X-axis rotation offset
   const offsetY = parseFloat(element.getAttribute('data-3dY')); // Y-axis rotation offset

   element.addEventListener('mousemove', (event) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2; // Center X of the element relative to the viewport
      const centerY = rect.top + rect.height / 2; // Center Y of the element relative to the viewport
      const mouseX = event.clientX;  // Mouse X position relative to the viewport
      const mouseY = event.clientY;  // Mouse Y position relative to the viewport

      // Calculate rotation angles based on mouse position relative to the element
      const rotateX = -((mouseY - centerY) / centerY) * offsetX; // Adjust sensitivity for X-axis
      const rotateY = ((mouseX - centerX) / centerX) * offsetY;  // Adjust sensitivity for Y-axis

      // Apply the rotation transforms on X and Y axes
      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
   });

   element.addEventListener('mouseleave', () => {
      // Reset the transform when the mouse leaves the element
      element.style.transform = 'rotateX(0deg) rotateY(0deg)';
   });
});
*/

/*----------*/

//рух блоку по кліку

const elementsWith3D = document.querySelectorAll('[data-3dX][data-3dY]');
let isTracking = false;
let currentElement = null;
let initialMouseX, initialMouseY;

elementsWith3D.forEach(element => {
   const offsetX = parseFloat(element.getAttribute('data-3dX'));
   const offsetY = parseFloat(element.getAttribute('data-3dY'));

   element.addEventListener('click', (event) => {
      if (currentElement !== element) {
         isTracking = true;
         currentElement = element;
         if (initialMouseX === undefined || initialMouseY === undefined) {
            const rect = element.getBoundingClientRect();
            initialMouseX = event.clientX - rect.left;
            initialMouseY = event.clientY - rect.top;
         }
      } else {
         isTracking = !isTracking;
      }
   });

   element.addEventListener('mousemove', (event) => {
      if (!isTracking) return;

      const rect = currentElement.getBoundingClientRect();
      const centerX = initialMouseX;
      const centerY = initialMouseY;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const rotateX = -((mouseY - centerY) / centerY) * offsetX;
      const rotateY = ((mouseX - centerX) / centerX) * offsetY;

      currentElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
   });
});

document.addEventListener('click', (event) => {
   if (!elementsWith3D.length || !Array.from(elementsWith3D).some(el => el.contains(event.target))) {
      isTracking = false;
      currentElement = null;
   }
});