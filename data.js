// ==========================================================================
// KARATEFLIX • BASE DE DADOS PADRONIZADA DE EXIGÊNCIAS POR FAIXA
// Programa Oficial da Federação Interestilos Baiana de Karatê (FIBK)
// Presidente: Shihan Richard Braga
// ==========================================================================

const FAIXAS_DATA = [
  {
    id: "branca-amarela",
    grau: "6º Kyu",
    deFaixa: "Branca",
    paraFaixa: "Amarela",
    corOrigem: "#FFFFFF",
    corDestino: "#F5C518",
    corDestaque: "#F5C518",
    nivel: "Iniciante",
    resumo: "Entrada formal no aprendizado do Karatê-Dô. Foco no equilíbrio, bases fundamentais e noções de etiqueta marcial (Reishiki).",
    
    // 1. REQUISITOS DE CARÊNCIA (PADRONIZADO)
    carencia: {
      tempoMinimo: "03 meses",
      aulasMinimas: "30 aulas",
      idadeMinima: "04 anos",
      observacao: "Frequência comprovada em livro de presença da academia/dojo."
    },

    // 2. KIHON (TÉCNICAS BÁSICAS PADRONIZADAS)
    kihon: {
      regraGeral: "Séries de defesas executadas em 3 passos avançando e 3 recuando. Séries de ataques em 3 passos com giro de 180º.",
      bases: [
        { nome: "Zenkutsu Dachi", desc: "Base frontal alongada (peso 60% na perna dianteira, perna traseira estendida)." },
        { nome: "Kokutsu Dachi", desc: "Base defensiva recuada (peso 70% na perna traseira)." },
        { nome: "Kiba Dachi", desc: "Base de cavaleiro aberta e simétrica (peso distribuído 50/50)." }
      ],
      socos: [
        { nome: "Oi-Zuki (Chudan)", desc: "Soco direto com avanço no nível médio (plexo)." }
      ],
      defesas: [
        { nome: "Gedan Barai", desc: "Defesa baixa com varredura do antebraço." },
        { nome: "Age Uke (Jodan)", desc: "Defesa alta ascendente cobrindo a cabeça a 45º." },
        { nome: "Soto Uke (Chudan)", desc: "Defesa média de fora para dentro com antebraço." },
        { nome: "Uchi Uke (Chudan)", desc: "Defesa média de dentro para fora." },
        { nome: "Shuto Uke (Chudan)", desc: "Defesa com a faca da mão em base Kokutsu Dachi." }
      ],
      chutes: [
        { nome: "Mae Geri Keage", desc: "Chute frontal estalado em Zenkutsu Dachi (atingindo com Koshi)." },
        { nome: "Mawashi Geri", desc: "Chute semicircular com peito do pé em Zenkutsu Dachi." },
        { nome: "Yoko Geri Keage", desc: "Chute lateral estalado em base Kiba Dachi." }
      ]
    },

    // 3. KATÁ (FORMAS)
    kata: {
      obrigatorio: "Heian Shodan",
      modoExecucao: "Sob comando para cada técnica individual",
      significado: "Paz e Tranquilidade - Nível 1 (21 movimentos fundamentais).",
      livreEscolha: null
    },

    // 4. KUMITÊ (COMBATE)
    kumite: {
      exigido: false,
      modalidade: "Não exigido neste nível",
      descricao: "Nesta etapa inaugural, o foco exclusivo é o desenvolvimento psicomotor, alinhamento das bases e respeito mútuo no dojô."
    },

    // 5. TESTES ESPECIAIS & CONHECIMENTOS
    conhecimentos: {
      teoria: "Noções básicas de postura (Reishiki), cumprimento marcial e contagem em japonês de 1 a 10.",
      testeControle: null,
      tameshiware: null
    }
  },

  {
    id: "amarela-vermelha",
    grau: "5º Kyu",
    deFaixa: "Amarela",
    paraFaixa: "Vermelha",
    corOrigem: "#F5C518",
    corDestino: "#DC2626",
    corDestaque: "#DC2626",
    nivel: "Iniciante / Intermediário",
    resumo: "Evolução técnica com inclusão de socos em série (Sanbon Zuki), soco contrário com quadril (Gyaku Zuki) e início do combate combinado.",
    
    carencia: {
      tempoMinimo: "04 meses",
      aulasMinimas: "40 aulas",
      idadeMinima: "Livre (cumprindo carência)",
      observacao: "Aprovação prévia no exame de 6º Kyu."
    },

    kihon: {
      regraGeral: "Execução com sincronismo de quadril e maior aceleração no final de cada golpe (Kime).",
      bases: [
        { nome: "Zenkutsu Dachi", desc: "Manutenção da altura uniforme em avanço e recuo." },
        { nome: "Kokutsu Dachi", desc: "Transição suave de base sem oscilar o centro de gravidade." },
        { nome: "Kiba Dachi", desc: "Postura com pés paralelos e joelhos firmes para fora." }
      ],
      socos: [
        { nome: "Oi-Zuki (Chudan)", desc: "Soco direto com avanço." },
        { nome: "Sanbon Zuki", desc: "Sequência de 3 socos contínuos: 1º Jodan e 2 Chudan." },
        { nome: "Gyaku Zuki (Chudan)", desc: "Soco contrário à perna frontal com forte rotação pélvica." }
      ],
      defesas: [
        { nome: "Gedan Barai, Age Uke, Soto Uke, Uchi Uke", desc: "Série fundamental refinada." },
        { nome: "Morote Uke (Chudan)", desc: "Defesa reforçada com apoio do punho auxiliar no cotovelo." },
        { nome: "Shuto Uke (Chudan)", desc: "Defesa com faca de mão em Kokutsu Dachi." }
      ],
      chutes: [
        { nome: "Mae Geri Keage & Mae Geri Kekomi", desc: "Chutes frontais estalado e penetrante com o calcanhar." },
        { nome: "Mawashi Geri & Ura Mawashi Geri", desc: "Chute circular e chute gancho reverso." },
        { nome: "Yoko Geri Keage & Yoko Geri Kekomi", desc: "Chutes laterais estalado e em pistão na base Kiba Dachi." }
      ]
    },

    kata: {
      obrigatorio: "Heian Nidan",
      modoExecucao: "Sob comando para cada técnica",
      significado: "Paz e Tranquilidade - Nível 2 (trabalha defesas duplas e chutes coordenados com golpes de punho).",
      livreEscolha: null
    },

    kumite: {
      exigido: true,
      modalidade: "Gohon Kumitê (Combate de 5 Passos)",
      descricao: "5 ataques consecutivos (Jodan e Chudan) e 5 defesas recuando, finalizando com contra-golpe decisivo e Kiai, sob comando do examinador."
    },

    conhecimentos: {
      teoria: "Diferença mecânica entre Keage (chute chicoteado) e Kekomi (chute penetrante empurrado).",
      testeControle: null,
      tameshiware: null
    }
  },

  {
    id: "vermelha-laranja",
    grau: "4º Kyu",
    deFaixa: "Vermelha",
    paraFaixa: "Laranja",
    corOrigem: "#DC2626",
    corDestino: "#EA580C",
    corDestaque: "#EA580C",
    nivel: "Intermediário",
    resumo: "Consolidação do princípio do contra-ataque imediato. Todas as defesas são seguidas de contra-golpe instantâneo e o Katá passa a ser executado sem comando.",
    
    carencia: {
      tempoMinimo: "05 meses",
      aulasMinimas: "50 aulas",
      idadeMinima: "Livre (cumprindo carência)",
      observacao: "Exigência de ritmo marcial contínuo."
    },

    kihon: {
      regraGeral: "TODAS AS TÉCNICAS DE DEFESA EM ZENKUTSU DACHI SERÃO ACOMPANHADAS DE CONTRA-GOLPE GYAKU-ZUKI IMEDIATO.",
      bases: [
        { nome: "Zenkutsu Dachi", desc: "Estabilidade para ancorar o impacto do contra-ataque." },
        { nome: "Kokutsu Dachi", desc: "Transição rápida para contra-chute com a perna dianteira." }
      ],
      socos: [
        { nome: "Oi-Zuki & Sanbon Zuki", desc: "Velocidade e foco penetrante." },
        { nome: "Gyaku-Zuki (Chudan)", desc: "Potência gerada pelo quadril após cada defesa." }
      ],
      defesas: [
        { nome: "Gedan Barai / Gyaku Zuki", desc: "Defesa baixa seguida de soco cruzado imediato." },
        { nome: "Age Uke (Jodan) / Gyaku Zuki", desc: "Defesa alta com contra-ataque rápido." },
        { nome: "Soto Uke & Uchi Uke / Gyaku Zuki", desc: "Defesas médias combinadas com soco oposto." },
        { nome: "Nagashi Uke (Jodan) / Gyaku Zuki (Chudan)", desc: "Defesa fluida em desvio angular seguida de contra-golpe." },
        { nome: "Shuto Uke Kizame Mae Geri", desc: "Defesa em Kokutsu Dachi + chute rápido da perna da frente." }
      ],
      chutes: [
        { nome: "Mae Ren Geri (Keage Jodan / Kekomi Chudan)", desc: "Chute duplo frontal contínuo sem pousar o pé." },
        { nome: "Mae Geri Keage Jodan / Yoko Geri Keage Jodan", desc: "Combinação frontal e lateral alta." },
        { nome: "Yoko Geri Keage & Kekomi (Kiba Dachi)", desc: "Perfeição no plano e apoio." }
      ]
    },

    kata: {
      obrigatorio: "Heian Sandan",
      modoExecucao: "SEM COMANDO (Ritmo e cadência próprios do karateca)",
      significado: "Paz e Tranquilidade - Nível 3 (ênfase em Kiba Dachi, golpes de cotovelo e bloqueios simultâneos).",
      livreEscolha: null
    },

    kumite: {
      exigido: true,
      modalidade: "Sanbon Kumitê (Combate de 3 Passos)",
      descricao: "3 ataques (Jodan e Chudan) e 3 defesas com contra-golpe e Kiai final, executado SEM COMANDO no tempo marcial dos atletas."
    },

    conhecimentos: {
      teoria: "Conceito de Maai (controle da distância espacial) e tempo de reação de contra-ataque (Deai).",
      testeControle: null,
      tameshiware: null
    }
  },

  {
    id: "laranja-verde",
    grau: "3º Kyu",
    deFaixa: "Laranja",
    paraFaixa: "Verde",
    corOrigem: "#EA580C",
    corDestino: "#16A34A",
    corDestaque: "#16A34A",
    nivel: "Intermediário Avançado",
    resumo: "Ampla expansão do arsenal técnico: 30 movimentos incluindo cotoveladas, golpes com dorso do punho, mão aberta e combate com esquiva angular (Tai Sabaki).",
    
    carencia: {
      tempoMinimo: "06 meses",
      aulasMinimas: "60 aulas",
      idadeMinima: "Livre (cumprindo carência)",
      observacao: "Exigência de aplicação prática das técnicas (Bunkai)."
    },

    kihon: {
      regraGeral: "Defesas em Zenkutsu Dachi combinadas com Gyaku Zuki + técnicas de cotovelo e borda de mão.",
      bases: [
        { nome: "Zenkutsu, Kokutsu e Kiba Dachi", desc: "Transições angulares sem desequilíbrio." }
      ],
      socos: [
        { nome: "Série Fundamental Completa", desc: "Oi-Zuki, Sanbon Zuki e Gyaku Zuki de alta pressão." },
        { nome: "Mae Empi Uchi & Empi Mawashi Uchi", desc: "Cotovelada frontal ascendente e circular." },
        { nome: "Uraken Uchi Jodan", desc: "Golpe elástico chicoteado com o dorso do punho." },
        { nome: "Shuto Uchi & Haito Uchi (Jodan / Gyaku Hanmi)", desc: "Golpes de faca de mão e borda interna com quadril invertido." }
      ],
      defesas: [
        { nome: "Juji Uke Jodan (Ryo Sho) & Gedan (Ken)", desc: "Defesas cruzadas em 'X' (mãos abertas no alto e punhos fechados embaixo)." },
        { nome: "Sukui Uke Gedan Nagashi / Shuto ou Gyaku", desc: "Defesa em colher fluida seguida de contra-ataque decisivo." },
        { nome: "Shuto Uke / Kizame Mae Geri / Nukitê", desc: "Defesa, chute da frente e perfuração com a ponta dos dedos finalizando em Zenkutsu." }
      ],
      chutes: [
        { nome: "Série Geri Completa + Yoko Ren Geri", desc: "Chutes frontais, circulares, ganchos e combinação dupla lateral com a mesma perna." }
      ]
    },

    kata: {
      obrigatorio: "Heian Yodan",
      modoExecucao: "SEM COMANDO",
      significado: "Paz e Tranquilidade - Nível 4 (combinações de técnicas lentas com contrações ultra-rápidas).",
      livreEscolha: null
    },

    kumite: {
      exigido: true,
      modalidade: "Kihon Ippon Kumitê (Combate de 1 Passo)",
      descricao: "Ataques previamente anunciados (Oi Zuki Jodan/Chudan, Mae Geri, Mawashi Geri, Ura Mawashi Geri e Yoko Geri Kekomi). Defensor executa esquiva com Tai Sabaki, defesa, contra-golpe e Kiai. Execução com braço direito e esquerdo."
    },

    conhecimentos: {
      teoria: "Aplicação prática das técnicas do Katá (Bunkai) com demonstração e identificação de cada técnica em japonês e português.",
      testeControle: null,
      tameshiware: null
    }
  },

  {
    id: "verde-roxa",
    grau: "2º Kyu",
    deFaixa: "Verde",
    paraFaixa: "Roxa",
    corOrigem: "#16A34A",
    corDestino: "#9333EA",
    corDestaque: "#9333EA",
    nivel: "Avançado",
    resumo: "Entrada nos graus avançados. Sequências complexas contínuas (Renzoku Waza), chutes em meia-lua (Mikazuki) e combate com postura livre e rasteiras.",
    
    carencia: {
      tempoMinimo: "08 meses",
      aulasMinimas: "80 aulas",
      idadeMinima: "Livre (cumprindo carência)",
      observacao: "Maestria em todas as técnicas dos níveis anteriores."
    },

    kihon: {
      regraGeral: "Tudo exigido nas faixas anteriores + Sequências dinâmicas Renzoku Waza.",
      bases: [
        { nome: "Bases Integradas", desc: "Mudanças rápidas de base Zenkutsu, Kokutsu e Kiba Dachi com controle de centro de gravidade (Hara)." }
      ],
      socos: [
        { nome: "Renzoku Waza 1", desc: "Soto Uke (ZE), Yoko Empi (KI), Uraken Uchi (KI), Gyaku Zuki (ZE)." },
        { nome: "Renzoku Waza 2", desc: "Shuto Uke (KO), Kizame Mae Geri (KO), Gyaku Zuki (KO)." }
      ],
      defesas: [
        { nome: "Shuto Uke / Kizame Mae Geri / Gyaku Zuki", desc: "Finalizando em base Kokutsu Dachi estável." }
      ],
      chutes: [
        { nome: "Mikazuki Geri (Chudan)", desc: "Chute em meia-lua crescente com a sola do pé." },
        { nome: "Renzoku Waza 3", desc: "Kizame Mawashi Geri (perna da frente) + Mawashi Geri (perna de trás)." },
        { nome: "Renzoku Waza 4", desc: "Mae Geri, Mawashi Geri, Ushiro Geri (com perna diferente para cada técnica em sucessão)." }
      ]
    },

    kata: {
      obrigatorio: "Heian Godan",
      modoExecucao: "SEM COMANDO (fluidez rítmica com salto)",
      significado: "Paz e Tranquilidade - Nível 5 (último dos Heians; apresenta salto com giro de corpo Tobi, contra-ataque de cotovelo e postura Manji Uke).",
      livreEscolha: null
    },

    kumite: {
      exigido: true,
      modalidade: "Kihon Ippon em Postura Livre",
      descricao: "Combate de 1 passo em postura livre alternada com Oi Zuki Jodan/Chudan, Mae Geri, Mawashi Geri, Yoko Geri Kekomi, Ura Mawashi Geri, Ushiro Geri e Ashi Barai (rasteira/varredura). Tai Sabaki dinâmico, contra-golpe e Kiai final."
    },

    conhecimentos: {
      teoria: "Bunkai do Heian Godan com explicações de torções articulares, desequilíbrios e projeções corporais.",
      testeControle: null,
      tameshiware: null
    }
  },

  {
    id: "roxa-marrom",
    grau: "1º Kyu",
    deFaixa: "Roxa",
    paraFaixa: "Marrom",
    corOrigem: "#9333EA",
    corDestino: "#78350F",
    corDestaque: "#92400E",
    nivel: "Avançado Pré-Faixa Preta",
    resumo: "O último Kyu antes da Faixa Preta. Chutes voadores, sequências de chutes mantendo a perna suspensa sem tocar o chão, Katás da série Tekki, luta livre e arbitragem.",
    
    carencia: {
      tempoMinimo: "12 meses",
      aulasMinimas: "120 aulas",
      idadeMinima: "Livre (cumprindo carência)",
      observacao: "Maturação técnica e comportamental para liderança no dojô."
    },

    kihon: {
      regraGeral: "Técnicas aéreas, socos de impacto vertical e sustentação isométrica de membros inferiores.",
      bases: [
        { nome: "Bases em Velocidade Máxima", desc: "Fixação e estanqueidade instantânea em cada movimento." }
      ],
      socos: [
        { nome: "Nagashi Tsuki & Tobi Komi Tsuki", desc: "Soco esquivando e soco em investida explosiva rasante." },
        { nome: "Tate Zuki & Tate Ken Gyaku Zuki", desc: "Socos com punho na vertical em curta distância." }
      ],
      defesas: [
        { nome: "Renzoku Waza 1", desc: "Shuto Uke (KO), Kizame Mawashi Geri (KO), Nukitê (KO)." },
        { nome: "Renzoku Waza 3", desc: "Gedan Barai recuando, avançando Oi Zuki - Gyaku Zuki (ZE)." }
      ],
      chutes: [
        { nome: "Mae Tobi Geri & Yoko Tobi Geri", desc: "Chutes voadores no ar (frontal e lateral)." },
        { nome: "Hitsui Geri (Hiza Geri)", desc: "Golpe devastador com a rótula/joelho." },
        { nome: "Renzoku Waza 4 (Perna Suspensa)", desc: "Mae Geri e Mawashi Geri COM A MESMA PERNA, sem tocar o pé no chão e sem baixar o joelho abaixo da linha da cintura." },
        { nome: "Renzoku Waza 5", desc: "Mawashi Geri (ZE) / Yoko Geri / Gyaku Zuki." }
      ]
    },

    kata: {
      obrigatorio: "Qualquer um dos Heians 1 ao 5 (a critério da banca)",
      modoExecucao: "Sorteado ou exigido de improviso",
      significado: "Domínio total dos 5 Katás Heian fundamentais.",
      livreEscolha: "TEKKI SHODAN, TEKKI NIDAN ou TEKKI SANDAN (à escolha do candidato)"
    },

    kumite: {
      exigido: true,
      modalidade: "Jyu Ippon Kumitê + Jyu Kumitê (Combate Livre)",
      descricao: "Jyu Ippon com ataques diversos e Jyu Kumitê contínuo oficial (com equipamentos de proteção obrigatórios para atletas acima de 15 anos)."
    },

    conhecimentos: {
      teoria: "Mesa de arbitragem: funções do Anunciador de Notas, Cronometrista e preenchimento de súmulas e chaves oficiais de competição.",
      testeControle: null,
      tameshiware: null
    }
  },

  {
    id: "marrom-preta1dan",
    grau: "1º Dan (Shodan)",
    deFaixa: "Marrom",
    paraFaixa: "Preta",
    corOrigem: "#78350F",
    corDestino: "#111827",
    corDestaque: "#DC2626",
    nivel: "Grau de Mestre (Yudansha)",
    resumo: "O ingresso solene no círculo de faixas pretas. Katás superiores, Bunkai com adversários reais, teste de controle a 0,5 cm, quebramento de tábua (Tameshiware), legislação e currículo desportivo.",
    
    carencia: {
      tempoMinimo: "18 meses",
      aulasMinimas: "180 aulas",
      idadeMinima: "18 anos (Menores de 18 anos são graduados Faixa Preta Aluno)",
      observacao: "Apresentação obrigatória de Currículo Desportivo federado."
    },

    kihon: {
      regraGeral: "Séries de combinações avançadas em base Zenkutsu Dachi executadas com potência plena.",
      bases: [
        { nome: "Maestria das Bases Fundamentais", desc: "Transições perfeitas sem oscilação de altura." }
      ],
      socos: [
        { nome: "Oi Zuki / Sambon Zuki (ZE)", desc: "Investida dupla combinada." },
        { nome: "Kizami Zuki / Gyaku Zuki & Sambon Zuki", desc: "Antecipação de punho e torção de quadril." },
        { nome: "Soto Uke / Yoko Empi / Uraken / Gyaku Zuki", desc: "Quádrupla combinação em alta velocidade." },
        { nome: "Shuto Uke / Kizame Mae Geri / Nukitê (ZE)", desc: "Defesa cortante, chute e lança com os dedos." }
      ],
      defesas: [
        { nome: "Todas as defesas fundamentais e avançadas", desc: "Com Kime e estabilidade inabalável." }
      ],
      chutes: [
        { nome: "Mae Ren Geri & Yoko Ren Geri", desc: "Sequências de chutes duplos sem apoio." },
        { nome: "Mae Geri / Yoko Geri / Ushiro Geri", desc: "Tríplice combinação com a MESMA PERNA sem apoiar no solo." },
        { nome: "Mae Geri / Mawashi Geri / Gyaku Zuki", desc: "Chutes combinados seguidos de contra-golpe penetrante." }
      ]
    },

    kata: {
      obrigatorio: "Qualquer um dos Heians 1 ao 5 E Tekkis 1 ao 3 (critério da banca)",
      modoExecucao: "Execução impecável sem hesitação",
      significado: "Demonstração de solidez em bases longas e curtas.",
      livreEscolha: "Um Katá Superior entre: Bassai Dai, Empi, Jion, Jitte, Gankaku, Hangetsu ou Kanku Dai (executado na íntegra com fundamentação teórica)."
    },

    kumite: {
      exigido: true,
      modalidade: "Jyu Ippon Livre + Shiai Kumitê 'Shobu Nihon'",
      descricao: "Combate competitivo oficial Shobu Nihon (disputa de 2 Ippons ou 4 Waza-aris) regido pela arbitragem desportiva."
    },

    conhecimentos: {
      teoria: "História mundial e brasileira do Karatê, sistemas de arbitragem, prova escrita e Lei Pelé (Lei nº 8.615) sobre clubes e associações.",
      testeControle: "TESTE DE CONTROLE: Apresentação prática com observância de tempo de reação e distância final máxima de 0,5 cm do alvo sem contato físico.",
      tameshiware: "Partir uma tábua de pinho de 30 x 30 cm por 1 polegada de espessura com um só golpe (menores de 18 anos: meia polegada)."
    }
  },

  {
    id: "preta1dan-2dan",
    grau: "2º Dan (Nidan)",
    deFaixa: "Preta 1º Dan",
    paraFaixa: "Preta 2º Dan",
    corOrigem: "#111827",
    corDestino: "#111827",
    corDestaque: "#F5C518",
    nivel: "Grau Superior (Yudansha)",
    resumo: "Consolidação técnica e foco de energia. Introdução do desafio lendário de apagar a chama de uma vela com o ar do golpe e quebramento de 2 tábuas.",
    
    carencia: {
      tempoMinimo: "02 anos",
      aulasMinimas: "240 aulas",
      idadeMinima: "Cumprindo carência do 1º Dan",
      observacao: "Participação ativa em arbitragens e competições federadas."
    },

    kihon: {
      regraGeral: "Tudo exigido anteriormente + combinações táticas em recuo e avanço com chutes voadores.",
      bases: [
        { nome: "Bases de Alta Densidade", desc: "Transição em guarda livre e Zenkutsu Dachi." }
      ],
      socos: [
        { nome: "Kizami Zuki / Sanbon Zuki", desc: "Velocidade máxima de antecipação." },
        { nome: "Kizami Zuki / Mae Geri / Oi Zuki", desc: "Encadeamento veloz de mão, pé e mão." },
        { nome: "Recua Jodan Age Uke, avança Mawashi, Yoko Uraken, Oi Zuki", desc: "Sequência tática de combate contra múltiplos adversários." }
      ],
      defesas: [
        { nome: "Defesas em todos os planos cardeais", desc: "Esquiva e redirecionamento de força do oponente." }
      ],
      chutes: [
        { nome: "Mae Geri, Yoko Geri Keage, Ushiro Geri, Mawashi Geri", desc: "Combinação circular completa de chutes." },
        { nome: "Mae Tobi Geri & Yoko Tobi Geri", desc: "Chutes aéreos com precisão de aterrissagem." }
      ]
    },

    kata: {
      obrigatorio: "Katá MEIKYO ou BASSAI SHO (a critério da banca)",
      modoExecucao: "Execução magistral com foco e ritmo impecáveis",
      significado: "Meikyo (Espelho Polido) ou Bassai Sho (Romper a Fortaleza - versão refinada com defesa contra bastão).",
      livreEscolha: "Um Katá Superior entre: Bassai Dai, Empi, Jion, Jitte, Gankaku, Hangetsu ou Kanku Dai (com Bunkai aplicado)."
    },

    kumite: {
      exigido: true,
      modalidade: "Jyu Ippon Livre + Shiai Kumitê 'Shobu Nihon'",
      descricao: "Combate de alta intensidade demonstrando controle emocional supremo e Zanshin contínuo."
    },

    conhecimentos: {
      teoria: "Aplicação detalhada de autodefesa no Bunkai, história do Karatê na Bahia e no Brasil, e arbitragem oficial.",
      testeControle: "Distância máxima de 0,5 cm + APAGAR A LABAREDA DE UMA VELA COM UM SÓ GOLPE sem tocar na vela nem no pavio.",
      tameshiware: "Partir DUAS tábuas de pinho maciço de 30 x 30 cm por 1 polegada com um só golpe."
    }
  },

  {
    id: "preta2dan-3dan",
    grau: "3º Dan (Sandan)",
    deFaixa: "Preta 2º Dan",
    paraFaixa: "Preta 3º Dan",
    corOrigem: "#111827",
    corDestino: "#111827",
    corDestaque: "#F5C518",
    nivel: "Mestrado (Sensei)",
    resumo: "O karateca atinge a maturidade como instrutor (Sensei). O Kihon mecânico deixa de ser exigido, dando lugar a katás superiores, teste da vela, quebra de 3 tábuas e legislação de proteção da criança e adolescente.",
    
    carencia: {
      tempoMinimo: "03 anos",
      aulasMinimas: "360 aulas",
      idadeMinima: "Cumprindo carência do 2º Dan",
      observacao: "Formação de alunos e contribuição pedagógica à federação."
    },

    kihon: {
      regraGeral: "NÃO EXIGIDO A ESSE NÍVEL (a maestria básica é pressuposta pela trajetória).",
      bases: [],
      socos: [],
      defesas: [],
      chutes: []
    },

    kata: {
      obrigatorio: "Katá NIJUSHIHO ou JIIN (a critério da banca)",
      modoExecucao: "Execução com máxima densidade marcial e respiração sincronizada",
      significado: "Nijushiho (24 Passos) ou Jiin (Amor de Buda / Terreno do Templo).",
      livreEscolha: "Um Katá Superior entre: Bassai Dai, Empi, Jion, Jitte, Gankaku, Hangetsu, Kanku Dai, Meikyo e Bassai Sho."
    },

    kumite: {
      exigido: true,
      modalidade: "Jyu Ippon Kumitê + Shiai Kumitê 'Shobu Nihon'",
      descricao: "Demonstração de liderança no tatame, controle de Maai e antecipação de golpes (Sen no Sen)."
    },

    conhecimentos: {
      teoria: "Estatuto da Criança e do Adolescente (ECA - Lei Federal 8.069/1990) aplicado ao ensino de artes marciais.",
      testeControle: "Distância máxima de 0,5 cm + Apagar labareda de vela sem contato físico com o golpe.",
      tameshiware: "Partir TRÊS tábuas de pinho de 30 x 30 cm por 1 polegada com um só golpe ou golpes diferentes."
    }
  },

  {
    id: "preta3dan-4dan",
    grau: "4º Dan (Yondan)",
    deFaixa: "Preta 3º Dan",
    paraFaixa: "Preta 4º Dan",
    corOrigem: "#111827",
    corDestino: "#111827",
    corDestaque: "#F5C518",
    nivel: "Alto Grau (Mestre Sênior)",
    resumo: "Nível de mestre sênior. Exige domínio de múltiplos sistemas de arbitragem internacionais (WKO, SKI, Tradicional, WKF), primeiros socorros no dojo, gestão desportiva e quebra de 4 tábuas.",
    
    carencia: {
      tempoMinimo: "04 anos",
      aulasMinimas: "480 aulas",
      idadeMinima: "Cumprindo carência do 3º Dan",
      observacao: "Atuação como árbitro central e dirigente técnico."
    },

    kihon: {
      regraGeral: "NÃO EXIGIDO A ESSE NÍVEL.",
      bases: [],
      socos: [],
      defesas: [],
      chutes: []
    },

    kata: {
      obrigatorio: "GOJUSHIHO SHO, KANKU SHO ou SOCHIN (a critério da banca)",
      modoExecucao: "Expressão artística e marcial no nível mais elevado de Kime",
      significado: "Gojushiho Sho (54 Passos Menor), Kanku Sho (Olhar para o Céu Menor) ou Sochin (Força Tranquila).",
      livreEscolha: "Um Katá Superior da lista oficial avançada da FIBK."
    },

    kumite: {
      exigido: true,
      modalidade: "Jyu Ippon Kumitê + Shiai Kumitê 'Shobu Nihon'",
      descricao: "Maestria técnica absoluta e conduta exemplar no combate."
    },

    conhecimentos: {
      teoria: "Primeiros socorros esportivos, gestão de entidades federadas e confederadas, e teste de arbitragem em todos os sistemas conhecidos (WKO, SKI, Tradicional e WKF).",
      testeControle: "Precisão de 0,5 cm + Apagar vela sem contato com golpe de punho ou chute.",
      tameshiware: "Partir QUATRO tábuas de pinho maciço de 30 x 30 cm por 1 polegada com um ou mais golpes."
    }
  },

  {
    id: "preta4dan-5dan",
    grau: "5º Dan (Godan)",
    deFaixa: "Preta 4º Dan",
    paraFaixa: "Preta 5º Dan (Shihan)",
    corOrigem: "#111827",
    corDestino: "#111827",
    corDestaque: "#F5C518",
    nivel: "Grau Máximo de Mestre (Shihan)",
    resumo: "Consagração do Mestre (Shihan). O candidato atinge o topo do programa oficial da FIBK, executando os katás mais complexos da arte marcial (Unsu, Chinte ou Wankan) e quebrando cinco tábuas de pinho maciço.",
    
    carencia: {
      tempoMinimo: "05 anos",
      aulasMinimas: "600 aulas",
      idadeMinima: "Cumprindo carência do 4º Dan",
      observacao: "Dedicação de vida inteira ao fortalecimento do Karatê-Dô."
    },

    kihon: {
      regraGeral: "NÃO EXIGIDO A ESSE NÍVEL.",
      bases: [],
      socos: [],
      defesas: [],
      chutes: []
    },

    kata: {
      obrigatorio: "CHINTE, UNSU ou WANKAN (a critério da banca examinadora)",
      modoExecucao: "Perfeição absoluta de ritmo, respiração, Kime e transição de tensão e relaxamento",
      significado: "Unsu (Mãos em Nuvens - contém salto 360º com queda e chute duplo), Chinte (Mãos Raras) ou Wankan (Coroa do Rei).",
      livreEscolha: "Qualquer Katá Mestre da tradição Shotokan executado na íntegra com fundamentação filosófica."
    },

    kumite: {
      exigido: true,
      modalidade: "Shiai Kumitê 'Shobu Nihon' de Honra",
      descricao: "Combate de alta etiqueta demonstrando domínio total das regras e espírito de autocontrole inabalável."
    },

    conhecimentos: {
      teoria: "Todos os conhecimentos teóricos unificados, liderança de comitês examinadores e código de ética dos Shihan.",
      testeControle: "Não exigido (controle plenamente comprovado pela trajetória de mestre).",
      tameshiware: "Partir CINCO tábuas de pinho de 30 x 30 cm por 1 polegada com um ou mais golpes."
    }
  }
];
