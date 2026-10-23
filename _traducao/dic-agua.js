// Calculadora de agua. Alem do texto visivel ha rotulos construidos em JS
// (a percentagem de reducao, o "sem ganho estimado") que tambem tem de passar
// a ingles, e o separador de milhares, que em pt-PT e espaco e em en-GB e
// virgula.
module.exports = {
  // ── formato de numeros ──
  "toLocaleString('pt-PT', { minimumFractionDigits: casas || 0, maximumFractionDigits: casas || 0 })":
    "toLocaleString('en-GB', { minimumFractionDigits: casas || 0, maximumFractionDigits: casas || 0 })",
  "parseFloat(v).toLocaleString('pt-PT')":
    "parseFloat(v).toLocaleString('en-GB')",
  "parseFloat(v).toString().replace('.', ',')":
    "parseFloat(v).toString()",
  "parseFloat(v).toFixed(2).replace('.', ',')":
    "parseFloat(v).toFixed(2)",

  // ── cabeca ──
  'Calculadora de água na lavandaria hoteleira | ARELIA':
    'Hotel laundry water calculator | ARELIA',
  'Estime litros e euros da lavandaria do seu hotel e veja o impacto de reduzir 35% no consumo de água. Sem registo.':
    'Estimate the litres and the euros your hotel laundry uses, and see what cutting water use by 35% would be worth. No sign-up.',
  'calculadora agua lavandaria, consumo de agua lavandaria hotel, litros por quilo lavandaria, poupar agua hotel algarve':
    'laundry water calculator, hotel laundry water use, litres per kilo laundry, save water hotel algarve',

  // ── cabecalho ──
  'Calculadora gratuita': 'Free calculator',
  'Quanta água gasta<br>a sua <em>lavandaria?</em>':
    'How much water does<br>your <em>laundry use?</em>',
  'Estime litros e euros por mês e veja o impacto de reduzir 35% no consumo. Sem registo, sem compromissos.':
    'Estimate litres and euros per month, and see what cutting use by 35% would be worth. No sign-up, no commitment.',

  // ── campos ──
  'A sua operação': 'Your operation',
  'Ajuste os valores para o seu negócio. A simulação atualiza em tempo real.':
    'Adjust the values to match your business. The simulation updates as you go.',
  'Roupa processada por dia': 'Linen processed per day',
  'Um hotel de cerca de 50 quartos a 65% de ocupação processa perto de <b>150 kg por dia</b>, a premissa usada no artigo.':
    'A hotel of around 50 rooms at 65% occupancy processes close to <b>150 kg a day</b>, the assumption used in the article.',
  'Litros por quilo, hoje': 'Litres per kilo, today',
  'Faixas de referência: <b>17 a 22</b> máquina industrial sem conservação, <b>12 a 15</b> com reaproveitamento do enxaguamento, <b>7,5 a 12</b> túnel contínuo, <b>1,5 a 4,5</b> túnel com reciclagem.':
    'Reference bands: <b>17 to 22</b> industrial washer with no conservation measures, <b>12 to 15</b> with rinse water reuse, <b>7.5 to 12</b> continuous tunnel, <b>1.5 to 4.5</b> tunnel with recycling.',
  'Preço da água mais saneamento': 'Price of water plus sewerage',
  'Use a tarifa da sua fatura, somando água e saneamento.':
    'Use the rate on your own bill, water plus sewerage.',
  'Dias de operação por ano': 'Operating days per year',
  'Escolha 300 ou 330 se a unidade fecha fora de época.':
    'Pick 300 or 330 if the property closes out of season.',

  // ── resultado ──
  'Resultado': 'Result',
  'O consumo da sua lavandaria': 'What your laundry uses',
  'Estimativa de água e de custo, a partir dos valores que escolheu e das faixas de referência do sector.':
    'An estimate of water and cost, from the values you chose and the reference bands for the sector.',
  'Os 35% aplicam-se sobretudo a operações sem medidas de conservação. Se já estiver abaixo de cerca de 12 a 15 L/kg, o ganho real será menor, e o cenário ao lado passa a ser apenas ilustrativo.':
    'The 35% applies mostly to operations with no conservation measures in place. If you are already below roughly 12 to 15 L/kg the real gain will be smaller, and the scenario beside this one becomes illustrative only.',
  '>Hoje<': '>Today<',
  // Ancorado ao span seguinte: "Com" sozinho e curto de mais e apanharia
  // "Como" e qualquer outra palavra que comece por Com.
  '>Com <span id="out-reducao">': '>With <span id="out-reducao">',
  'sem ganho estimado': 'no gain estimated',
  '>m³ / mês<': '>m³ / month<',
  '>m³ / ano<': '>m³ / year<',
  '>€ / mês<': '>€ / month<',
  '>€ / ano<': '>€ / year<',
  'Poupança estimada': 'Estimated saving',
  '>m³/ano<': '>m³/year<',
  'Menos na fatura da água': 'Off the water bill',
  '35% é passar de cerca de 20 L/kg para cerca de 13 L/kg, com reaproveitamento do enxaguamento e disciplina de carga. São as referências do artigo, não medições da Arelia.':
    '35% means going from around 20 L/kg to around 13 L/kg, through rinse water reuse and disciplined loading. These are the article’s reference figures, not Arelia measurements.',
  'Receber proposta personalizada →': 'Get a tailored quote →',

  // ── como calculamos ──
  // O mesmo titulo da calculadora de ROI, para as duas paginas lerem igual.
  'Como <em>calculamos.</em>': 'How we <em>work it out.</em>',
  'A simulação assenta em referências públicas do sector, não em medições da Arelia. Aqui ficam as premissas, para poder julgá-las.':
    'The simulation rests on public reference figures for the sector, not on Arelia measurements. Here are the assumptions, so you can judge them.',
  'A métrica certa': 'The right metric',
  'Litros de água por quilo de roupa processada. Medir em m³ por mês não permite comparar nada: o volume sobe em agosto e desce em fevereiro por razões que nada têm a ver com eficiência.':
    'Litres of water per kilo of linen processed. Measuring in m³ per month compares nothing: volume rises in August and falls in February for reasons that have nothing to do with efficiency.',
  'Onde a água se gasta': 'Where the water goes',
  '90 a 92%': '90 to 92%',
  'Parte do consumo que está no processo de lavagem. A produção de vapor fica pelos 5 a 8% e os usos auxiliares pelos 2 a 3%. Medidas fora da máquina mexem, no máximo, em 10% do total.':
    'The share of consumption that sits in the wash process itself. Steam generation accounts for 5 to 8% and ancillary uses for 2 to 3%. Measures outside the machine move 10% of the total at most.',
  'De onde vêm os 35%': 'Where the 35% comes from',
  'É o meio das duas primeiras linhas da tabela abaixo. Uma operação sem medidas de conservação que passe a reaproveitar a água do último enxaguamento corta exatamente esse valor. Quem já está abaixo de 15 L/kg tem bastante menos margem.':
    'It is the midpoint of the first two rows of the table below. An operation with no conservation measures that starts reusing the final rinse water cuts exactly that much. Anyone already below 15 L/kg has considerably less room.',
  'Custo da água': 'Cost of water',
  'Tarifa sua': 'Your own rate',
  'O euro por metro cúbico sai inteiramente do valor que escolheu, somando água e saneamento. Não assumimos nenhuma tarifa média, porque variam muito entre concelhos do Algarve.':
    'The euro per cubic metre comes entirely from the value you chose, water plus sewerage. We assume no average rate, because they vary widely between Algarve municipalities.',
  'Fontes': 'Sources',
  'Públicas': 'Public',
  'Faixas de L/kg e repartição do consumo a partir de referências públicas para lavandarias comerciais. Nenhum destes números é uma medição da Arelia.':
    'L/kg bands and the breakdown of consumption come from public reference figures for commercial laundries. None of these numbers is an Arelia measurement.',
  'Ler o artigo completo, com as fontes.': 'Read the full article, with the sources.',
  'O que isto não é': 'What this is not',
  '>Estimativa<': '>An estimate<',
  'Um ponto de partida para uma conversa, não um orçamento. O consumo real depende do equipamento, dos programas, da carga e da tarifa local, e só se sabe medindo.':
    'A starting point for a conversation, not a quote. Real consumption depends on the equipment, the programmes, the loading and the local rate, and the only way to know it is to measure it.',

  // ── tabela de referencia ──
  'Faixas de <em>referência.</em>': 'Reference <em>bands.</em>',
  'Use-as para situar a sua operação no campo "litros por quilo, hoje".':
    'Use them to place your own operation in the "litres per kilo, today" field.',
  '>Situação<': '>Situation<',
  'O que significa': 'What it means',
  '>Consumo<': '>Water use<',
  'Máquina industrial, sem medidas': 'Industrial washer, no measures',
  'Bom desempenho, sem conservação de água': 'Good performance, no water conservation',
  'Com reaproveitamento do enxaguamento': 'With rinse water reuse',
  'Mesma máquina, água do último enxaguamento reaproveitada': 'Same machine, final rinse water reused',
  'Túnel de lavagem contínua': 'Continuous wash tunnel',
  'Referência estabelecida para lavagem em contínuo': 'Established reference for continuous washing',
  'Túnel com sistema de reciclagem': 'Tunnel with a recycling system',
  'Melhoria adicional de 40 a 80%, conforme o sistema': 'A further 40 to 80% improvement, depending on the system',
  '17 a 22 L/kg': '17 to 22 L/kg',
  '12 a 15 L/kg': '12 to 15 L/kg',
  '7,5 a 12 L/kg': '7.5 to 12 L/kg',
  '1,5 a 4,5 L/kg': '1.5 to 4.5 L/kg',

  // ── aviso legal ──
  '>Aviso<': '>Notice<',
  'Esta ferramenta dá estimativas indicativas com base nas premissas que escolher e em referências do sector. Não constitui oferta comercial nem compromisso da Arelia. O consumo real depende do equipamento, dos programas, da carga e da tarifa local.':
    'This tool gives indicative estimates based on the assumptions you choose and on reference figures for the sector. It is not a commercial offer and commits Arelia to nothing. Real consumption depends on the equipment, the programmes, the loading and the local rate.',

  // ── fecho ──
  'Quer saber o que isto<br><em>vale no seu caso?</em>':
    'Want to know what this<br><em>is worth for you?</em>',
  'A simulação mostra a ordem de grandeza. Uma proposta feita sobre o seu volume real, a sua localização e a sua operação mostra o resto.':
    'The simulation shows the order of magnitude. A quote built on your real volume, your location and your operation shows the rest.',
  'Ler o artigo completo': 'Read the full article',
  'Ver calculadora de ROI': 'See the ROI calculator',
};
