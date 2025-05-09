document.querySelectorAll('.grid-item').forEach(item => {
    let hoverTimer;

    item.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => {
        item.classList.add('hovering');
      }, 200); // wait 300ms before applying hover effect
    });

    item.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      item.classList.remove('hovering');
    });
  });