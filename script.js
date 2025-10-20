document.getElementById('ano').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    feedback.style.color = '#f87171';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = 'Por favor, insira um e-mail válido.';
    feedback.style.color = '#f87171';
    return;
  }

  feedback.textContent = 'Mensagem enviada com sucesso!';
  feedback.style.color = '#4ade80';
  form.reset();
});
