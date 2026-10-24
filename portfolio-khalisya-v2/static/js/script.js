const projects={
 tatakala:{title:'Tatakala — Android Time Management App',period:'Aug 2026 — Present · Ongoing · Academic project',overview:'An Android application for schedule management, tasks, and personal productivity.',contributions:['Designed interface layouts and screen flows in Figma.','Developed Profile and Edit Profile screens.','Developed the Notification screen with Kotlin and Jetpack Compose.'],tech:['Kotlin','Jetpack Compose','Android Studio','Figma'],folder:'tatakala'},
 beauty:{title:'Beauty Store — E-Commerce Website',period:'May — Jun 2025 · Academic project period ended',overview:'An online beauty store interface featuring catalogs, product discovery, promotions, search, and a beauty assistant concept.',contributions:['Developed product catalog and category-based browsing.','Built responsive promotional and best-seller sections.','Implemented interactive JavaScript and explored product recommendation ideas.'],tech:['HTML','CSS','JavaScript'],folder:'beauty-store'},
 robot:{title:'Waste-Collecting Robot',period:'Sep 2026 — Present · Ongoing · Academic project',overview:'An Arduino-based lightweight waste-collecting robot exploring obstacle avoidance and automated navigation.',contributions:['Developing ultrasonic sensor-based obstacle detection.','Integrating motor drivers and motors for movement.','Exploring navigation with a lightweight suction mechanism.'],tech:['Arduino Uno','Ultrasonic Sensor','Motor Driver','Robotics'],folder:'waste-robot'},
 
sweettooth: {
    title: 'Sweet Tooth — Bakery E-Commerce Website',
    period: 'Oct 2026 — Present · Ongoing · Personal Project',
    overview: 'Sweet Tooth is an ongoing personal bakery e-commerce website built using Golang. The project focuses on backend development, product management, and building a practical online shopping experience.',
    contributions: [
        'Developing web server functionality using Golang.',
        'Building the bakery website interface with HTML, CSS, and JavaScript.',
        'Exploring e-commerce functionality and database integration using SQLite.'
    ],
    tech: [
        'Golang',
        'SQLite',
        'HTML',
        'CSS',
        'JavaScript'
    ],
    folder: 'sweet-tooth'
},

ai:{title:'Medical Image Classification',period:'May — Jun 2026 · Academic project period ended',overview:'An exploration of non-small cell lung cancer CT-scan subtype classification using deep learning.',contributions:['Studied the EfficientNetV2-S architecture for CT imagery.','Explored CBAM attention to enhance feature representation.'],tech:['Deep Learning','EfficientNetV2-S','CBAM'],folder:'ai-classification'},
 vending:{title:'Arduino-Based Smart Vending Machine',period:'Apr — Jun 2026 · Academic project period ended',overview:'A prototype automated vending mechanism using sensors, a DC gear motor, and state-based control.',contributions:['Integrated IR sensors, LCD interface, and a DC gear motor.','Implemented Moore finite state machine logic for dispensing feedback.'],tech:['Arduino Uno','Moore FSM','IR Sensors','DC Gear Motor'],folder:'vending-machine'}
};
document.addEventListener('DOMContentLoaded',()=>{
 
});
{
 document.querySelectorAll('.work-cover img').forEach(img=>{img.onerror=()=>{img.hidden=true};img.onload=()=>{img.hidden=false};if(img.complete&&!img.naturalWidth)img.hidden=true});
 const filters=[...document.querySelectorAll('.filter')],cards=[...document.querySelectorAll('.work-card')];filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.toggle('active',b===btn));cards.forEach(c=>{c.hidden=btn.dataset.filter!=='all'&&c.dataset.category!==btn.dataset.filter})}));
 const modal=document.getElementById('projectModal'),panel=modal.querySelector('.modal-panel'),close=modal.querySelector('.modal-x');let previousFocus=null;
 function hide(){modal.hidden=true;document.body.classList.remove('modal-open');previousFocus?.focus()}
 function show(id){const data=projects[id];if(!data)return;previousFocus=document.activeElement;document.getElementById('modalTitle').textContent=data.title;document.getElementById('modalPeriod').textContent=data.period;document.getElementById('modalOverview').textContent=data.overview;const list=document.getElementById('modalContributions');list.replaceChildren();data.contributions.forEach(x=>{const li=document.createElement('li');li.textContent=x;list.append(li)});const tags=document.getElementById('modalTags');tags.replaceChildren();data.tech.forEach(x=>{const span=document.createElement('span');span.textContent=x;tags.append(span)});const gallery=document.getElementById('modalGallery'),placeholder=document.getElementById('docPlaceholder');gallery.replaceChildren();placeholder.hidden=false;['01.jpg','02.jpg','01.png','02.png'].forEach(file=>{const url=`/static/images/projects/${data.folder}/${file}`,a=document.createElement('a'),img=document.createElement('img');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.hidden=true;img.alt=`${data.title} documentation`;img.onload=()=>{a.hidden=false;placeholder.hidden=true};img.onerror=()=>a.remove();a.append(img);gallery.append(a);img.src=url});modal.hidden=false;document.body.classList.add('modal-open');panel.scrollTop=0;close.focus()}
 cards.forEach(card=>card.querySelector('.work-open').addEventListener('click',()=>show(card.dataset.id)));close.addEventListener('click',hide);modal.querySelector('[data-close]').addEventListener('click',hide);document.addEventListener('keydown',e=>{if(modal.hidden)return;if(e.key==='Escape')hide();if(e.key==='Tab'){const focusables=[...panel.querySelectorAll('button,a[href]')].filter(el=>el.getClientRects().length);if(!focusables.length)return;const first=focusables[0],last=focusables.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.topbar nav a[href^="#"]')];const update=()=>{let current='about';sections.forEach(s=>{if(s.getBoundingClientRect().top<=170)current=s.id});links.forEach(a=>a.classList.toggle('active',a.hash==='#'+current))};window.addEventListener('scroll',update,{passive:true});update();
 document.getElementById('contactForm').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const name=form.elements.name.value.trim(),email=form.elements.email.value.trim(),message=form.elements.message.value.trim();const subject=encodeURIComponent('Portfolio inquiry from '+name);const body=encodeURIComponent(`Hi Khalisya,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);window.location.href=`mailto:khalisyanaira28@students.unnes.ac.id?subject=${subject}&body=${body}`});
};
