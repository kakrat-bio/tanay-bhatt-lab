(() => {
const root=document.getElementById('tb-ecosystem');
const research=[
 {name:'Skin repair & fibrosis',scope:'Mechanistic and ongoing research',summary:'How a resting epidermis initiates repair, and how dermal responses diverge towards healing or fibrosis.',questions:['How do mechanical cues and DNMT3a-dependent epigenetic changes initiate repair?','How does caspase-8 regulation connect epithelial injury to inflammation?','What determines fibroblast-driven repair versus fibrosis?'],tools:['Keratinocyte and fibroblast models','Collagen contraction assays; ex vivo human skin','Single-cell RNA sequencing; gene-expression analysis'],applications:['Mechanistic targets for chronic wounds','Understanding fibrosis and scarring'],source:'Skin biology and tissue repair', href:'research.html#skin-repair'},
 {name:'Innate host defence',scope:'Published research and continuing questions',summary:'Harnessing antimicrobial peptides produced by skin cells to understand protection against bacteria and viruses.',questions:['What controls the timing and persistence of S100A7 secretion?','How do LL37 and niacinamide disrupt enveloped viruses?','Can 12-hydroxystearic acid stimulate protective peptide release?'],tools:['Keratinocyte culture and secreted-peptide studies','Bacterial and viral functional assays','RT-qPCR, Western blotting and imaging'],applications:['Host-directed antimicrobial strategies','Mechanistic links between inflammation and protection'],source:'Antimicrobial peptides and host defence', href:'research.html#host-defense'},
 {name:'Virology & antivirals',scope:'Experimental research; nanomaterial work includes a preprint',summary:'Studying viral infection and evaluating host-derived molecules and biogenic nanomaterials as antiviral candidates.',questions:['How broadly do interventions act across DENV-1–4?','Does inhibition act at entry or another stage of infection?','How can antiviral efficacy be separated from cell toxicity?'],tools:['DENV, SARS-CoV-2 and LSDV cell-culture work','Neutralisation and pseudotyped-virus assays','Dose–response modelling; cytotoxicity and selectivity analysis','Green-synthesised AgNP characterisation; viral RNA assays'],applications:['Cross-serotype antiviral candidates','Mechanistic and quantitative infection assays'],source:'Virology and host–pathogen interactions', href:'research.html#virology'},
 {name:'Cellular health & clocks',scope:'Ongoing research',summary:'How mitochondrial stress and circadian regulation influence skin barrier function and communication between cells.',questions:['How does mitochondrial stress alter keratinocyte signalling?','How does the epidermal clock regulate lipid-barrier genes?','How do stress and biological rhythms relate to inflammation, ageing and pigmentation?'],tools:['Primary human keratinocytes and ex vivo skin','Mitochondrial network and mitophagy imaging','Oxidative-stress and energy-status measurements','Clock-gene time courses; cosinor modelling'],applications:['Mechanistic evaluation of skin-active interventions','Understanding barrier resilience and recovery'],source:'Cellular health and circadian skin biology', href:'research.html#cellular-health'},
 {name:'Reference reagents & measurement',scope:'Biological reference reagents',summary:'Developing biological reference reagents that make diagnostic and research measurements more comparable.',questions:['How can reagent content or potency be assigned reproducibly?','Are vials homogeneous, and how stable are they?','How can laboratories using different instruments compare results?'],tools:['NAAT and qPCR; relative RNA-content analysis','Vial sampling, homogeneity and stability studies','DENV WHO traceability and collaborative measurement','Virus-specific reagent production and characterisation'],applications:['DENV-1–4, LSDV and SARS-CoV-2 reference reagents','Assay calibration, validation and reproducibility'],source:'Biological reference materials. WHO traceability here refers to DENV.', href:'research.html#reference-standards'},
 {name:'Gene-silencing therapies',scope:'KoshKey · Translational programme',summary:'KoshKey’s translational programme connects discoveries in skin repair and innate defence to targeted gene-silencing therapies. ASOs and siRNAs are distinct gene-silencing modalities.',questions:['Can gene silencing restore repair and antimicrobial responses in diabetic skin?','How can oligonucleotides reach the relevant skin cells?','Which preclinical evidence supports progression of a therapeutic candidate?'],tools:['Antisense oligonucleotide (ASO) and siRNA design','Lipid nanoparticle delivery and topical formulation','Human skin explants and diabetic animal models','Molecular assays, confocal imaging and efficacy studies'],applications:['RiboKOSH platform development','Infected chronic diabetic wounds and AMR','Retargetable approaches to skin disorders'],source:'KoshKey science · Translational programme', href:'https://koshkey.com/science'}
];
const links=[
 {a:0,b:1,label:'Caspase-8 connects repair initiation with sustained antimicrobial-peptide secretion.'},
 {a:0,b:3,label:'Shared skin models connect tissue repair with cellular stress and barrier function.'},
 {a:0,b:5,label:'Repair mechanisms inform gene-silencing targets for chronic diabetic wounds.'},
 {a:1,b:2,label:'Host antimicrobial peptides can inhibit viruses, linking innate defence to antiviral research.'},
 {a:1,b:5,label:'Gene silencing aims to release the skin’s own antimicrobial response.'},
 {a:2,b:4,label:'Virus-specific reagents support reliable molecular assay evaluation; neutralisation is a separate measurement.'},
 {a:3,b:5,label:'Cellular stress and clock biology could guide future therapeutic targets or treatment timing.',proposed:true},
 {a:4,b:5,label:'Reference-material principles could inform future therapeutic assay standardisation.',proposed:true}
];
let selected=0;
const buttons=[...root.querySelectorAll('[data-theme]')],content=root.querySelector('.tb-content');
function render(i){
 selected=i;buttons.forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.theme)===i)));
 const d=research[i],near=links.filter(l=>l.a===i||l.b===i);
 content.innerHTML=`<div class="tb-heading"><h3>${d.name}</h3><span class="map-meta map-muted">${d.scope}</span></div><div class="tb-summary">${d.summary}</div><div class="tb-detail-grid">${[['Scientific questions',d.questions],['Tools & models',d.tools],['Translational directions',d.applications]].map(([title,values])=>`<section><h3>${title}</h3><ul>${values.map(v=>`<li>${v}</li>`).join('')}</ul></section>`).join('')}</div><h3 class="tb-links-title">Connections across the programme</h3><div class="tb-links">${near.map(l=>{const j=l.a===i?l.b:l.a;return `<div class="tb-link"><button class="map-link" type="button" data-jump="${j}">${research[j].name} ↗</button><span>${l.label}</span>${l.proposed?'<span class="map-meta map-muted">Proposed scientific bridge</span>':''}</div>`}).join('')}</div><div class="tb-source map-meta map-muted"><a href="${d.href}">${d.source}</a></div>`;
 content.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>render(Number(b.dataset.jump))));draw();
}
function draw(){
 const map=root.querySelector('.tb-map'),svg=root.querySelector('.tb-connections'),r=map.getBoundingClientRect();
 const rect=e=>{const b=e.getBoundingClientRect();return {x:b.left-r.left+b.width/2,y:b.top-r.top+b.height/2,w:b.width,h:b.height}};
 const p=buttons.map(rect),hub=rect(root.querySelector('.tb-hub'));
 svg.setAttribute('viewBox',`0 0 ${r.width} ${r.height}`);
 const mobile=r.width<=600;
 let html=p.map(a=>`<path d="M${hub.x} ${hub.y} L${a.x} ${a.y}" stroke="var(--border)" fill="none" stroke-width="1"/>`).join('');
 links.filter(l=>l.a===selected||l.b===selected).forEach(l=>{
  const a=p[l.a],b=p[l.b];let x1=a.x,x2=b.x,y1=a.y,y2=b.y,curve;
  if(Math.abs(a.x-b.x)<10){const sign=a.x<r.width/2?1:-1; x1+=sign*a.w/2;x2+=sign*b.w/2;const channel=mobile?r.width/2:a.x+sign*(a.w/2+26);curve=`M${x1} ${y1} C${channel} ${y1},${channel} ${y2},${x2} ${y2}`}
  else {const sign=a.x<b.x?1:-1;x1+=sign*a.w/2;x2-=sign*b.w/2;curve=`M${x1} ${y1} C${r.width/2} ${y1},${r.width/2} ${y2},${x2} ${y2}`}
  html+=`<path d="${curve}" fill="none" stroke="var(--viz-series-1)" stroke-width="2" ${l.proposed?'stroke-dasharray="5 4"':''}/>`;
 });svg.innerHTML=html;
}
buttons.forEach(b=>b.addEventListener('click',()=>render(Number(b.dataset.theme))));
render(0);new ResizeObserver(draw).observe(root.querySelector('.tb-map'));
})();
