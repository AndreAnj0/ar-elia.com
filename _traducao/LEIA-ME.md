# Como manter o site bilingue

As páginas em `/en/` **não se editam à mão**. São geradas a partir das páginas
portuguesas, para a estrutura, o CSS e o JavaScript não poderem divergir entre
as duas versões. Só o texto muda.

O GitHub Pages corre Jekyll e não publica pastas começadas por `_`, por isso
esta pasta fica no repositório mas não vai para o site.

## Fluxo normal: alterei uma página portuguesa

1. Faz a alteração no ficheiro PT como sempre.
2. Se acrescentaste ou mudaste texto, mete a tradução no dicionário da página
   (`dic-<pagina>.js`), ou em `dic-comum.js` se for texto que aparece em várias.
3. Corre o gerador:

```bash
node _traducao/construir.js
```

Ele reescreve as 12 páginas inglesas, injecta o selector de idioma e o
`hreflang` nas duas versões, e **avisa de todo o texto português que ficou por
traduzir**. Se a última linha não disser `Sem restos de portugues`, falta
alguma coisa.

Para reconstruir só uma página: `node _traducao/construir.js vilamoura`

4. Se mudaste as páginas que existem, actualiza o sitemap:

```bash
node _traducao/sitemap.js
```

## Acrescentei uma página nova

1. Junta o par PT/EN ao array `PAGINAS` em `construir.js` e a `PARES` em
   `sitemap.js`.
2. Cria `dic-<nome>.js`. Para saber que texto tens de traduzir:

```bash
node _traducao/extrair.js pagina-nova.html
```

Isso lista todas as cadeias traduzíveis — texto visível, `alt`, `title`,
`placeholder`, `aria-label`, as `meta` e os campos de texto do JSON-LD.

## Cuidados

- **O gerador pode correr as vezes que forem precisas.** Limpa sempre o que
  injectou antes de voltar a injectar, por isso não duplica nada.
- **As chaves do dicionário têm de ser idênticas ao original**, incluindo
  entidades HTML. Nos artigos o texto está escrito com `&ccedil;`, `&atilde;`
  e companhia — a chave tem de vir assim.
- **Cadeias mais longas são substituídas primeiro**, para uma curta não partir
  uma longa pelo meio. Não é preciso ordenar nada à mão.
- **Topónimos ficam em português** (São João, Três Irmãos, Vale do Lobo). O
  detector já os conhece e não os assinala.
- **As páginas legais inglesas levam automaticamente** a nota a dizer que, em
  caso de divergência, prevalece a versão portuguesa.
- **O formulário inglês envia o assunto marcado com `(EN)`**, para se saber em
  que língua responder ao lead.
