
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.timeline-entry').forEach(entry => {
      const category = entry.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        entry.style.display = 'block';
        entry.style.opacity = '1';
      } else {
        entry.style.opacity = '0';
        setTimeout(() => { entry.style.display = 'none'; }, 400);
      }
    });
  });
});
