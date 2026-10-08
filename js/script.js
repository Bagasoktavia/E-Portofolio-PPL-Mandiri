/* Logika tampilan E-Portfolio: menu, galeri, tab materi, simulasi rubrik, dan pratinjau modul. Data ada di data.js */
document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$('#lk').innerHTML=S.map(x=>`<a href="#${x[0]}">${x[1]}</a>`).join('');
$('#tt').innerHTML='<tr><th>TP</th><th>Rumusan</th><th>Minggu</th><th>JP</th></tr>'+TP.map(r=>`<tr><td>${r[0]}</td><td>${r[3]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
function slot(m){const c=m.c?`<figcaption>${m.c}</figcaption>`:'';
if(!m.s)return`<figure><div class="ph"><i>+</i><b>${m.l}</b><small>Isi alamat berkas pada daftar MEDIA</small></div>${c}</figure>`;
const e=m.t==='video'?(/^http/.test(m.s)?`<iframe src="${m.s}" allowfullscreen loading="lazy"></iframe>`:`<video controls src="${m.s}"></video>`):`<img src="${m.s}" alt="${m.c||''}" loading="lazy">`;return`<figure>${e}${c}</figure>`}
$$('[data-g]').forEach(g=>g.innerHTML=MEDIA[g.dataset.g].map(slot).join(''));
$('#tb').innerHTML=TP.map((r,i)=>`<button role="tab" aria-selected="${!i}" data-i="${i}">TP ${r[0]}</button>`).join('');
function show(i){const r=TP[i];$$('#tb button').forEach(b=>b.setAttribute('aria-selected',b.dataset.i==i));const t=$('#tp');t.style.animation='none';t.offsetWidth;t.style.animation='';t.innerHTML=`<h3>${r[3]}</h3><p><b>Minggu ${r[1]}</b>, ${r[2]} JP</p><p><b>Materi pokok:</b> ${r[4]}.</p><p><b>Penilaian sumatif unit:</b> ${r[5]}.</p>`}
$('#tb').onclick=e=>{if(e.target.dataset.i)show(+e.target.dataset.i)};show(0);
const A=['Perencanaan dan pembagian tugas','Ketepatan proses produksi','Kesesuaian suaian dan fungsi','Kerja sama dan presentasi'];
$('#rc').innerHTML=A.map((a,i)=>`<label>${a}<select>${[4,3,2,1].map(v=>`<option value="${v}">Skor ${v}</option>`).join('')}</select></label>`).join('');
function hit(){const n=$$('#rc select').reduce((s,x)=>s+ +x.value,0)/16*100,k=n>80?'Sangat berkembang':n>70?'Berkembang sesuai harapan':n>50?'Mulai berkembang':'Belum berkembang';$('#hs').textContent='Nilai akhir '+n.toFixed(1)+' ('+k+')'}
$('#rc').onchange=hit;hit();
const L=$$('#lk a'),SE=S.map(x=>document.getElementById(x[0]));
S.forEach((x,i)=>{const p=S[i-1],n=S[i+1];if(i&&i<S.length)SE[i].insertAdjacentHTML('beforeend',`<div class="pn"><a href="#${p[0]}">Sebelumnya: ${p[1]}</a>${n?`<a href="#${n[0]}">Berikutnya: ${n[1]}</a>`:''}</div>`)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)L.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});SE.forEach(s=>io.observe(s));
addEventListener('scroll',()=>{const d=document.documentElement;$('#prog').style.width=scrollY/(d.scrollHeight-innerHeight)*100+'%';$('#up').classList.toggle('s',scrollY>600)},{passive:true});
$('#up').onclick=()=>scrollTo({top:0});
$('#mb').onclick=()=>$('#side').classList.toggle('open');
$('#side').onclick=e=>{if(e.target.tagName==='A')$('#side').classList.remove('open')};
document.addEventListener('click',e=>{const t=e.target;if(t.matches('figure img,#pgi')){$('#lb img').src=t.src;$('#lb').classList.add('o')}else if(t.closest('#lb'))$('#lb').classList.remove('o')});
let pi=0;function pg(d){pi=(pi+d+PAGES.length)%PAGES.length;$('#pgi').src=PAGES[pi];$('#pc').textContent='Halaman '+(pi+1)+' dari '+PAGES.length}
$('#pb').onclick=()=>pg(-1);$('#pf').onclick=()=>pg(1);pg(0);
