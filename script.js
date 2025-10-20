/* script.js - Versão revisada
   Responsável por:
   - Menu mobile toggle
   - Validação do formulário (JS puro)
   - Simulação de envio (limpar campos e mostrar modal)
   - Inserir ano no rodapé automaticamente
   Comentários explicativos foram adicionados conforme o enunciado.
*/

// Helpers simples
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Inserir ano atual no rodapé (automatiza requisito do PDF)
$('#ano').textContent = new Date().getFullYear();

/* ---------- Menu Mobile Toggle ---------- */
const btnMenu = $('#btn-menu');
const mainNav = $('#main-nav');

btnMenu.addEventListener('click', () => {
  const isShown = mainNav.classList.toggle('show');
  btnMenu.setAttribute('aria-expanded', isShown ? 'true' : 'false');
});

// Fecha menu ao clicar em um link (útil em mobile)
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mainNav.classList.remove('show');
    btnMenu.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Form Validation & Simulated Submit ---------- */
const form = $('#contact-form');
const inputNome = $('#nome');
const inputEmail = $('#email');
const inputMsg = $('#mensagem');
const feedback = $('#form-feedback');
const modal = $('#modal');
const modalClose = $('#modal-close');

// Expressão regular simples para validar e-mail (suficiente para a atividade)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mostra feedback no DOM (erro ou sucesso)
function showFeedback(message, isError = false) {
  feedback.hidden = false;
  feedback.style.display = 'block';
  feedback.textContent = message;
  feedback.style.background = isError ? 'rgba(248,113,113,0.12)' : 'rgba(74,222,128,0.08)';
  feedback.style.color = isError ? '#fecaca' : '#bbf7d0';
  feedback.style.border = isError ? '1px solid rgba(248,113,113,0.18)' : '1px solid rgba(16,185,129,0.12)';
}

// Limpa feedback
function clearFeedback() {
  feedback.hidden = true;
  feedback.style.display = 'none';
  feedback.textContent = '';
  feedback.style = '';
}

// Abre modal de sucesso (simulação)
function openModal() {
  modal.setAttribute('aria-hidden', 'false');
}

// Fecha modal
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Validação e simulação de envio
form.addEventListener('submit', (e) => {
  e.preventDefault(); // impede envio real

  clearFeedback();

  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();
  const mensagem = inputMsg.value.trim();

  // Validações obrigatórias
  if (!nome) {
    showFeedback('Por favor, preencha seu nome.', true);
    inputNome.focus();
    return;
  }
  if (!email) {
    showFeedback('Por favor, informe seu e-mail.', true);
    inputEmail.focus();
    return;
  }
  if (!emailRegex.test(email.toLowerCase())) {
    showFeedback('Formato de e-mail inválido. Utilize usuario@dominio.com', true);
    inputEmail.focus();
    return;
  }
  if (!mensagem) {
    showFeedback('Por favor, escreva sua mensagem.', true);
    inputMsg.focus();
    return;
  }

  // Se passou nas validações: simular envio (pequena pausa para melhor UX)
  showFeedback('Enviando mensagem...', false);

  setTimeout(() => {
    // Limpar formulário
    form.reset();
    clearFeedback();
    openModal();
  }, 700);
});
