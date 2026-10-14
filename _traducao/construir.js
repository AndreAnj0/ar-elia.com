// Gera as paginas /en/ a partir das portuguesas e injecta o seletor de idioma
// nas duas versoes. As paginas EN sao ficheiros reais com URL proprio -- e o
// unico modo de o Google indexar e classificar a versao inglesa.
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const EN = path.join(RAIZ, 'en');
const SP = __dirname;

// pt -> en. O slug ingles conta para ranking, por isso nao se repete o portugues.
const PAGINAS = [
  { pt: 'index.html',                                     en: 'index.html',                                dic: 'index' },
  { pt: 'equipa.html',                                    en: 'team.html',                                 dic: 'equipa' },
  { pt: 'sobre.html',                                        en: 'about.html',                                dic: 'sobre' },
  { pt: 'arelia-roi.html',                                en: 'roi-calculator.html',                       dic: 'roi' },
  { pt: 'arelia-recursos.html',                           en: 'resources.html',                            dic: 'recursos' },
  { pt: 'lavandaria-industrial-albufeira.html',           en: 'industrial-laundry-albufeira.html',         dic: 'albufeira' },
  { pt: 'lavandaria-industrial-vilamoura-quarteira.html', en: 'industrial-laundry-vilamoura-quarteira.html', dic: 'vilamoura' },
  { pt: 'lavandaria-industrial-portimao.html',            en: 'industrial-laundry-portimao.html',          dic: 'portimao' },
  { pt: 'lavandaria-industrial-lagos.html',                 en: 'industrial-laundry-lagos.html',             dic: 'lagos' },
  { pt: 'lavandaria-industrial-faro.html',                  en: 'industrial-laundry-faro.html',              dic: 'faro' },
  { pt: 'lavandaria-industrial-loule.html',                 en: 'industrial-laundry-loule.html',             dic: 'loule' },
  { pt: 'lavandaria-industrial-lagoa-carvoeiro.html',       en: 'industrial-laundry-lagoa-carvoeiro.html',   dic: 'lagoa' },
  { pt: 'artigo-custo-lavandaria-interna.html',           en: 'article-in-house-laundry-cost.html',        dic: 'art-custo' },
  { pt: 'artigo-5-sinais-lencois-degradacao.html',        en: 'article-5-signs-linen-wearing-out.html',    dic: 'art-lencois' },
  { pt: 'artigo-reduzir-consumo-agua-lavandaria.html',    en: 'article-cut-laundry-water-use.html',        dic: 'art-agua' },
  { pt: 'privacidade.html',                               en: 'privacy.html',                              dic: 'privacidade' },
  { pt: 'termos.html',                                    en: 'terms.html',                                dic: 'termos' },
];
const MAPA = Object.fromEntries(PAGINAS.map(p => [p.pt, p.en]));

// ── seletor de idioma ────────────────────────────────────────────────────────
// Marcadores explicitos: a remocao tem de apanhar o bloco inteiro. Sem eles,
// uma expressao que procure o ultimo seletor para no primeiro que lhe pareca
// igual (".mobile-drawer .lang-switch a.lang-opt {" aparece duas vezes) e
// deixa metade do CSS para tras.
const CSS_INICIO = '/* lang-switch:inicio */';
const CSS_FIM = '/* lang-switch:fim */';
const CSS_SELETOR = `
${CSS_INICIO}
/* ── SELETOR DE IDIOMA ── */
.lang-switch { display:flex; align-items:center; gap:5px; }
.nav-links .lang-switch a.lang-opt,
.mobile-drawer .lang-switch a.lang-opt {
  font-family:'Space Grotesk',sans-serif;
  font-size:10.5px; font-weight:600; letter-spacing:1.8px;
  text-transform:uppercase; text-decoration:none;
  color:rgba(244,240,230,0.45); opacity:1;
  padding:3px 1px; border:0; border-bottom:1px solid transparent;
  transition:color .25s, border-color .25s;
}
.nav-links .lang-switch a.lang-opt:hover,
.mobile-drawer .lang-switch a.lang-opt:hover { color:var(--gold); }
.nav-links .lang-switch a.lang-opt[aria-current],
.mobile-drawer .lang-switch a.lang-opt[aria-current] {
  color:var(--gold); border-bottom-color:rgba(196,168,106,0.55);
}
.lang-sep { color:rgba(244,240,230,0.22); font-size:10px; line-height:1; }
.mobile-drawer .lang-switch { gap:8px; padding:10px 0 2px; }
.mobile-drawer .lang-switch a.lang-opt { font-size:13px; letter-spacing:2.4px; padding:6px 0; }
${CSS_FIM}
`;

