// ====Menu Show=====
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)
   
   if(toggle && nav) {
      toggle.addEventListener('click', () => {
         nav.classList.toggle('show'); 
      })
   }
}
showMenu('nav-toggle', 'nav-menu');

// ====Active And Remove Menu====
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
   //Make Active Link
   navLink.forEach(n => n.classList.remove('active'));
   this.classList.add('active');

   //Remove Menu for mobile
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//change Active When Scrolling
const sections = document.querySelectorAll('section[id]'); 

window.addEventListener('scroll', scrollActive);

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute('id');

      // console.log(sectionHeight + ' ' + sectionTop + ' ' + (sectionHeight + sectionTop) + ' ' + scrollY);

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.nav__list a[href*='+ sectionId + ']').classList.add('active');
      } else {
         document.querySelector('.nav__list a[href*='+ sectionId + ']').classList.remove('active');
      }
   })
    
}
