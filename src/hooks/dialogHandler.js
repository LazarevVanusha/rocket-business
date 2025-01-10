document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('cardDialog');
  const closeDialogButton = document.getElementById('closeDialogButton');

  closeDialogButton.addEventListener('click', () => {
    dialog.close();
  });

  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-index]');
    if (!button) return;

    const action = button.getAttribute('data-action');

    if (action === 'open-modal') {
      dialog.showModal();
    }
  });
});