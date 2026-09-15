/*
 PARAÍBA PONTO CULTURAL — CONTEÚDO DA PÁGINA PRINCIPAL

 ESTE É O PRINCIPAL ARQUIVO DE CONTEÚDO DA HOME.

 Para deixar a home pronta, você precisa basicamente de:
 - textos;
 - links das matérias;
 - 7 imagens nas posições fixas da pasta assets/home/.

 IMAGENS FIXAS DA HOME:
 - manchete.jpg
 - destaque-01.jpg
 - destaque-02.jpg
 - pauta-01.jpg
 - pauta-02.jpg
 - pauta-03.jpg
 - pauta-04.jpg

 Substitua as imagens mantendo exatamente estes nomes em JPG.
 Assim não é necessário alterar os caminhos no arquivo.

 Convenção das matérias:
     materias/AAAA-MM-DD-titulo-curto.html

 Depois de publicado, o nome do arquivo/URL da matéria deve ser tratado como permanente.
 A matéria pode sair da home sem ser movida ou renomeada.

 Você pode abrir index.html com duplo clique. Não precisa servidor local.
*/

const HOME = {
  "manchete": {
    "categoria": "Literatura de Cordel",
    "titulo": "Jornada aborda literatura de cordel e xilogravura em Campina Grande",
    "resumo": "Realizada na UFCG, a quarta edição do evento reuniu pesquisadores, cordelistas e artistas do Brasil e de Portugal em conferências, mesas-redondas, oficinas, minicursos e grupos de trabalho dedicados à literatura de cordel e à xilogravura.",
    "imagem": "assets/home/manchete.jpg",
    "link": "materias/2026-08-22-literatura-cordel/index.html",
    "data": "22 de agosto de 2026"
  },
  "destaques": [
    {
      "categoria": "Fotografia",
      "titulo": "Pinturas e Platibandas",
      "resumo": "Exibições do documentário de Alberto Renault sobre a fotógrafa Anna Mariani acontecem na Casa 233 e na UFCG, em Campina Grande.",
      "imagem": "assets/home/destaque-01.jpg",
      "link": "materias/2026-08-12-pinturas-platibandas/index.html"
    },
    {
      "categoria": "Música",
      "titulo": "Atração internacional marca a abertura do FIMQ",
      "resumo": "O violonista turco Özberk Miraç Sarıgül e o Grupo Chorata abriram a segunda edição do FIMQ, em Queimadas, reunindo o violão clássico e a tradição do choro paraibano.",
      "imagem": "assets/home/destaque-02.jpg",
      "link": "materias/2026-08-17-fimq-ozberk-chorata/index.html"
    }
  ],
  "ultimas": [
    {
      "categoria": "Audiovisual",
      "titulo": "Comunicurtas abre inscrições para sua 21ª edição",
      "resumo": "Mostras competitivas recebem inscrições gratuitas até 30 de setembro. O Festival acontece de 24 a 29 de novembro, em Campina Grande.",
      "data": "7 de setembro de 2026",
      "hora": "",
      "link": "materias/2026-09-07-comunicurtas/index.html"
    },
    {
      "categoria": "Cultura pop",
      "titulo": "Imagineland On the Road retorna a Campina Grande em setembro",
      "resumo": "Evento será realizado de 25 a 27 de setembro no Centro de Convenções de Campina Grande. O primeiro dia terá entrada gratuita para estudantes de instituições públicas.",
      "data": "7 de setembro de 2026",
      "hora": "",
      "link": "materias/2026-09-07-imagineland/index.html"
    },
    {
      "categoria": "Cinema",
      "titulo": "MAC promove ciclo de cinema dedicado à Grécia em setembro",
      "resumo": "Sessões gratuitas acontecem às sextas-feiras, às 19h, com exibição de filmes e debates sobre mito, história e cultura.",
      "data": "7 de setembro de 2026",
      "hora": "",
      "link": "materias/2026-09-07-mac-cinema-grecia/index.html"
    },
    {
      "categoria": "Cultura popular",
      "titulo": "25ª Feira Cultural de Chã da Pia acontece em Areia",
      "resumo": "Evento acontece no dia 13 de setembro e reúne o trabalho das loiceiras, artesanato, gastronomia e saberes tradicionais da comunidade.",
      "data": "7 de setembro de 2026",
      "hora": "",
      "link": "materias/2026-09-07-cha-da-pia/index.html"
    }
  ],
  "em_pauta": [
    {
      "titulo": "Orquestra Jovem da UFCG se apresenta no MAC",
      "resumo": "Apresentação sob a regência do maestro Luís Passos integrou a programação do XVII FIMUS em Campina Grande.",
      "imagem": "assets/home/pauta-01.jpg",
      "link": "materias/2026-07-11-orquestra-jovem.html"
    },
    {
      "titulo": "Nélida Campos lança livro em Campina Grande",
      "resumo": "Livro de contos da escritora paraibana foi lançado no tradicional Sebo O Cata-Livros na Praça Clementino Procópio.",
      "imagem": "assets/home/pauta-02.jpg",
      "link": "materias/2026-07-22-nelida-campos.html"
    },
    {
      "titulo": "Cidade Hades no Teatro Municipal Severino Cabral",
      "resumo": "Produção do Teatro Encanto leva ao palco uma adaptação para o português de um musical da Broadway.",
      "imagem": "assets/home/pauta-03.jpg",
      "link": "materias/2026-07-26-cidade-hades.html"
    },
    {
      "titulo": "Instituto Vinciano promove circulação do cordel Pulsares: Relógios Cósmicos",
      "resumo": "Publicação passou pelo Memorial do Cordel, em Guarabira, e pela Estação do Cordel, em Natal, durante ações da Orbis 26.",
      "imagem": "assets/home/pauta-04.jpg",
      "link": "materias/2026-09-07-historias-locais.html"
    }
  ]
};
