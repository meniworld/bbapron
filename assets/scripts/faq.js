document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      const answer = button.nextElementSibling;
      if (!expanded) {
        answer.hidden = false;
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
        setTimeout(() => answer.hidden = true, 300);
      }
    });
  }); 