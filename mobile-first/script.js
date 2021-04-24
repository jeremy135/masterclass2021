function toggle() {
  const openClassName = 'menu_is_open';
  const menuNode$ = document.querySelector('.menu');
  if (menuNode$) {
    if (menuNode$.classList.contains(openClassName)) {
      menuNode$.classList.remove(openClassName);
    } else {
      menuNode$.classList.add(openClassName);
    }
  }
}