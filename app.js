(() => {
  const key = 'japan-notes-checklist-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch { /* ignore invalid local state */ }
  document.querySelectorAll('[data-task]').forEach((box) => {
    box.checked = Boolean(saved[box.dataset.task]);
    box.addEventListener('change', () => {
      saved[box.dataset.task] = box.checked;
      localStorage.setItem(key, JSON.stringify(saved));
    });
  });
})();
