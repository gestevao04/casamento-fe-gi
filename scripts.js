document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('section');

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      // Remove ativo das abas e seções
      tabs.forEach(t => t.classList.remove('ativo'));
      sections.forEach(s => s.classList.remove('ativo'));

      // Adiciona ativo na aba clicada e seção correspondente
      tab.classList.add('ativo');
      sections[idx].classList.add('ativo');

      // Scroll suave para topo da seção
      sections[idx].scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Inicializa a primeira aba ativa na página
  if(tabs.length > 0 && sections.length > 0) {
    tabs[0].classList.add('ativo');
    sections[0].classList.add('ativo');
  }

  // Foco no campo nome do formulário RSVP quando a aba confirmar presença abrir
  const confirmarTab = tabs[2]; // ajustar índice conforme sua ordem
  confirmarTab.addEventListener('click', () => {
    setTimeout(() => {
      const nomeInput = document.querySelector('#rsvp-form input[name="nome"]');
      if (nomeInput) {
        nomeInput.focus();
      }
    }, 300);
  });
});
