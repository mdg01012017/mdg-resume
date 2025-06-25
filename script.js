
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.timeline-entry').forEach(entry => {
      const category = entry.getAttribute('data-category');
      entry.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
    });
  });
});
