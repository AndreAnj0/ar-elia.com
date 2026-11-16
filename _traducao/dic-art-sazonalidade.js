// Artigo sobre o custo da sazonalidade. Os numeros nao mudam; muda a
// pontuacao decimal e a separacao de milhares, que em pt-PT e espaco.
module.exports = {
  // ── cabeca ──
  'O custo escondido da sazonalidade no Algarve | ARELIA':
    'The hidden cost of Algarve seasonality | ARELIA',
  'Em agosto o volume de rouparia de um hotel do Algarve triplica face a fevereiro. Uma lavandaria interna dimensionada para o pico fica parada o resto do ano. As contas, com as premissas à vista.':
    'In August an Algarve hotel’s linen volume triples against February. An in-house laundry sized for the peak sits idle the rest of the year. The sums, with the assumptions on show.',
  'sazonalidade lavandaria algarve, pico de verao hotel, capacidade lavandaria hotel, lavandaria epoca alta algarve, dimensionar lavandaria hotel':
    'algarve laundry seasonality, hotel summer peak, hotel laundry capacity, high season laundry algarve, sizing a hotel laundry',
  'O custo escondido da sazonalidade no Algarve (e como geri-lo)':
    'The hidden cost of Algarve seasonality (and how to manage it)',

  // ── cabecalho ──
  '>Custos<': '>Costs<',
  'Análise &middot; 9 min': 'Analysis &middot; 9 min',
  'O custo escondido da<br><em>sazonalidade</em> no Algarve':
    'The hidden cost of<br>Algarve <em>seasonality</em>',
  'O Algarve não tem um problema de lavandaria durante dez meses por ano. Tem-no durante cerca de dez semanas. Este artigo é sobre o que essas semanas custam quando se dimensiona uma lavandaria interna para elas, e sobre a escolha que quase ninguém faz a tempo.':
    'The Algarve does not have a laundry problem for ten months of the year. It has one for about ten weeks. This article is about what those weeks cost when you size an in-house laundry for them, and about the choice almost nobody makes in time.',
  '16 novembro 2026': '16 November 2026',
  'Leitura: 9 min': 'Reading time: 9 min',

  // ── introducao ──
  'O Algarve é a região mais sazonal do turismo português. Isso não é novidade para ninguém que cá trabalhe. O que costuma ser novidade é o que a sazonalidade faz a uma <strong>lavandaria</strong>, porque o pico da roupa não é igual ao pico da ocupação, e porque a decisão de dimensionamento é tomada uma vez e paga-se durante dez anos.':
    'The Algarve is the most seasonal region in Portuguese tourism. That is news to nobody who works here. What is usually news is what seasonality does to a <strong>laundry</strong>, because the linen peak is not the occupancy peak, and because the sizing decision is made once and paid for over ten years.',
  'Este artigo faz essas contas. Os números de operação são os mesmos que usamos na nossa <a href="arelia-roi.html">calculadora de ROI</a>, com as premissas à vista. Não são medições da Arelia, são as premissas públicas com que trabalhamos, e estão todas listadas no fim.':
    'This article does those sums. The operating figures are the same ones we use in our <a href="roi-calculator.html">ROI calculator</a>, with the assumptions on show. They are not Arelia measurements, they are the published assumptions we work with, and they are all listed at the end.',

  // ── 01 ──
  'O ponto de partida': 'The starting point',
  'Os dois números que <em>toda a gente confunde</em>': 'The two numbers <em>everyone confuses</em>',
  'Quando se fala de sazonalidade no Algarve, ouvem-se dois números que parecem contradizer-se:':
    'When people talk about Algarve seasonality, two numbers come up that look contradictory:',
  '<strong>"O verão traz mais 30%."</strong> É a ordem de grandeza do acréscimo médio da região nos meses de verão, comparado com a média do ano inteiro.':
    '<strong>“Summer brings 30% more.”</strong> That is the order of magnitude of the region’s average uplift in the summer months, against the average for the whole year.',
  '<strong>"Em agosto o volume triplica."</strong> É a diferença entre o mês de pico e o mês mais fraco, na mesma unidade.':
    '<strong>“In August the volume triples.”</strong> That is the gap between the peak month and the weakest month, at the same property.',
  'Os dois estão certos. Medem coisas diferentes. O primeiro é uma média de médias, e serve para falar da região. O segundo é a distância entre o melhor e o pior mês de um hotel concreto, e é esse que interessa quando se compra uma máquina.':
    'Both are right. They measure different things. The first is an average of averages, and it is useful for talking about the region. The second is the distance between one hotel’s best and worst month, and that is the one that matters when you buy a machine.',
  'Porque é que isto importa': 'Why this matters',
  'Capacidade não se dimensiona pela média. Dimensiona-se pela pior semana. Um hotel que planeie a lavandaria com o número dos 30% vai descobrir em agosto que lhe falta mais de metade da capacidade de que precisa.':
    'Capacity is not sized by the average. It is sized by the worst week. A hotel that plans its laundry around the 30% figure will find in August that it is short of more than half the capacity it needs.',

  // ── 02 ──
  'O efeito multiplicador': 'The multiplier',
  'Porque é que a roupa sobe <em>mais do que a ocupação</em>': 'Why linen rises <em>faster than occupancy</em>',
  'Se a ocupação passa de 40% em fevereiro para 95% em agosto, isso é 2,4 vezes mais quartos ocupados. Mas o volume de roupa não sobe 2,4 vezes. Sobe mais, por três razões que se somam:':
    'If occupancy goes from 40% in February to 95% in August, that is 2.4 times as many occupied rooms. But linen volume does not rise 2.4 times. It rises further, for three reasons that stack:',
  '<strong>Mais roupa por quarto ocupado.</strong> No verão entram toalhas de piscina e de praia, que no inverno simplesmente não existem.':
    '<strong>More linen per occupied room.</strong> Summer brings pool and beach towels, which in winter simply do not exist.',
  '<strong>Estadias mais curtas.</strong> Mais entradas e saídas significam mais mudanças completas de cama por quarto-noite, em vez de mudanças parciais a meio de uma estadia longa.':
    '<strong>Shorter stays.</strong> More arrivals and departures mean more full bed changes per room-night, rather than partial changes midway through a long stay.',
  '<strong>Os outros têxteis acompanham.</strong> Restaurante cheio, esplanada aberta, mais fardamentos em rotação.':
    '<strong>The other textiles follow.</strong> A full restaurant, an open terrace, more uniforms in rotation.',
  'É por isso que uma ocupação que pouco mais que duplica produz um volume de roupa que triplica. Os dois números do capítulo anterior encaixam, e é aqui que encaixam.':
    'That is why occupancy little more than doubling produces linen volume that triples. The two numbers from the previous section fit together, and this is where they fit.',

  // ── 03 ──
  '>A conta<': '>The sums<',
  'Um hotel de <em>50 quartos</em>': 'A <em>50-room</em> hotel',
  'Vamos pôr números. Usamos a mesma premissa da calculadora de ROI: o volume diário é o número de quartos ocupados a multiplicar pela roupa por quarto ocupado. Em fevereiro contamos 5 kg; em agosto contamos 6,5 kg, pelas razões do capítulo anterior.':
    'Let us put numbers to it. We use the same assumption as the ROI calculator: daily volume is occupied rooms multiplied by linen per occupied room. In February we count 5 kg; in August we count 6.5 kg, for the reasons above.',
  '>Fevereiro<': '>February<',
  '>Agosto<': '>August<',
  '>Ocupação<': '>Occupancy<',
  'Quartos ocupados': 'Occupied rooms',
  'Roupa por quarto ocupado': 'Linen per occupied room',
  '<strong>Volume diário</strong>': '<strong>Daily volume</strong>',
  'Operadores necessários': 'Operators needed',
  'a 80 kg por operador e por dia, o ritmo que usamos na calculadora':
    'at 80 kg per operator per day, the pace we use in the calculator',
  'Três vezes o volume. O dobro das pessoas. E, sobretudo, <strong>equipamento capaz de 309 kg por dia</strong> a ser usado a 100 kg durante a maior parte do ano.':
    'Three times the volume. Twice the people. And above all, <strong>equipment capable of 309 kg a day</strong> being used at 100 kg for most of the year.',
  'Uma lavandaria dimensionada para agosto passa cerca de nove meses do ano com <strong>dois terços da capacidade parada</strong>. Essa capacidade foi paga, amortiza-se na mesma, ocupa espaço na mesma e faz manutenção na mesma.':
    'A laundry sized for August spends around nine months of the year with <strong>two thirds of its capacity idle</strong>. That capacity was paid for, it depreciates anyway, it takes up space anyway and it needs maintenance anyway.',

  // ── 04 ──
  '>As opções<': '>The options<',
  'Três saídas, e o que <em>cada uma custa</em>': 'Three ways out, and what <em>each one costs</em>',
  '<strong>Dimensionar para o pico.</strong> Funciona em agosto e é caro nos outros meses. O investimento é feito para uma capacidade que a operação usa a um terço durante três quartos do ano, e a amortização não olha ao calendário.':
    '<strong>Size for the peak.</strong> It works in August and it is expensive in every other month. The investment buys capacity the operation uses at a third for three quarters of the year, and depreciation does not consult the calendar.',
  '<strong>Dimensionar para a média e comprar o excesso.</strong> É a opção que parece prudente e costuma ser a mais cara. Se a sua lavandaria dá 200 kg por dia e o pico pede 309, faltam 109 kg por dia durante cerca de dez semanas. A lavandaria externa de emergência, em pleno agosto, está entre 3,00 € e 4,50 € por quilo:':
    '<strong>Size for the average and buy the excess.</strong> This is the option that looks prudent and usually costs the most. If your laundry handles 200 kg a day and the peak asks for 309, you are short 109 kg a day for around ten weeks. Emergency outside laundry, in the middle of August, runs between €3.00 and €4.50 a kilo:',
  '>Cálculo<': '>Calculation<',
  '>Valor<': '>Value<',
  'Défice diário no pico': 'Daily shortfall at the peak',
  'Dias de pico': 'Days at peak',
  'cerca de dez semanas': 'around ten weeks',
  'Quilos comprados fora': 'Kilos bought outside',
  '<strong>Sobrecusto de uma época</strong>': '<strong>Extra cost for one season</strong>',
  'a 3,00 € e a 4,50 € por quilo': 'at €3.00 and at €4.50 a kilo',
  '<strong>22 890 € a 34 335 €</strong>': '<strong>€22,890 to €34,335</strong>',
  '<strong>Externalizar.</strong> A capacidade de pico passa a ser problema de outra pessoa. Paga por quilo, e o quilo de agosto custa o mesmo que o de fevereiro. É o que fazemos, e é por isso que este artigo existe, mas a conta acima não depende de nos contratar a nós: depende de alguém ter capacidade quando precisa dela.':
    '<strong>Outsource.</strong> Peak capacity becomes someone else’s problem. You pay per kilo, and an August kilo costs the same as a February one. It is what we do, and it is why this article exists, but the sums above do not depend on hiring us: they depend on someone having capacity when you need it.',
  'Onde esta conta não se aplica': 'Where these sums do not apply',
  'Unidades com ocupação estável o ano inteiro, como a hotelaria urbana de Faro, têm um problema diferente: o volume é constante mas é pequeno, e o que trava a lavandaria interna não é o pico, é a escala. Quem tem lavandaria interna há anos, já amortizada e com pessoal próprio, também está noutra posição. Os números acima são para quem está a decidir, não para quem já decidiu há muito.':
    'Properties with steady occupancy all year, such as Faro’s urban hotels, have a different problem: the volume is constant but small, and what blocks an in-house laundry is not the peak, it is the scale. Anyone who has run an in-house laundry for years, already written down and with their own staff, is in another position again. The figures above are for those deciding, not for those who decided long ago.',

  // ── 05 ──
  '>Calendário<': '>Timing<',
  'O erro de tratar disto <em>em julho</em>': 'The mistake of dealing with this <em>in July</em>',
  'Há uma assimetria que vale mais do que todas as contas anteriores: <strong>em agosto, a capacidade da região está comprometida</strong>. Toda. Quem procura lavandaria nessa altura está a procurá-la em emergência, com uma calandra avariada ou um volume que não previu, e negoceia a partir da pior posição possível.':
    'There is one asymmetry worth more than all the sums above: <strong>in August, the region’s capacity is committed</strong>. All of it. Anyone looking for a laundry then is looking in an emergency, with a broken calender or a volume they did not forecast, and negotiating from the worst position available.',
  'O inverno é quando isto se resolve. É quando há capacidade para prometer, quando dá para fazer um teste com volume real antes de haver pressa, e quando um fornecedor consegue planear a sua própria época alta contando consigo.':
    'Winter is when this gets solved. It is when there is capacity to commit, when a trial can run on real volume before anyone is in a hurry, and when a supplier can plan their own high season counting on you.',
  'Dito de forma mais direta: a altura de garantir agosto é agora.':
    'Put more plainly: the time to secure August is now.',

  // ── 06 ──
  '>Prático<': '>Practical<',
  'O que perguntar <em>antes do verão</em>': 'What to ask <em>before summer</em>',
  'A quem já lhe presta serviço, ou a quem esteja a avaliar, estas quatro perguntas separam depressa quem mede de quem improvisa:':
    'Of whoever serves you now, or whoever you are considering, these four questions separate those who measure from those who improvise:',
  '<strong>Qual é a vossa capacidade diária, e quanto dela está comprometida em agosto?</strong> Quem não souber responder com um número não planeou.':
    '<strong>What is your daily capacity, and how much of it is committed in August?</strong> Anyone who cannot answer with a number has not planned.',
  '<strong>O prazo de 24 horas mantém-se em época alta?</strong> E está escrito, ou é intenção?':
    '<strong>Does the 24-hour turnaround hold in high season?</strong> And is it written down, or is it an intention?',
  '<strong>O que acontece se uma máquina vossa avariar em agosto?</strong> A resposta mostra se há plano B ou se o plano B é o cliente.':
    '<strong>What happens if one of your machines fails in August?</strong> The answer shows whether there is a plan B, or whether the plan B is the client.',
  '<strong>Se o meu volume subir 40% acima do previsto, absorvem?</strong> Em que prazo e a que preço.':
    '<strong>If my volume runs 40% above forecast, can you absorb it?</strong> In what time and at what price.',
  'Nenhuma destas perguntas é sobre preço por quilo. Todas são sobre o que acontece na pior semana do ano, que é a única altura em que a lavandaria se torna um problema de gestão em vez de uma rubrica de custo.':
    'None of these questions is about price per kilo. All of them are about what happens in the worst week of the year, which is the only time a laundry becomes a management problem rather than a cost line.',

  // ── CTA ──
  'Faça as contas da sua unidade': 'Run the sums for your own property',
  'A calculadora de ROI usa as mesmas premissas deste artigo e deixa-o mudar a ocupação, a roupa por quarto e o custo por hora.':
    'The ROI calculator uses the same assumptions as this article and lets you change occupancy, linen per room and cost per hour.',
  'Abrir a calculadora de ROI': 'Open the ROI calculator',
  'Falar connosco': 'Talk to us',

  // ── 07 ──
  '>Transparência<': '>Transparency<',
  'De onde vêm <em>estes números</em>': 'Where <em>these numbers</em> come from',
  'Nenhum valor deste artigo é uma medição da Arelia, e nenhum é uma estatística oficial citada com falsa precisão. São premissas de trabalho e ordens de grandeza, e ficam aqui para poder discuti-las:':
    'No figure in this article is an Arelia measurement, and none is an official statistic quoted with false precision. They are working assumptions and orders of magnitude, and they are set out here so you can argue with them:',
  '<strong>80 kg por operador e por dia</strong> e <strong>5 kg de roupa por quarto ocupado</strong> — premissas da nossa <a href="arelia-roi.html">calculadora de ROI</a>, onde estão publicadas e podem ser alteradas.':
    '<strong>80 kg per operator per day</strong> and <strong>5 kg of linen per occupied room</strong> — assumptions from our <a href="roi-calculator.html">ROI calculator</a>, where they are published and can be changed.',
  '<strong>6,5 kg por quarto ocupado em agosto</strong> — a mesma premissa com o acréscimo de verão descrito no capítulo 02. É uma estimativa nossa, não uma medição, e o valor real varia com o tipo de unidade.':
    '<strong>6.5 kg per occupied room in August</strong> — the same assumption with the summer uplift described in section 02. It is our estimate, not a measurement, and the real figure varies with the type of property.',
  '<strong>3,00 € a 4,50 € por quilo em emergência</strong> — a faixa que já usamos no artigo sobre <a href="artigo-custo-lavandaria-interna.html">o custo de uma lavandaria interna</a>.':
    '<strong>€3.00 to €4.50 a kilo in an emergency</strong> — the range we already use in the article on <a href="article-in-house-laundry-cost.html">what an in-house laundry costs</a>.',
  '<strong>Ocupação de 40% e 95%</strong> — valores ilustrativos para um hotel de lazer do litoral algarvio. A sua unidade tem os seus, e é com esses que a conta deve ser feita.':
    '<strong>Occupancy of 40% and 95%</strong> — illustrative values for a leisure hotel on the Algarve coast. Your property has its own, and those are the ones the sums should use.',
  '<strong>A sazonalidade da região</strong> — o Algarve é a região mais sazonal do turismo português, com a procura concentrada nos meses de verão. Os valores mensais oficiais são publicados pelo <a href="https://www.ine.pt" target="_blank" rel="noopener">INE</a> nas estatísticas de atividade turística.':
    '<strong>The region’s seasonality</strong> — the Algarve is the most seasonal region in Portuguese tourism, with demand concentrated in the summer months. The official monthly figures are published by <a href="https://www.ine.pt" target="_blank" rel="noopener">Statistics Portugal (INE)</a> in its tourism activity releases.',
  'Se alguma destas premissas não corresponder à sua operação, a conta muda, e é por isso que estão todas à vista em vez de escondidas num resultado final.':
    'If any of these assumptions does not match your operation, the sums change, and that is why they are all on show instead of hidden inside a final number.',

  // ── relacionados ──
  'Como reduzir o consumo de água da sua lavandaria em 35%':
    'Cutting your laundry’s water use by 35%',
  'Quanta água gasta uma lavandaria por quilo, onde se perde e que medidas cortam mais.':
    'How much water a laundry uses per kilo, where it is lost and which measures cut most.',
  "Compare em dois minutos o custo interno com o de externalizar, com as premissas &agrave; vista.":
    "Compare the in-house cost against outsourcing in two minutes, with the assumptions on show.",
};
