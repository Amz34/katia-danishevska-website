/* Honest contact helper: nothing is sent by the site.
   It copies the note so the visitor can paste it into LinkedIn. */
(() => {
  const form = document.getElementById('note-form');
  if (!form) return;
  const status = document.getElementById('note-status');
  const output = document.getElementById('note-output');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const details = String(data.get('details')).trim();
    if (!name || !details) {
      status.textContent = 'Please add your name and a short note.';
      return;
    }
    const note = `Hello Katia,\n\nTopic: ${data.get('topic')}\n\n${details}\n\n${name}`;

    try {
      await navigator.clipboard.writeText(note);
      output.hidden = true;
      status.textContent = 'Copied, not yet sent. Open LinkedIn and paste it into a message to Katia.';
    } catch {
      output.hidden = false;
      output.value = note;
      output.select();
      status.textContent = 'Not yet sent. Copy the text below and paste it into a LinkedIn message.';
    }
  });
})();
