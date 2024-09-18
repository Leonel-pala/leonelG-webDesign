const home = document.querySelector('#nav-home');
const aboutMe = document.querySelector('#nav-aboutMe');
const service = document.querySelector('#nav-service');
const demo = document.querySelector('#nav-demo');
const contactMe = document.querySelector('#nav-contactMe');

const observer = new IntersectionObserver(
  (entries, observer) => {
    const active = document.querySelector('.active');
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const active = document.querySelector('.active');
        if (active) {
          active.classList.remove('active');
        }

        if (id == 'observed-aboutMe') aboutMe.classList.add('active');
        if (id == 'observed-home') home.classList.add('active');
        if (id == 'observed-service') service.classList.add('active');
        if (id == 'observed-demo') demo.classList.add('active');
        if (id == 'observed-contactMe') contactMe.classList.add('active');
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

const elements = document.querySelectorAll('.observed-elements');
elements.forEach((element) => {
  observer.observe(element);
});
