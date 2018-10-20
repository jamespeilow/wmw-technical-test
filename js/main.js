  const triggers = document.querySelectorAll('.dropdown');

  function handleEnter(e) {
    console.log('hover');
    this.classList.add('trigger-enter');
    setTimeout(() => {
      if (this.classList.contains('trigger-enter')) {
        this.classList.add('trigger-enter-active')
      }}, 150);
  }
  function handleLeave(e) {
    console.log('off');
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
  }
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
