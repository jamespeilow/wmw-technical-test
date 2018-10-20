  const triggers = document.querySelectorAll('.dropdown');
  const menuTogglers = document.querySelectorAll('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  function toggleMenu(e) {
    e.preventDefault();
    menu.classList.toggle('menu-open');
  }

  function handleEnter(e) {
    this.classList.add('trigger-enter');
    setTimeout(() => {
      if (this.classList.contains('trigger-enter')) {
        this.classList.add('trigger-enter-active')
      }}, 150);
  }
  function handleLeave(e) {
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
  }
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
  menuTogglers.forEach(menuToggle => menuToggle.addEventListener('click', toggleMenu));