function seletor(lang, hrefPt, hrefEn, movel) {
  const op = (code, href, ativo) =>
    `<a class="lang-opt" href="${href}" hreflang="${code.toLowerCase()}" lang="${code.toLowerCase()}"` +
    (ativo ? ' aria-current="true"' : '') + `>${code.toUpperCase()}</a>`;
  return `<div class="lang-switch${movel ? ' lang-switch-mobile' : ''}" role="group" aria-label="${lang === 'en' ? 'Language' : 'Idioma'}">` +
    op('pt', hrefPt, lang === 'pt') +
    `<span class="lang-sep" aria-hidden="true">/</span>` +
    op('en', hrefEn, lang === 'en') +
    `</div>`;
}

// O construtor tem de poder correr vezes sem conta sobre o mesmo ficheiro. Tudo
// o que ele proprio injecta sai primeiro, senao a segunda passagem duplica o
// hreflang e o seletor -- e o seletor herdado do PT fica com o PT marcado como
// idioma actual numa pagina inglesa.
// ── botao flutuante de WhatsApp ──────────────────────────────────────────────
// Governantas e gestores de alojamento local respondem no WhatsApp e nao no
// email. O botao e injectado aqui, e nao escrito a mao, para nao haver 24
// copias para manter.
const WA_INICIO = '/* wa-fab:inicio */';
const WA_FIM = '/* wa-fab:fim */';
const WA_NUMERO = '351925263365';
const WA_CSS = `
${WA_INICIO}
.wa-fab {
  position: fixed; z-index: 9998;
  right: 24px; bottom: 24px;
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 20px 14px 16px;
  background: #25D366; color: #0B141A;
  border-radius: 999px; text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: .6px;
  box-shadow: 0 10px 30px -8px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.08);
  transition: transform .25s, box-shadow .25s, opacity .25s;
}
.wa-fab:hover { transform: translateY(-2px); box-shadow: 0 16px 36px -10px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.14); }
.wa-fab:focus-visible { outline: 3px solid var(--gold, #C4A86A); outline-offset: 3px; }
.wa-fab svg { width: 22px; height: 22px; fill: currentColor; flex-shrink: 0; }
/* O banner de cookies ocupa o fundo do ecra e taparia o botao no telemovel.
   Enquanto estiver a vista, o botao sai da frente: e um passo unico. */
body:has(.arelia-cb.visible) .wa-fab { opacity: 0; pointer-events: none; transform: translateY(10px); }
@media (max-width: 640px) {
  .wa-fab { right: 16px; bottom: 16px; padding: 14px; gap: 0; }
  .wa-fab .wa-fab-text { display: none; }
}
@media (prefers-reduced-motion: reduce) { .wa-fab { transition: none; } }
${WA_FIM}
`;

function fabWhatsApp(lang) {
  const en = lang === 'en';
  const msg = en
    ? 'Hello! I would like to ask for a quote for my property.'
    : 'Olá! Gostaria de pedir uma proposta para a minha unidade.';
  const rotulo = en ? 'Talk to us on WhatsApp' : 'Falar connosco no WhatsApp';
  const href = `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(msg)}`;
  return `<a class="wa-fab" href="${href}" target="_blank" rel="noopener"` +
    ` aria-label="${rotulo}" data-wa` +
    ` onclick="try{if(typeof gtag==='function')gtag('event','whatsapp_click',{link_url:this.href});}catch(e){}">` +
    `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41"/></svg>` +
    `<span class="wa-fab-text">WhatsApp</span></a>`;
}

