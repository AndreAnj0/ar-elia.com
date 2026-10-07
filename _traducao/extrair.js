// Extrai de um HTML tudo o que e traduzivel: nos de texto visiveis, atributos
// com texto para humanos, e o conteudo das meta. Ignora <script> e <style>.
// Serve para construir o dicionario sem deixar nada de fora por distraccao.
const fs = require('fs');

const ATRIBUTOS = ['alt', 'title', 'placeholder', 'aria-label', 'value', 'content'];

function extrair(html) {
  const itens = [];
  const visto = new Set();
  const add = (tipo, txt) => {
    txt = txt.trim();
    if (!txt) return;
    if (/^[\s\d\p{P}\p{S}]*$/u.test(txt)) return;      // so numeros/pontuacao
    const chave = tipo + '\u0000' + txt;
    if (visto.has(chave)) return;
    visto.add(chave);
    itens.push({ tipo, txt });
  };

  // tira script e style do caminho
  const limpo = html
    .replace(/<script[\s\S]*?<\/script>/gi, m => '\u0001'.repeat(m.length))
    .replace(/<style[\s\S]*?<\/style>/gi, m => '\u0001'.repeat(m.length))
    .replace(/<!--[\s\S]*?-->/g, m => '\u0001'.repeat(m.length));

  // atributos
  for (const a of ATRIBUTOS) {
    const re = new RegExp('\\b' + a + '="([^"]*)"', 'gi');
    let m;
    while ((m = re.exec(limpo))) {
      if (a === 'content') {
        // so meta com texto real
        const antes = limpo.slice(Math.max(0, m.index - 220), m.index);
        if (!/<meta[^>]*(name|property)="(description|keywords|og:title|og:description|og:site_name|og:locale|twitter:title|twitter:description|author|geo\.placename)"/i.test(antes)) continue;
      }
      add('attr:' + a, m[1]);
    }
  }

  // <title>
  const t = limpo.match(/<title>([\s\S]*?)<\/title>/i);
  if (t) add('title', t[1]);

  // nos de texto
  const corpo = limpo.split(/<body[^>]*>/i)[1] || limpo;
  for (const bruto of corpo.split(/<[^>]*>/)) {
    if (bruto.includes('\u0001')) continue;
    add('texto', bruto.replace(/\s+/g, ' '));
  }

  // JSON-LD: tratado a parte, campos de texto
  const lds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const ld of lds) {
    try {
      const anda = (o) => {
        if (typeof o === 'string') return;
        if (Array.isArray(o)) return o.forEach(anda);
        if (!o || typeof o !== 'object') return;
        for (const [k, v] of Object.entries(o)) {
          if (typeof v === 'string' && ['name', 'description', 'text', 'headline', 'serviceType', 'jobTitle', 'articleSection', 'about', 'keywords'].includes(k)) add('ld:' + k, v);
          else anda(v);
        }
      };
      anda(JSON.parse(ld[1]));
    } catch (e) { console.error('  JSON-LD invalido em bloco', e.message); }
  }

  return itens;
}

const f = process.argv[2];
const itens = extrair(fs.readFileSync(f, 'utf8'));
const palavras = itens.reduce((s, i) => s + i.txt.split(/\s+/).length, 0);
console.error(`${f}: ${itens.length} cadeias, ~${palavras} palavras`);
process.stdout.write(JSON.stringify(itens, null, 1));
