function renderFaculty(){
  const lang=localStorage.getItem('ammrcLang')||'en';
  const root=document.getElementById('faculty-grid');
  if(!root)return;

  // Exact Scopus destinations are kept explicitly instead of being generated
  // from IDs. This avoids silently sending visitors to a wrong/merged profile.
  const scopusLinks={
    'hsieh-chih-tsai':{url:'https://www.scopus.com/authid/detail.uri?authorId=56187150200',label:'Scopus'},
    'juin-yih-lai':{url:'https://www.scopus.com/authid/detail.uri?authorId=26643223500&origin=AuthorProfile',label:'Scopus'},
    'wei-song-hung':{url:'https://www.scopus.com/authid/detail.uri?authorId=22940523500&origin=AuthorProfile',label:'Scopus'},
    'tai-shung-chung':{url:'https://www.scopus.com/authid/detail.uri?authorId=7401571059&origin=AuthorProfile',label:'Scopus'},
    'chien-chieh-hu':{url:'https://www.scopus.com/authid/detail.uri?authorId=7404570650&origin=AuthorProfile',label:'Scopus'},
    'chih-chia-cheng':{url:'https://www.scopus.com/authid/detail.uri?authorId=24466350300&origin=AuthorProfile',label:'Scopus'},
    // 7501900889 belongs to Jyh-Chien Chen, not Jem-Kun Chen. Until the
    // current Jem-Kun Chen Author ID is confirmed, use Scopus author search.
    'jem-kun-chen':{url:'https://www.scopus.com/results/authorNamesList.uri?st1=Chen&st2=Jem-Kun&origin=searchauthorlookup',label:'Scopus Search'},
    'chen-tsyr-lo':{url:'https://www.scopus.com/authid/detail.uri?authorId=57199935961&origin=AuthorProfile',label:'Scopus'}
  };

  root.innerHTML=window.AMMRC_FACULTY.map(f=>{
    const scopus=scopusLinks[f.id]||{url:f.profile,label:'Profile'};
    return `<article class="faculty-card"><img src="${f.photo}" alt="${f.nameEn}"><div class="faculty-card-body"><h3>${lang==='zh'?f.nameZh:f.nameEn}</h3><div class="role">${lang==='zh'?f.titleZh:f.titleEn}</div><div class="muted">${lang==='zh'?f.unitZh:f.unitEn}</div><div class="tags">${(lang==='zh'?f.researchZh:f.researchEn).map(x=>`<span class="tag">${x}</span>`).join('')}</div><div class="actions"><a class="btn" href="${scopus.url}" target="_blank" rel="noopener">${scopus.label}</a><a class="btn light" href="faculty-profile.html?id=${f.id}#publications">${lang==='zh'?'研究著作':'Publications'}</a></div></div></article>`;
  }).join('');
}
document.addEventListener('DOMContentLoaded',renderFaculty);
document.addEventListener('ammrc-language',renderFaculty);
