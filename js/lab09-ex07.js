document.addEventListener("DOMContentLoaded", function () {

   const containers = document.querySelectorAll('.container');
   for (cont of containers) {
      cont.addEventListener('click', function (e) {
         console.log(`${e.target.nodeName} was clicked –
         Propogated to ${e.currentTarget.nodeName}`);
      }, { capture: true });
   }

   const spans = document.querySelectorAll('span');
   for (s of spans) {
      s.addEventListener('click', function (e) {
         console.log('special extra handler for span');
         e.stopPropagation();
      });
   }

   const section = document.querySelector('section');
   section.addEventListener('click', function (e) {
      e.stopPropagation();
   }, { capture: true });


});