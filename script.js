const U='https://github.com/larissaribeiro-dev/';
const NAV=[['home','n_home','home'],['sobre','n_about','about'],['formacao','n_edu','job'],['servicos','n_serv','shapes'],['skills','n_skills','chip'],['projetos','n_proj','laptop'],['competencias','e_comp','chat'],['contato','n_contact','mail']];
const IC={home:'M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6',about:'M4 6h16M4 10h12M4 14h16M4 18h12',job:'M3 8h18v12H3zM9 8V5h6v3M3 13h18',shapes:'M12 3l4 7H8zM4 14h6v6H4zM17 14a3 3 0 1 0 0 6a3 3 0 1 0 0-6',chip:'M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4',laptop:'M5 5h14v10H5zM2 19h20',chat:'M4 5h16v11H9l-5 4z',mail:'M3 6h18v12H3zM3 7l9 7 9-7'};
const ic=k=>`<svg viewBox="0 0 24 24"><path d="${IC[k]}"/></svg>`;
const L={
pt:{n_home:'Início',n_about:'Sobre',n_edu:'Formação',n_serv:'O que faço',n_skills:'Habilidades',n_proj:'Projetos',n_contact:'Contato',
e_hello:'Olá',e_about:'Sobre',e_edu:'Formação',e_serv:'O que faço',e_skills:'Habilidades',e_proj:'Projetos',e_comp:'Competências',e_contact:'Contato',
role:'Estudante de Engenharia da Computação',
lead:'Sou Larissa, estudante de Engenharia da Computação na UFAM, em Manaus. Busco um estágio em TI para aplicar o que estudo em projetos reais.',
b_proj:'Ver projetos',b_cv:'Baixar CV',
about1:'Estou no 6º período de Engenharia da Computação na UFAM. Gosto de entender como as coisas funcionam por dentro: de um parser escrito do zero a um processador de 8 bits rodando em FPGA.',
about2:'Trabalho com C, C++, Python, HTML, CSS, JavaScript e SQL, e mantenho meus projetos e estudos no GitHub. Busco aprender com profissionais experientes, participar de projetos reais e contribuir para a evolução das soluções da empresa.',
contact:'Aberta a oportunidades de estágio, networking e troca de ideias. Me escreva!',gh:'Ver no GitHub ↗',cd:'Contato',ad:'Endereço',addr:'Manaus, Amazonas, Brasil',f_name:'Nome',f_mail:'E-mail',f_subj:'Assunto (opcional)',f_msg:'Mensagem',p_name:'Seu nome',p_mail:'Seu e-mail',p_subj:'Sobre o que quer falar?',p_msg:'Escreva sua mensagem',send:'Enviar mensagem',sent:'Mensagem enviada! Obrigada.',err:'Não foi possível enviar. Tente pelo e-mail.',mail:'Abrindo seu aplicativo de e-mail…',
c_lang:'Linguagem',c_web:'Web',c_db:'Banco de dados',c_tool:'Ferramenta',c_hdl:'Hardware (HDL)',c_sim:'Simulação',c_fpga:'FPGA',
h:{hero:['Além da interface,','perto da máquina'],about:['Minha jornada e','objetivos'],edu:['Formação e','cursos'],serv:['Soluções do software','ao hardware'],skills:['Minhas','ferramentas'],proj:['Projetos onde a teoria','vira prática'],comp:['Minhas','competências'],contact:['Alguma dúvida?','Estou aqui para ouvir.']}},
en:{n_home:'Home',n_about:'About',n_edu:'Education',n_serv:'What I do',n_skills:'Skills',n_proj:'Projects',n_contact:'Contact',
e_hello:'Hello',e_about:'About',e_edu:'Education',e_serv:'What I do',e_skills:'Skills',e_proj:'Projects',e_comp:'Strengths',e_contact:'Contact',
role:'Computer Engineering student',
lead:"I'm Larissa, a Computer Engineering student at UFAM in Manaus, Brazil. I'm looking for an IT internship to apply what I study to real projects.",
b_proj:'View projects',b_cv:'Download CV',
about1:"I'm in my 6th semester of Computer Engineering at UFAM. I like understanding how things work inside: from a parser written from scratch to an 8-bit processor running on an FPGA.",
about2:'I work with C, C++, Python, HTML, CSS, JavaScript and SQL, and keep my projects and studies on GitHub. I want to learn from experienced professionals, take part in real projects and help improve the company\'s solutions.',
contact:'Open to internship opportunities, networking and exchanging ideas. Get in touch!',gh:'View on GitHub ↗',cd:'Contact details',ad:'Address',addr:'Manaus, Amazonas, Brazil',f_name:'Name',f_mail:'Email',f_subj:'Subject (optional)',f_msg:'Message',p_name:'Your name',p_mail:'Your email',p_subj:'What would you like to talk about?',p_msg:'Write your message',send:'Send message',sent:'Message sent! Thank you.',err:'Could not send. Please use email instead.',mail:'Opening your email app…',
c_lang:'Language',c_web:'Web',c_db:'Database',c_tool:'Tool',c_hdl:'Hardware (HDL)',c_sim:'Simulation',c_fpga:'FPGA',
h:{hero:['Beyond the interface,','close to the machine'],about:['My journey &','goals'],edu:['Education &','courses'],serv:['Solutions from software','to hardware'],skills:['My','toolbox'],proj:['Projects where theory','meets practice'],comp:['My','strengths'],contact:['Any questions?',"I'm all ears."]}}};
const EDU=[
[{pt:'Engenharia da Computação',en:'B.Sc. Computer Engineering'},'UFAM',{pt:'2024 · 6º período, em andamento',en:'2024 · 6th semester, ongoing'}],
[{pt:'ChampionCHIP eXperience (Jornada Chip Inventor)',en:'ChampionCHIP eXperience (Chip Inventor)'},'ChampionCHIP',{pt:'abr–jun/2026',en:'Apr–Jun 2026'}],
[{pt:'Processos de Teste de Software (24 h)',en:'Software Testing Processes (24 h)'},'TIC em trilhas / Eldorado',{pt:'fev/2026',en:'Feb 2026'}],
[{pt:'Imersão Dados com Python II',en:'Data Immersion with Python II'},'Alura',{pt:'fev/2026',en:'Feb 2026'}],
[{pt:'Fundamentos de IA Generativa e Chats Inteligentes',en:'Generative AI & Smart Chats Fundamentals'},'Samsung Ocean',{pt:'jan/2026',en:'Jan 2026'}],
[{pt:'Ensino Médio',en:'High school'},'Escola Estadual Gilberto Mestrinho','2021–2023'],
[{pt:'Projeto PCE/FAPEAM: sabões e detergentes biodegradáveis',en:'PCE/FAPEAM project: biodegradable soaps and detergents'},'Escola Estadual Gilberto Mestrinho','2023']];
const SV=[
[{pt:'Desenvolvimento de software',en:'Software development'},{pt:'Programas e ferramentas em Python, C, C++ e TypeScript, com testes automatizados e CI (GitHub Actions), como no progcalc e no taskgraph.',en:'Programs and tools in Python, C, C++ and TypeScript, with automated tests and CI (GitHub Actions), as in progcalc and taskgraph.'}],
[{pt:'Sistemas digitais e FPGA',en:'Digital systems & FPGA'},{pt:'Projetos em Verilog simulados no ModelSim e gravados na placa DE10-Lite: processador de 8 bits, Blackjack em hardware e relógio digital.',en:'Verilog projects simulated in ModelSim and run on the DE10-Lite board: 8-bit processor, hardware Blackjack and a digital clock.'}],
[{pt:'Bancos de dados',en:'Databases'},{pt:'Conhecimentos em SQL, MySQL e SQL Server.',en:'Knowledge of SQL, MySQL and SQL Server.'}],
[{pt:'Testes de software',en:'Software testing'},{pt:'Curso de Processos de Teste de Software (24 h, Eldorado) e interesse em análise e correção de erros e testes de funcionalidades.',en:'Software Testing Processes course (24 h, Eldorado) and interest in error analysis, bug fixing and functional testing.'}]];
const SK=[['c.svg','lang','C'],['cplusplus.svg','lang','C++'],['python.svg','lang','Python'],['html5.svg','web','HTML'],['css3.svg','web','CSS'],['javascript.svg','lang','JavaScript'],['mysql.svg','db','SQL · MySQL'],['sqlserver.svg','db','SQL Server'],['git.svg','tool','Git · GitHub'],['vscode.svg','tool','VS Code'],['verilog.svg','hdl','Verilog'],['intel.svg','fpga','Quartus Prime'],['modelsim.svg','sim','ModelSim'],['gtkwave.png','sim','GTKWave'],['ltspice.svg','sim','LTspice']];
const CP={pt:['Raciocínio lógico','Resolução de problemas','Organização','Responsabilidade','Capacidade de aprendizagem','Trabalho colaborativo','Aprender novas tecnologias','Interesse em desenvolvimento de software'],en:['Logical reasoning','Problem solving','Organization','Responsibility','Learning ability','Teamwork','Learning new technologies','Interest in software development']};
const P=[
['progcalc',['Python','pytest','Ruff','GitHub Actions'],{pt:'Calculadora de linha de comando para programadores (bitwise, bases numéricas e complemento de dois), com tokenizador, parser descendente recursivo e avaliador escritos do zero, sem eval(); testes e CI.',en:"Command-line calculator for programmers (bitwise, number bases and two's complement), with a tokenizer, recursive descent parser and evaluator written from scratch, no eval(); tests and CI."}],
['taskgraph',['TypeScript','Node.js','GitHub Actions','ESLint','Prettier'],{pt:'Lista de tarefas em linha de comando com dependências entre tarefas (grafo dirigido acíclico), detecção de ciclos e ordem de execução por ordenação topológica; dados em JSON com validação; testes e CI.',en:'Command-line to-do list with task dependencies (directed acyclic graph), cycle detection and execution order by topological sort; validated JSON data; tests and CI.'}],
['processador-8-bits',['Verilog','Quartus Prime','ModelSim','DE10-Lite'],{pt:'Processador de 8 bits (SAP-1) com cinco instruções, barramento único, controle em FSM e ALU; seis testbenches automáticos; simulado e gravado em FPGA. (Em dupla, UFAM)',en:'8-bit processor (SAP-1) with five instructions, single bus, FSM control and ALU; six automated testbenches; simulated and run on FPGA. (Pair project, UFAM)'}],
['blackjack-fpga',['Verilog','Quartus Prime','ModelSim','DE10-Lite'],{pt:'Jogo de Blackjack em hardware: FSM de 13 estados, baralho em ROM, embaralhamento por LFSR de 6 bits, debouncer de botões e placar em displays de 7 segmentos. (Em equipe, UFAM)',en:'Blackjack game in hardware: 13-state FSM, ROM deck, 6-bit LFSR shuffling, button debouncer and 7-segment scoreboard. (Team project, UFAM)'}],
['relogio-digital-sincrono',['LTspice','Verilog','Quartus Prime','ModelSim','DE10-Lite'],{pt:'Relógio digital síncrono de 24 horas em três versões (portas lógicas CMOS, contadores comerciais e Verilog em FPGA), com testbench do dia completo. (Em equipe, UFAM)',en:'24-hour synchronous digital clock in three versions (CMOS logic gates, commercial counters and Verilog on FPGA), with a full-day testbench. (Team project, UFAM)'}],
['esp32-monitor-ambiental',['C++','ESP32','DHT22','OLED SSD1306','Wokwi'],{pt:'Monitor de temperatura e umidade com ESP32, sensor DHT22 e display OLED, simulado no Wokwi. A leitura passa por três verificações antes de qualquer decisão; se o sensor falhar, mostra ERRO SENSOR e volta ao normal sozinho.',en:'Temperature and humidity monitor with an ESP32, DHT22 sensor and OLED display, simulated in Wokwi. Every reading passes three checks before any decision; if the sensor fails, it shows a sensor error and recovers on its own.'}],
['hazard-lab',['JavaScript','HTML','CSS','Node.js'],{pt:'Analisador de hazards estáticos em circuitos AND-OR de dois níveis: encontra os pares de entradas vulneráveis, mostra o mapa de Karnaugh, corrige com termos de consenso e simula o glitch no tempo, em um osciloscópio lógico. Com demo online e testes automatizados.',en:'Static hazard analyzer for two-level AND-OR circuits: finds the vulnerable input pairs, shows the Karnaugh map, fixes them with consensus terms and simulates the glitch over time on a logic oscilloscope. With a live demo and automated tests.'}],
['emulador-chip8',['C++17','SDL2','CMake','GoogleTest'],{pt:'Emulador da máquina virtual CHIP-8 em C++17: executa o ciclo de busca, decodificação e execução de 34 das 35 instruções e desenha numa janela SDL2, com teclado hexadecimal e beep. O núcleo é independente do SDL e tem 105 testes com GoogleTest e CI.',en:'CHIP-8 virtual machine emulator in C++17: runs the fetch-decode-execute cycle for 34 of the 35 instructions and draws to an SDL2 window, with hex keypad and beep. The core is independent of SDL and has 105 GoogleTest tests and CI.'}],
['snipvault',['Python','FastAPI','SQLAlchemy','Docker','GitHub Actions'],{pt:'API REST para guardar, buscar e compartilhar trechos de código: login com JWT, tags, snippets privados ou públicos e busca por texto, linguagem e tag, com paginação. Rotas, regras de negócio e dados em camadas separadas; testes com mais de 95% de cobertura, Docker e CI.',en:'REST API to store, search and share code snippets: JWT login, tags, private or public snippets and search by text, language and tag, with pagination. Routes, business rules and data in separate layers; tests with over 95% coverage, Docker and CI.'}]];
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),{rootMargin:'0px 0px -10% 0px'});
function lang(l){
  const D=L[l];
  document.documentElement.lang=l==='pt'?'pt-BR':'en';document.title=l==='pt'?'Larissa Ribeiro · Engenharia da Computação':'Larissa Ribeiro · Computer Engineering';
  $$('[data-i]').forEach(e=>e.textContent=D[e.dataset.i]);
  $$('[data-p]').forEach(e=>e.placeholder=D[e.dataset.p]);
  $$('[data-h]').forEach(e=>{const h=D.h[e.dataset.h];if(e.dataset.h==='hero'){e.innerHTML=`<span class="ln"><span class="w in">${h[0]}</span></span><span class="ln"><span class="g in">${h[1]}</span></span>`;return}e.innerHTML=`<span class="w">${h[0]}</span>${e.dataset.h==='contact'?'<br>':' '}<span class="g">${h[1]}</span>`});
  $('#bar').innerHTML=NAV.map(n=>`<a href="#${n[0]}">${ic(n[2])}<span>${D[n[1]]}</span></a>`).join('');
  $('#side ul').innerHTML='<li class="ttl">Menu</li>'+NAV.map(n=>`<li><a href="#${n[0]}">${ic(n[2])}<span>${D[n[1]]}</span></a></li>`).join('');
  $('#lang').textContent=l==='pt'?'EN':'PT';
  $('#edu').innerHTML=EDU.map(r=>`<div class="row rv"><b>${r[0][l]}</b><span>${r[1]}</span><span>${r[2].pt?r[2][l]:r[2]}</span></div>`).join('');
  $('#acc').innerHTML=SV.map(s=>`<div class="ac rv"><div class="ach" role="button" tabindex="0" aria-expanded="false"><b>${s[0][l]}</b><i>↘</i></div><div class="acc"><div><p>${s[1][l]}</p></div></div></div>`).join('');
  $('#sk').innerHTML=SK.map(s=>`<div class="sk rv"><div class="ic"><img src="assets/icons/${s[0]}" alt="" onerror="this.onerror=null;this.src='assets/icons/fallback.svg'"></div><div>${s[2]}</div><small>${D['c_'+s[1]]}</small></div>`).join('');
  $('#pj').innerHTML=P.map(p=>`<article class="pj rv"><div class="th">${TH[p[0]]||`<b>${p[0].slice(0,2).toUpperCase()}</b>`}<img src="assets/projetos/${p[0]}.jpg" alt="" onerror="this.remove()"></div><h6>${p[0]}</h6><p>${p[2][l]}</p><div class="tags">${p[1].map(t=>`<em>${t}</em>`).join('')}</div><a class="l" href="${U}${p[0]}" target="_blank" rel="noopener">${D.gh}</a></article>`).join('');
  $('#mq').innerHTML='<div>'+[...CP[l],...CP[l]].map((c,i)=>`<span><small>${String(i%8+1).padStart(2,'0')}</small><br>${c}</span>`).join('')+'</div>';
  $$('.rv').forEach(e=>io.observe(e));
  tick();dispatchEvent(new Event('scroll'));
}
let cur='pt';
$('#lang').onclick=()=>{cur=cur==='pt'?'en':'pt';lang(cur)};
$('#burger').onclick=()=>$('#side').classList.toggle('open');
$('#side').onclick=()=>$('#side').classList.remove('open');
$('#acc').onclick=e=>{const a=e.target.closest('.ac');if(!a||!e.target.closest('.ach'))return;const o=a.classList.contains('open');$$('.ac').forEach(x=>x.classList.remove('open'));if(!o)a.classList.add('open');$$('.ach').forEach(h=>h.setAttribute('aria-expanded',h.parentElement.classList.contains('open')))};
$('#acc').onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('ach')){e.preventDefault();e.target.click()}};
addEventListener('scroll',()=>{let y=scrollY+200,id='home';$$('section').forEach(s=>{if(y>=s.offsetTop)id=s.id});
  $$('.bar a,.side a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))});
lang(cur);
let n=0;const t=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*6));
  $('#pct').textContent=String(n).padStart(2,'0');$('#arc').style.strokeDashoffset=1879*(1-n/100);
  if(n>=100){clearInterval(t);setTimeout(()=>{$('#pre').classList.add('out');document.body.classList.add('ready');setTimeout(()=>$('#pre').remove(),1100)},300)}},60);

const FORM_ENDPOINT=''; // opcional: cole aqui o endereço do Formspree (veja o guia)
$('#cf').onsubmit=async e=>{e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f)),m=$('#fm');
  if(FORM_ENDPOINT){try{const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;f.reset();m.textContent=L[cur].sent}catch(x){m.textContent=L[cur].err}return}
  location.href='mailto:larissa.rafaela.dev@gmail.com?subject='+encodeURIComponent(d.subject||'Contato pelo portfólio · '+d.name)+'&body='+encodeURIComponent(d.message+'\n\n'+d.name+' · '+d.email);m.textContent=L[cur].mail};

function tick(){const d=new Date(),a=d.getSeconds()%30<15,p=(a?[d.getHours(),d.getMinutes()]:[d.getMinutes(),d.getSeconds()]).map(n=>String(n).padStart(2,'0')).join('');
  const svg=`<svg viewBox="0 0 206 76">${[...p].map((c,i)=>dg(+c,[0,48,118,166][i])).join('')}</svg>`;
  $$('.clk span').forEach(e=>e.innerHTML=svg);$$('.clk small').forEach(e=>e.textContent='24 h · '+(a?'HH MM':'MM SS'))}
setInterval(tick,1000);
