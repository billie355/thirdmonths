// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} 
  })
},{threshold:0.2});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Floating hearts generator
const heartsContainer = document.querySelector('.hearts');
function spawnHeart(){
  const h = document.createElement('div');
  h.className = 'heart';
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const startX = Math.random()*vw;
  const dx = (Math.random()*120-60) + 'px'; // drift
  const rot = (Math.random()*120-60) + 'deg';
  const size = 12 + Math.random()*18; // 12-30px
  const dur = 6 + Math.random()*6; // 6-12s
  h.style.left = startX + 'px';
  h.style.bottom = '-10vh';
  h.style.setProperty('--dx', dx);
  h.style.setProperty('--rot', rot);
  h.style.width = size + 'px';
  h.style.height = size + 'px';
  h.style.animationDuration = dur + 's';
  heartsContainer.appendChild(h);
  setTimeout(()=>h.remove(), dur*1000);
}
let heartTimer = setInterval(spawnHeart, 450);

// Optional: Update names quickly by editing below
document.getElementById('gf-name').textContent = 'Chrish Ann';
document.getElementById('sender-name').textContent = 'Billy Joe';


// Smooth scroll for in-page anchor links (e.g., #gallery, #letter)
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href');
  if(!id || id === '#') return;
  const target = document.querySelector(id);
  if(target){
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  }
});
