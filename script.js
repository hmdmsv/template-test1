function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
  }

  function selectItem(selected) {
    const items = document.querySelectorAll('.orbit-item');
    items.forEach(item => {
      if (item !== selected) {
        item.classList.add('fade-out');
      }
    });
  }