const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
$('#ano').textContent=new Date().getFullYear();
const btnMenu=$('#btn-menu'),nav=$('#main-nav');
btnMenu.addEventListener('click',()=>{nav.classList.toggle('show');btnMenu.setAttribute('aria-expanded',nav.classList.contains('show'))});
$$('#main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show')}));
const form=$('#contact-form'),fb=$('#form-feedback'),modal=$('#modal'),closeModalBtn=$('#modal-close');
function validarEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
form.addEventListener('submit',e=>{e.preventDefault();const n=$('#nome').value.trim(),em=$('#email').value.trim(),m=$('#mensagem').value.trim();
if(!n||!em||!m){fb.textContent='Por favor, preencha todos os campos.';fb.style.color='#f87171';fb.hidden=false;return;}
if(!validarEmail(em)){fb.textContent='E-mail inválido. Utilize usuario@dominio.com';fb.style.color='#f87171';fb.hidden=false;return;}
fb.hidden=true;form.reset();modal.setAttribute('aria-hidden','false');});
closeModalBtn.addEventListener('click',()=>modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.setAttribute('aria-hidden','true')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.setAttribute('aria-hidden','true')});
// Alternância de tema claro/escuro
const themeBtn=$('#theme-toggle'),body=document.body;
const saved=localStorage.getItem('theme');
if(saved)body.className=saved;
themeBtn.addEventListener('click',()=>{body.classList.toggle('light');body.classList.toggle('dark');localStorage.setItem('theme',body.className)});