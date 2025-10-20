document.getElementById('ano').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('mensagem').value.trim();
  if(!nome || !email || !msg){alert('Preencha todos os campos.');return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){alert('E-mail inválido');return;}
  alert('Mensagem enviada com sucesso!');
  form.reset();
});