function limpar(html) {
  html = html
    .replace(/\n?<link rel="alternate" hreflang="[^"]*" href="[^"]*"\/?>/g, '')
    .replace(/\s*<div class="lang-switch[^"]*"[\s\S]*?<\/div>/g, '');
  // CSS: entre marcadores, sempre do inicio ao fim, nunca por semelhanca
  for (;;) {
    const i = html.indexOf(CSS_INICIO);
    if (i === -1) break;
    const j = html.indexOf(CSS_FIM, i);
    if (j === -1) throw new Error('marcador de fim do CSS em falta — ficheiro corrompido');
    html = html.slice(0, i).replace(/\n+$/, '\n') + html.slice(j + CSS_FIM.length).replace(/^\n+/, '');
  }
  // o mesmo para o botao de WhatsApp: CSS entre marcadores, e o <a> inteiro
  for (;;) {
    const i = html.indexOf(WA_INICIO);
    if (i === -1) break;
    const j = html.indexOf(WA_FIM, i);
    if (j === -1) throw new Error('marcador de fim do CSS do WhatsApp em falta');
    html = html.slice(0, i).replace(/\n+$/, '\n') + html.slice(j + WA_FIM.length).replace(/^\n+/, '');
  }
  html = html.replace(/\s*<a class="wa-fab"[\s\S]*?<\/a>/g, '');
  return html;
}

function injetar(html, lang, hrefPt, hrefEn) {
  // CSS: antes do fecho do primeiro <style> (o bloco principal da pagina)
  if (!html.includes(CSS_INICIO)) {
    const i = html.indexOf('</style>');
    if (i === -1) throw new Error('sem <style> onde por o CSS do seletor');
    html = html.slice(0, i) + CSS_SELETOR + html.slice(i);
  }
  // nav: antes do botao/link de proposta
  html = html.replace(/(\n\s*)(<(?:button|a) class="btn-nav")/,
    (m, esp, tag) => esp + seletor(lang, hrefPt, hrefEn, false) + esp + tag);
  // drawer: no fim do bloco
  html = html.replace(/(<div class="mobile-drawer"[\s\S]*?)(\n<\/div>)/,
    (m, corpo, fecho) => corpo + '\n  ' + seletor(lang, hrefPt, hrefEn, true) + fecho);

  // WhatsApp: CSS no mesmo <style>, botao mesmo antes de </body>
  if (!html.includes(WA_INICIO)) {
    const i = html.indexOf('</style>');
    if (i === -1) throw new Error('sem <style> onde por o CSS do WhatsApp');
    html = html.slice(0, i) + WA_CSS + html.slice(i);
  }
  if (!html.includes('class="wa-fab"')) {
    const b = html.lastIndexOf('</body>');
    if (b === -1) throw new Error('sem </body> onde por o botao de WhatsApp');
    html = html.slice(0, b) + fabWhatsApp(lang) + '\n' + html.slice(b);
  }
  return html;
}

// ── traducao ─────────────────────────────────────────────────────────────────
// Uma chave curta pode dar match DENTRO de texto que ja foi traduzido: a chave
// "Interna" acertou em "Inter|national" e deixou "In-housetional analysis".
// Ordenar por tamanho protege a origem, nao a saida -- dai este aviso.
function chavesPerigosas(dic) {
  const maus = [];
  for (const k of Object.keys(dic)) {
    if (k === dic[k] || /[<>]/.test(k) || k.length > 14) continue;
    for (const [k2, v2] of Object.entries(dic)) {
      if (k2 !== k && v2.includes(k)) { maus.push(k); break; }
    }
  }
  return maus;
}

