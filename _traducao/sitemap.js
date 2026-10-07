// Reescreve o sitemap com os dois idiomas. Cada <url> declara as suas
// alternativas por xhtml:link -- e assim que o Google liga a pagina PT a
// inglesa em vez de as tratar como duas paginas a competir uma com a outra.
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..');

const PARES = [
  ['', 'en/', '1.0', 'weekly'],
  ['lavandaria-industrial-albufeira.html', 'en/industrial-laundry-albufeira.html', '0.9', 'monthly'],
  ['lavandaria-industrial-vilamoura-quarteira.html', 'en/industrial-laundry-vilamoura-quarteira.html', '0.9', 'monthly'],
  ['lavandaria-industrial-portimao.html', 'en/industrial-laundry-portimao.html', '0.9', 'monthly'],
  ['arelia-roi.html', 'en/roi-calculator.html', '0.8', 'monthly'],
  ['arelia-recursos.html', 'en/resources.html', '0.8', 'weekly'],
  ['artigo-custo-lavandaria-interna.html', 'en/article-in-house-laundry-cost.html', '0.7', 'monthly'],
  ['artigo-5-sinais-lencois-degradacao.html', 'en/article-5-signs-linen-wearing-out.html', '0.7', 'monthly'],
  ['artigo-reduzir-consumo-agua-lavandaria.html', 'en/article-cut-laundry-water-use.html', '0.7', 'monthly'],
  ['equipa.html', 'en/team.html', '0.6', 'monthly'],
  ['privacidade.html', 'en/privacy.html', '0.3', 'yearly'],
  ['termos.html', 'en/terms.html', '0.3', 'yearly'],
];

const B = 'https://ar-elia.com/';
const antigo = fs.readFileSync(path.join(RAIZ, 'sitemap.xml'), 'utf8');
// mantem a data de cada pagina que ja la estava; as novas levam a de hoje
const datas = {};
for (const m of antigo.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) datas[m[1]] = m[2];
const hoje = new Date().toISOString().slice(0, 10);

let out = '<?xml version="1.0" encoding="UTF-8"?>\n';
out += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
out += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const [pt, en, pri, freq] of PARES) {
  const uPt = B + pt, uEn = B + en;
  const alt = `    <xhtml:link rel="alternate" hreflang="pt-PT" href="${uPt}"/>\n` +
              `    <xhtml:link rel="alternate" hreflang="en" href="${uEn}"/>\n` +
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${uPt}"/>\n`;
  for (const u of [uPt, uEn]) {
    out += '  <url>\n';
    out += `    <loc>${u}</loc>\n`;
    out += `    <lastmod>${datas[u] || hoje}</lastmod>\n`;
    out += `    <changefreq>${freq}</changefreq>\n`;
    out += `    <priority>${pri}</priority>\n`;
    out += alt;
    out += '  </url>\n';
  }
}
out += '</urlset>\n';
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), out);
console.log('sitemap: ' + (out.match(/<url>/g) || []).length + ' URLs, ' +
            (out.match(/xhtml:link/g) || []).length + ' alternativas');