function traduzir(html, dicionarios) {
  const juntos = Object.assign({}, ...dicionarios);
  const maus = chavesPerigosas(juntos);
  if (maus.length) console.log('    AVISO: chaves que podem comer texto ja traduzido — ancore-as em markup: ' +
    maus.map(s => JSON.stringify(s)).join(', '));
  // mais longas primeiro, senao uma cadeia curta parte uma longa pelo meio
  const chaves = Object.keys(juntos).sort((a, b) => b.length - a.length);
  const usadas = new Set();
  for (const pt of chaves) {
    if (pt === juntos[pt]) continue;
    if (html.includes(pt)) { usadas.add(pt); html = html.split(pt).join(juntos[pt]); }
  }
  return { html, usadas, total: chaves.length };
}

// ── reescrita de caminhos e metadados ────────────────────────────────────────
function paraEn(html, pag) {
  // ficheiros estao em /en/, os recursos ficam na raiz
  html = html.replace(/\b(src|href|poster|data-src)="(img\/)/g, '$1="../$2');
  html = html.replace(/url\('img\//g, "url('../img/");
  html = html.replace(/url\("img\//g, 'url("../img/');

  // ligacoes internas -> slugs ingleses
  for (const [pt, en] of Object.entries(MAPA)) {
    html = html.split('href="' + pt).join('href="' + en);
    html = html.split("location.href='" + pt).join("location.href='" + en);
  }

  const urlEn = 'https://ar-elia.com/en/' + (pag.en === 'index.html' ? '' : pag.en);
  const urlPt = 'https://ar-elia.com/' + (pag.pt === 'index.html' ? '' : pag.pt);

  html = html.replace('<html lang="pt"', '<html lang="en"');
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${urlEn}"/>`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${urlEn}$2`);
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(")/, '$1en_GB$2');
  html = html.replace(/(<meta name="language" content=")[^"]*(")/, '$1English$2');

  // JSON-LD: idioma e URL da propria pagina. Tem de ser ANTES do hreflang --
  // na homepage o urlPt e "https://ar-elia.com/", que casaria com o href do
  // proprio link alternate e mandava o PT apontar para o EN.
  html = html.split('"inLanguage":"pt-PT"').join('"inLanguage":"en"');
  html = html.split('"' + urlPt + '"').join('"' + urlEn + '"');

  // hreflang: cada pagina aponta para si e para a irma, com x-default no PT
  const alt = `\n<link rel="alternate" hreflang="pt-PT" href="${urlPt}"/>` +
              `\n<link rel="alternate" hreflang="en" href="${urlEn}"/>` +
              `\n<link rel="alternate" hreflang="x-default" href="${urlPt}"/>`;
  html = html.replace(/(<link rel="canonical"[^>]*>)/, '$1' + alt);

  // Formato monetario britanico: o PT escreve "€ 18 000" e "€ 0,17"; o ingles
  // escreve "€18,000" e "€0.17". Sem isto a mesma pagina mistura os dois.
  html = html.replace(/€(?:&nbsp;|\s)+/g, '€');
  html = html.replace(/€(\d{1,3}),(\d{2})\b(?!\d)/g, '€$1.$2');

  // Paginas legais: a traducao e de cortesia. Em caso de divergencia o que
  // vincula e o original portugues, e isso tem de estar escrito na propria
  // pagina -- senao cria-se ambiguidade sobre qual das versoes vale.
  if (pag.en === 'privacy.html' || pag.en === 'terms.html') {
    const nota = `\n  <p class="legal-meta" style="margin-top:10px;opacity:.75;font-size:13px;line-height:1.6">` +
      `This is a courtesy translation. In the event of any discrepancy, the ` +
      `<a href="${urlPt}" hreflang="pt-PT" lang="pt" style="color:var(--gold-dark);text-decoration:none;border-bottom:1px solid rgba(168,135,42,.4)">Portuguese version</a> prevails.</p>`;
    html = html.replace(/(<p class="legal-meta">Last updated:[^<]*<\/p>)/, '$1' + nota);
  }

  return injetar(html, 'en', '/' + (pag.pt === 'index.html' ? '' : pag.pt), '/en/' + (pag.en === 'index.html' ? '' : pag.en));
}

// ── deteccao de portugues esquecido ──────────────────────────────────────────
const MARCAS = /\b(não|são|está|também|após|até|você|nós|isso|para|pelo|pela|uma|dos|das|com|que|seu|sua|mais|como|quando|onde|porque|então|cada|entre|sobre|sem|pode|tem|foi|ser|ter|fazer|lavandaria|rouparia|lençóis|hotéis|serviço|preço|custo|água|empresa|cliente|qualidade|recolha|entrega|equipa|obrigado|aqui|ainda|já|muito|todo|toda|nosso|nossa|Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro|Leitura|sábado|domingo|têxtil|têxteis|operação|custos|sazonalidade|ferramenta|cobertura|poupança|pessoal|energia|manutenção|sustentabilidade|conselho|clientes|fornecedores|parceiros|servicos|serviços|início|inicio|contacto|artigos|guias|zona|região|regiao|apelido|amarelado|calandra|operada|processado|subscrever|personalizado|consultoria|comercial|conectar|consumo|temperatura|valor|transparência|destaque|mensal|telefone|morada|documento)\b/giu;
// Só entram aqui palavras que NÃO existem em inglês. Já aqui estiveram
// "volume", "legal", "board" e "newsletter", que se escrevem igual nas duas
// línguas: enchiam o relatório de falsos positivos e tornavam-no inútil.
// Esta lista é só a primeira rede. A que não tem pontos cegos é comparar o
// texto PT com o EN e ver o que ficou igual — ver LEIA-ME.md.

// URLs, emails e nomes de ficheiro dao falsos positivos (".com" casa com "com",
// "lavandaria-hero.png" casa com "lavandaria"): saem antes da analise.
const TOPONIMOS = /(Areias de São João|Praia dos Três Irmãos|Vale do Lobo|Quinta do Lago|Olhos de Água|Praia da Falésia|Santa Eulália|Armação de Pêra|São João|Três Irmãos|Lanka Park|Tavagueira)/g;
const semUrls = s => s.replace(TOPONIMOS, ' ')
  .replace(/https?:\/\/\S+/g, ' ')
  .replace(/\b[\w.+-]+@[\w.-]+\b/g, ' ')
  .replace(/\b[\w-]+\.(png|jpe?g|webp|svg|mp4|html|css|js|xml|txt|ico)\b/gi, ' ');

function sobrasPortuguesas(html) {
  const corpo = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
  const achados = [];
  // texto visivel
  for (const t of (corpo.split(/<body[^>]*>/i)[1] || '').split(/<[^>]*>/)) {
    const s = semUrls(t.replace(/\s+/g, ' ').trim());
    if (!s.trim()) continue;
    const m = s.match(MARCAS);
    if (m) achados.push({ onde: 'texto', amostra: s.slice(0, 110), palavras: [...new Set(m)].slice(0, 5) });
  }
  // atributos visiveis e meta
  for (const a of ['alt', 'title', 'placeholder', 'aria-label', 'content']) {
    const re = new RegExp('\\b' + a + '="([^"]*)"', 'gi');
    let m;
    while ((m = re.exec(corpo))) {
      const hit = semUrls(m[1]).match(MARCAS);
      if (hit) achados.push({ onde: a, amostra: m[1].slice(0, 110), palavras: [...new Set(hit)].slice(0, 5) });
    }
  }
  return achados;
}

// ── execucao ─────────────────────────────────────────────────────────────────
const alvo = process.argv.slice(2);
const comum = require('./dic-comum.js');
fs.mkdirSync(EN, { recursive: true });

let erros = 0;
for (const pag of PAGINAS) {
  if (alvo.length && !alvo.includes(pag.dic)) continue;
  let dicPag;
  try { dicPag = require('./dic-' + pag.dic + '.js'); }
  catch (e) { console.log(`· ${pag.pt.padEnd(46)} SEM DICIONARIO (dic-${pag.dic}.js) — saltada`); continue; }

  const origem = limpar(fs.readFileSync(path.join(RAIZ, pag.pt), 'utf8'));
  const { html: traduzido, usadas } = traduzir(origem, [comum, dicPag]);
  const final = paraEn(traduzido, pag);
  fs.writeFileSync(path.join(EN, pag.en), final);

  const sobras = sobrasPortuguesas(final);
  const naoUsadas = Object.keys(Object.assign({}, comum, dicPag)).filter(k => !usadas.has(k) && k !== Object.assign({}, comum, dicPag)[k]);
  console.log(`✓ en/${pag.en}`);
  console.log(`    ${usadas.size} cadeias traduzidas · ${sobras.length} restos de portugues`);
  if (sobras.length) {
    erros += sobras.length;
    for (const s of sobras.slice(0, 14)) console.log(`      [${s.onde}] ${s.amostra}   <<${s.palavras.join(',')}>>`);
    if (sobras.length > 14) console.log(`      … e mais ${sobras.length - 14}`);
  }
  // so interessa avisar das especificas da pagina; as comuns nao estao em todas
  const faltaPag = Object.keys(dicPag).filter(k => !usadas.has(k) && k !== dicPag[k]);
  if (faltaPag.length) console.log(`    AVISO: ${faltaPag.length} entradas do dicionario nao casaram: ${faltaPag.slice(0, 6).map(s => JSON.stringify(s.slice(0, 48))).join(', ')}`);
}

// seletor nas paginas PT cuja irma EN ja existe
console.log('\n— seletor nas paginas PT —');
for (const pag of PAGINAS) {
  if (!fs.existsSync(path.join(EN, pag.en))) continue;
  const f = path.join(RAIZ, pag.pt);
  const antes = fs.readFileSync(f, 'utf8');
  let h = limpar(antes);
  const urlEn = 'https://ar-elia.com/en/' + (pag.en === 'index.html' ? '' : pag.en);
  const urlPt = 'https://ar-elia.com/' + (pag.pt === 'index.html' ? '' : pag.pt);
  h = h.replace(/(<link rel="canonical"[^>]*>)/, '$1' +
    `\n<link rel="alternate" hreflang="pt-PT" href="${urlPt}"/>` +
    `\n<link rel="alternate" hreflang="en" href="${urlEn}"/>` +
    `\n<link rel="alternate" hreflang="x-default" href="${urlPt}"/>`);
  h = injetar(h, 'pt', '/' + (pag.pt === 'index.html' ? '' : pag.pt), '/en/' + (pag.en === 'index.html' ? '' : pag.en));
  if (h !== antes) { fs.writeFileSync(f, h); console.log('  ✓ ' + pag.pt); }
  else console.log('  · ' + pag.pt + ' (ja tinha)');
}

// O 404 nao esta em PAGINAS porque nao tem irma inglesa -- o GitHub Pages serve
// este mesmo ficheiro para os 404 de /en/, e por isso a pagina e bilingue. Nao
// leva seletor de idioma (nao ha para onde trocar), mas leva o botao de
// WhatsApp: quem cai aqui esta perdido e e quem mais precisa de falar connosco.
{
  const f = path.join(RAIZ, '404.html');
  if (fs.existsSync(f)) {
    const antes = fs.readFileSync(f, 'utf8');
    let h = limpar(antes);
    if (!h.includes(WA_INICIO)) {
      const i = h.indexOf('</style>');
      if (i !== -1) h = h.slice(0, i) + WA_CSS + h.slice(i);
    }
    if (!h.includes('class="wa-fab"')) {
      const b = h.lastIndexOf('</body>');
      if (b !== -1) h = h.slice(0, b) + fabWhatsApp('pt') + '\n' + h.slice(b);
    }
    if (h !== antes) { fs.writeFileSync(f, h); console.log('  ✓ 404.html (só WhatsApp)'); }
    else console.log('  · 404.html (ja tinha)');
  }
}

console.log(erros ? `\nFALTA TRADUZIR: ${erros} ocorrencias` : '\nSem restos de portugues.');
