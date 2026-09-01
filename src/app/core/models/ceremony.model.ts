// Modelo de dados do Cerimonial Digital — Valtemir Junior & Thamara
// Todos os dados abaixo foram extraídos literalmente do documento fornecido.
// Nenhuma informação, duração, link ou nome foi inventado ou alterado.

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  participation: string;
  icon: string;
}

export interface Song {
  id: string;
  order: number;
  title: string;
  artist?: string;
  videoTitle?: string;
  youtubeUrl: string;
  usage: string;
  plannedTime: string;
  configuredTime?: string;
  structure?: string;
  instrumentation: string;
  notes?: string[];
  editableFields: string[];
  /** Letra completa, fornecida pelo usuário, estrofes separadas por linha em branco. */
  lyrics?: string;
  /** Trechos da letra que correspondem à estrutura usada na cerimônia (ex: Introdução, Refrão). */
  lyricsBySection?: { label: string; text: string }[];
}

export interface CoupleEntry {
  name: string;
  entrada: string;
  chegada: string;
}

export interface StepPhase {
  label: string;
  songId: string;
  description: string;
}

export interface CeremonyStep {
  id: string;
  order: number;
  title: string;
  participants?: string;
  /** Quando há vários nomes/casais, exibidos em grade organizada em vez de texto corrido. */
  participantsList?: string[];
  plaquinha?: string;
  songId?: string;
  /** Quando a etapa tem mais de uma música em sequência sem corte entre elas (ex: Marcha Nupcial → Agnus Dei). */
  phases?: StepPhase[];
  speech?: { title: string; text: string }[];
  extra?: string[];
  noSong?: boolean;
  /** Etapa de saída/recessional (destaque visual diferente das etapas de entrada). */
  isSaida?: boolean;
}


// ---------------------------------------------------------------------------
// EQUIPE MUSICAL
// ---------------------------------------------------------------------------

export const TEAM: TeamMember[] = [
  { id: 'abner', name: 'Abner', role: 'Violão', participation: 'Toda a cerimônia', icon: 'music_note' },
  { id: 'carol', name: 'Carol', role: 'Teclado', participation: 'Toda a cerimônia', icon: 'piano' },
  { id: 'david', name: 'David', role: 'Violino', participation: 'Somente Marcha Nupcial e transição da entrada da noiva', icon: 'music_note' },
  { id: 'fabia', name: 'Fabiana', role: 'Cantora', participation: 'Todas as músicas definidas como vocais', icon: 'mic' },
];

// ---------------------------------------------------------------------------
// EQUIPE DO LOCAL (staff de apoio no dia — buffet, garçons, etc.)
// ---------------------------------------------------------------------------

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  /** Telefone formatado para exibição. */
  phone?: string;
  /** Telefone só com dígitos + código do país, para o link do WhatsApp (wa.me). */
  waPhone?: string;
  /** id de outro StaffMember a quem esta pessoa é subordinada. Ausente = topo da hierarquia (chefe de uma equipe). */
  reportsToId?: string;
  /** Nome da equipe/setor. Só é usado em quem está no topo da hierarquia (sem reportsToId) — vira o título da sanfona. */
  teamName?: string;
}

export const VENUE_STAFF: StaffMember[] = [
  { id: 'cleiton', name: 'Cleiton', role: 'Comanda os garçons', phone: '(65) 9.8151-0220', waPhone: '5565981510220', teamName: 'Garçons' },
  { id: 'walter', name: 'Walter', role: 'Garçom', phone: '(65) 9.9675-0511', waPhone: '5565996750511', reportsToId: 'cleiton' },
  { id: 'alison', name: 'Alison', role: 'Garçom', phone: '(65) 9.9306-2863', waPhone: '5565993062863', reportsToId: 'cleiton' },
  { id: 'bordin', name: 'Bordin', role: 'Garçom', phone: '(65) 9.9236-0215', waPhone: '5565992360215', reportsToId: 'cleiton' },
  { id: 'kaio', name: 'Kaio', role: 'Garçom', phone: '(65) 9.8414-5282', waPhone: '5565984145282', reportsToId: 'cleiton' },
  { id: 'lucas', name: 'Lucas', role: 'Garçom', phone: '(65) 9.9226-3881', waPhone: '5565992263881', reportsToId: 'cleiton' },
  { id: 'ruan', name: 'Ruan', role: 'Garçom', phone: '(65) 9.9323-4534', waPhone: '5565993234534', reportsToId: 'cleiton' },
  { id: 'gemeos-1', name: 'Lucas Gabriel', role: 'Garçom', phone: '(65) 9816-2923', waPhone: '556598162923', reportsToId: 'cleiton' },
  { id: 'gemeos-2', name: 'Luis Linhares', role: 'Garçom', phone: '(65) 9963-6768', waPhone: '556599636768', reportsToId: 'cleiton' },
];

// ---------------------------------------------------------------------------
// PARTICIPANTES
// ---------------------------------------------------------------------------

export const NOIVOS = { noivo: 'Valtemir Junior', noiva: 'Thamara' };

export const PAIS_NOIVO = ['Valtemir', 'Idamar'];
export const PAIS_NOIVA = ['Creosmar', 'Shierley'];
export const OBS_SHIERLEY = 'Shierley não entra no cortejo inicial. Ela participa da saída, ao lado de Creosmar.';

export const PASTORES = ['Etevildo da Silveira', 'Maria Lucia', 'Samuel Gonçalves', 'Márcia da Silveira'];

/** Ordem real de entrada, intercalando um casal de cada lado (conforme roteiro). */
export const PADRINHOS_ORDEM_ENTRADA = [
  'Kelvin & Milena',
  'Lousiana & Antônio Carlos',
  'Alcebiades & Bruna',
  'Tatiane & Joel',
  'Antônio Júnior & Lorrayne',
  'Wislaine & Matheus',
  'Marcel & Ana Maria',
  'Maryane & Thyago',
  'Emerson & Fernanda',
  'Aline & Jhonathan',
  'Leonardo & Helena',
  'Laiza & Johnny',
];

export const TODOS_PADRINHOS: CoupleEntry[] = PADRINHOS_ORDEM_ENTRADA.map((name) => ({
  name,
  entrada: '--:--',
  chegada: '--:--',
}));

export const FLORISTAS_1 = {
  musica: 'Gratidão',
  nomes: ['Rebecca', 'Raquel', 'Evelyn', 'Isabelly', 'Sara'],
};
export const FLORISTAS_2 = {
  musica: 'Santo Espírito',
  nomes: ['Thalyta', 'Thaianny', 'Suelen', 'Larissa', 'Juliana'],
};

export const AVOS_TIA = ['Pascoal', 'Sonia', 'Maria', 'Cleonice'];

// ---------------------------------------------------------------------------
// BANCO DE MÚSICAS
// ---------------------------------------------------------------------------

export const SONGS: Song[] = [
  {
    id: 'ale-a-gloria',
    order: 1,
    title: 'A Ele a Glória',
    videoTitle: 'ROCHA - A ELE A GLÓRIA (CLIPE OFICIAL)',
    artist: 'Gabriela Rocha',
    youtubeUrl: 'https://www.youtube.com/watch?v=9p3qBC3VotM',
    usage: 'Bíblia + Pastores',
    plannedTime: '2:00–2:40',
    structure: 'Introdução + primeira parte + refrão + encerramento',
    instrumentation: 'Abner + Carol + Fabiana',
    editableFields: ['duração real', 'início', 'entrada', 'primeira parte', 'refrão', 'corte', 'tempo utilizado'],
    lyrics: `Porque Dele e por Ele
Para Ele são todas as coisas
Porque Dele e por Ele
Para Ele são todas as coisas

Porque Dele e por Ele
Para Ele são todas as coisas
Porque Dele e por Ele
Para Ele são todas as coisas

A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, amém

A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, amém

Quão profundas riquezas
O saber e o conhecer de Deus
Quão insondáveis
Seus juízos e os Seus caminhos

Quão profundas riquezas
O saber e o conhecer de Deus
Quão insondáveis
Seus juízos e os Seus caminhos

Digamos
A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, sempre e sempre

Digamos
A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, pra sempre

A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre

E não há outro, e não há outro além de Ti
E não há outro além de Ti
Rei da glória

Digam
A Ele a glória
A Ele a glória
Pra sempre, amém

A Ele a glória
A Ele a glória
A Ele a glória
A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre

Nunca se viu e nunca se ouviu
Falar de um Deus como Tu
És invencível

A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, sempre
Pra sempre, amém`,
    lyricsBySection: [
      {
        label: 'Introdução',
        text: `Porque Dele e por Ele
Para Ele são todas as coisas
Porque Dele e por Ele
Para Ele são todas as coisas`,
      },
      {
        label: 'Primeira parte',
        text: `Quão profundas riquezas
O saber e o conhecer de Deus
Quão insondáveis
Seus juízos e os Seus caminhos`,
      },
      {
        label: 'Refrão',
        text: `A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, amém`,
      },
      {
        label: 'Encerramento',
        text: `A Ele a glória
A Ele a glória
A Ele a glória
Pra sempre, sempre
Pra sempre, amém`,
      },
    ],
  },
  {
    id: 'deus-de-promessas',
    order: 3,
    title: 'Deus de Promessas',
    artist: 'Davi Sacer',
    youtubeUrl: 'https://www.youtube.com/watch?v=iwe-a-T8KYI',
    usage: 'Valtemir + Idamar',
    plannedTime: '1:30–2:00',
    structure: 'Introdução + 1ª estrofe + refrão',
    instrumentation: 'Abner + Carol + Fabiana',
    editableFields: [],
    lyrics: `Sei que os Teus olhos
Sempre atentos, permanecem em mim
E os Teus ouvidos
Estão sensíveis para ouvir meu clamor
Posso até chorar, mas a alegria vem de manhã
És Deus de perto e não de longe
Nunca mudastes, Tu és fiel

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir

Sei que os Teus olhos
Sempre atentos, permanecem em mim
E os Teus ouvidos
Estão sensíveis para ouvir meu clamor
Posso até chorar, mas a alegria vem de manhã
És Deus de perto e não de longe
Nunca mudastes, Tu és fiel

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir

Posso enfrentar o que for, eu sei quem luta por mim
Seus planos não podem ser frustrados
Minha esperança está nas mãos do grande Eu Sou
Meus olhos vão ver o impossível acontecer

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir`,
    lyricsBySection: [
      {
        label: '1ª estrofe',
        text: `Sei que os Teus olhos
Sempre atentos, permanecem em mim
E os Teus ouvidos
Estão sensíveis para ouvir meu clamor
Posso até chorar, mas a alegria vem de manhã
És Deus de perto e não de longe
Nunca mudastes, Tu és fiel`,
      },
      {
        label: 'Refrão',
        text: `Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir`,
      },
    ],
  },
  {
    id: 'gratidao',
    order: 5,
    title: 'Gratidão',
    artist: 'Felipe Rodrigues',
    videoTitle: 'Gratidão — Ministração ao vivo',
    youtubeUrl: 'http://youtube.com/watch?v=-oH04gqi0xI',
    usage: '5 amigas da noiva',
    plannedTime: '0:50–1:10',
    structure: 'Introdução + primeira parte',
    instrumentation: 'Abner + Carol',
    editableFields: [],
  },
  {
    id: 'quao-lindo-esse-nome-e',
    order: 6,
    title: 'Quão Lindo Esse Nome É',
    artist: 'Ana Nóbrega',
    youtubeUrl: 'https://www.youtube.com/watch?v=fQZjavJe_uo',
    usage: 'Entrada dos 12 casais de padrinhos',
    plannedTime: '3:00–3:40',
    structure: 'Introdução + 1ª estrofe + refrão + parte instrumental',
    instrumentation: 'Abner + Carol + Fabiana',
    editableFields: ['tempo individual de cada casal (entrada/chegada)'],
    lyrics: `No início eras a palavra
Um com Deus, o altíssimo
O mistério de tua glória
Cristo, em ti se revelou

Oh, quão lindo esse nome é
Oh, quão lindo esse nome é
O nome de Jesus, meu rei
Oh, quão lindo esse nome é
Maior que tudo ele é
Oh, quão lindo esse nome é
O nome de Jesus

Deixou o céu para buscar-nos
Veio pra nos resgatar
Amor maior que meu pecado
Nada vai nos separar

Oh, quão maravilhoso é
Oh, quão maravilhoso é
O nome de Jesus, meu rei
Oh, quão maravilhoso é
Maior que tudo ele é
Oh, quão maravilhoso é
O nome de Jesus
Oh, quão maravilhoso é
O nome de Jesus

Jesus, Jesus, Jesus
Como eu amo esse nome
Outro nome não há
Eu adoro esse nome

A morte venceste, o véu tu rompeste
A tumba vazia agora está
O céu te adora, proclama tua glória
Pois ressuscitaste e vivo estás

És invencível, inigualável
Hoje e pra sempre reinarás
Teu é o reino, tua é a glória
E acima de todo nome estás

Poderoso esse nome é
Poderoso esse nome é
O nome de Jesus, meu rei
Poderoso esse nome é
Mais forte que tudo é
Poderoso esse nome é
O nome de Jesus

És invencível, inigualável
Hoje e pra sempre reinarás
Teu é o reino, tua é a glória
E acima de todo nome estás

Poderoso esse nome é
Poderoso esse nome é
O nome de Jesus, meu rei
Poderoso esse nome é
Mais forte que tudo é
Poderoso esse nome é
O nome de Jesus
Poderoso esse nome é
O nome de Jesus
Poderoso esse nome é
O nome de Jesus`,
    lyricsBySection: [
      {
        label: '1ª estrofe',
        text: `No início eras a palavra
Um com Deus, o altíssimo
O mistério de tua glória
Cristo, em ti se revelou`,
      },
      {
        label: 'Refrão',
        text: `Oh, quão lindo esse nome é
Oh, quão lindo esse nome é
O nome de Jesus, meu rei
Oh, quão lindo esse nome é
Maior que tudo ele é
Oh, quão lindo esse nome é
O nome de Jesus`,
      },
    ],
  },
  {
    id: 'eu-te-agradeco',
    order: 4,
    title: 'Eu Te Agradeço',
    artist: 'Preto No Branco (part. Israel Salazar)',
    videoTitle: 'Preto no Branco, Weslei Santos - Eu Te Agradeço (Ao Vivo) ft. Israel Salazar',
    youtubeUrl: 'https://www.youtube.com/watch?v=eiJ-9wg5W9g',
    usage: 'ENTRADA DO NOIVO — VALTEMIR JUNIOR',
    plannedTime: '1:40–2:20',
    instrumentation: 'Abner + Carol + Fabiana',
    notes: ['David: não participa.'],
    editableFields: [],
    lyrics: `Eu te agradeço
Só te agradeço

Eu te agradeço
Por toda graça que me deu
Todo amor que ofereceu
Sem eu merecer
Eu te agradeço
Pois sei que um dia me escolheu
E entregou tudo que era seu
E me fez viver`,
  },
  {
    id: 'deus-e-deus',
    order: 2,
    title: 'Deus é Deus',
    artist: 'Delino Marçal',
    youtubeUrl: 'https://www.youtube.com/watch?v=JPqitveFAGo',
    usage: 'Pascoal e Sonia, depois Maria e Cleonice',
    plannedTime: '1:00–1:20',
    structure: '1ª parte + refrão',
    instrumentation: 'Abner + Carol',
    editableFields: [],
  },
  {
    id: 'santo-espirito',
    order: 7,
    title: 'Santo Espírito',
    artist: 'Laura Souguellis',
    youtubeUrl: 'https://www.youtube.com/watch?v=J2rTdu7vqTE',
    usage: '4 floristas',
    plannedTime: '1:00–1:30',
    structure: 'Refrão + primeira parte',
    instrumentation: 'Abner + Carol + Fabiana',
    editableFields: [],
    lyrics: `Não há nada igual
Não há nada melhor
A que se compara à esperança viva
Tua presença

Eu provei e vi
O mais doce amor
Que liberta o meu ser
E a vergonha desfaz
Tua presença

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Não há nada igual
Não há nada melhor
A que se compara à esperança viva
Tua presença

Eu provei e vi
O mais doce amor
Que liberta o meu ser
E a vergonha desfaz
Tua presença

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Não há nada como Tua glória
Não há nada como Tua glória
Não há nada como Tua glória
E habita entre nós

Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade
Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade

Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade
Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade, Senhor

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Tua presença
Não há nada igual
Tua presença
Vamos provar

Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade
Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade

Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade
Vamos provar quão real é Tua presença
Vamos provar da Tua glória e bondade, Senhor

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Nenhum bem maior que Tua presença entre nós
Nenhum bem maior do que o espírito da promessa
Nenhum bem maior que o espírito da verdade`,
    lyricsBySection: [
      {
        label: 'Refrão',
        text: `Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor`,
      },
      {
        label: 'Primeira parte',
        text: `Não há nada igual
Não há nada melhor
A que se compara à esperança viva
Tua presença`,
      },
    ],
  },
  {
    id: 'marcha-nupcial',
    order: 8,
    title: 'Marcha Nupcial',
    youtubeUrl: 'https://youtu.be/VqcysKk1wf8?is=fY6dai79nQbD56JG',
    usage: 'ENTRADA DA NOIVA — THAMARA (acompanhante: Creosmar)',
    plannedTime: '1:20–1:50',
    instrumentation: 'David + Abner + Carol',
    editableFields: ['Início da Marcha', 'Entrada de Thamara', 'Ponto médio do corredor', 'Preparar final', 'Final da Marcha'],
  },
  {
    id: 'agnus-dei',
    order: 9,
    title: 'Agnus Dei',
    artist: 'David Quinlan',
    youtubeUrl: 'https://www.youtube.com/watch?v=ag1StnggWkM',
    usage: 'Continuação da entrada de Thamara (transição da Marcha Nupcial)',
    plannedTime: '2:00–2:40',
    instrumentation: 'David + Abner + Carol + Fabiana',
    notes: ['Fabiana entra com voz no momento definido pelo arranjo.', 'A música deverá terminar quando Thamara chegar ao altar.'],
    editableFields: ['início', 'entrada de Fabiana', 'chegada de Thamara', 'corte'],
    lyrics: `Santo, Santo
É o Senhor, Deus Poderoso
Digno de louvor, Tu és, Tu és

Santo, Santo
É o Senhor, Deus Poderoso
Digno de louvor
Amém

Aleluia! Aleluia!
Poderoso é o Senhor nosso Deus
Aleluia! Aleluia!
Poderoso é o Senhor nosso Deus

Aleluia!

Santo, Santo
É o Senhor, Deus Poderoso
Digno de louvor, digno de louvor

Tu és Santo, Santo
É o Senhor, Deus Poderoso
Digno de louvor, digno de louvor

Tu és Santo, Santo
É o Senhor, Deus Poderoso
Digno de louvor, digno de louvor

Tu és Santo, Santo
É o Senhor, Deus Poderoso
Digno de louvor, Tu és, Tu és digno de louvor

Digno, ooh, oh, oh, digno
E tu és santo
Não há outro, não há outro como Tu, não, não, não
É o Senhor, Deus Poderoso
Digno de louvor, digno de louvor

Não há ninguém que se compare a Ti, Senhor
Tu és o unico
Digno do nosso louvor, da nossa adoração

Amém
Amém
Amém
Amém
Amém
Amém
Amém

De geração a geração
De eternidade a eternidade
Amém
Amém
Amém, Senhor

Ao ouvir o Teu espirito
Ao ouvir o amor
Dizemos Amém
Amém
Amém
Amém
Amém

Te amo
Eu Te amo
Eu Te amo, Jesus
Eu Te amo
Eu Te amo
Eu Te amo, Jesus
Eu Te amo
Eu Te amo, Jesus
Te amo`,
  },
  {
    id: 'que-bom-que-voce-chegou',
    order: 10,
    title: 'Que Bom que Você Chegou',
    artist: 'Bruna Karla',
    youtubeUrl: 'https://www.youtube.com/watch?v=te8tOyon9e4',
    usage: 'Entrada das alianças',
    plannedTime: '2:30–3:30',
    structure: '1ª estrofe + desenvolvimento + refrão/parte matrimonial',
    instrumentation: 'Abner + Carol + Fabiana',
    notes: ['David: já encerrou sua participação.'],
    editableFields: ['início', 'entrada das alianças', 'trecho', 'refrão', 'redução de volume', 'corte'],
    lyrics: `Me sinto tão amada, isso faz bem
Ao coração da gente quando tem
Alguém pra dividir um grande amor
Como a brisa da manhã, assim você chegou

Uma ótica perfeita de amor
Uma ponte sobre um rio de dor
Na minha vida, um sonho lindo se realizou
Um presente enviado pelo meu Senhor

Você foi como um dilúvio de amor
Arrancando do meu peito uma dor
E, no lugar daquela cicatriz, marcou
As cenas lindas que o tempo já notou
Você é minha tempestade do bem
Trazendo chuva ao meu deserto, me fazendo alguém
Amada simplesmente pelo que é
Ontem, namorada, noiva
Agora sua mulher

Me sinto tão amada, isso faz bem
Ao coração da gente quando tem
Alguém pra dividir um grande amor
Como a brisa da manhã, assim você chegou

Uma ótica perfeita de amor
Uma ponte sobre um rio de dor
Na minha vida, um sonho lindo se realizou
Um presente enviado pelo meu Senhor

Você foi como um dilúvio de amor
Arrancando do meu peito uma dor
E, no lugar daquela cicatriz, marcou
As cenas lindas que o tempo já notou
Você é minha tempestade do bem
Trazendo chuva ao meu deserto, me fazendo alguém
Amada simplesmente pelo que é
Ontem, namorada, noiva
Agora sua mulher

Vamos nos molhar na chuva do Senhor
Alimentar com bênçãos o nosso amor
Fazer valer a pena tudo que a gente conquistou
Vamos juntos fazer
Um culto de agradecimento a Deus
Quando mais precisei, você me apareceu
Um presente, e o remetente era Deus

Me sinto tão amada, isso faz bem
Como faz

Você foi como um dilúvio de amor
Arrancando do meu peito uma dor
E, no lugar daquela cicatriz, marcou
As cenas lindas que o tempo já notou
Você é minha tempestade do bem
Trazendo chuva ao meu deserto, me fazendo alguém
Amada simplesmente pelo que é
Ontem, namorada, noiva
Agora sua mulher

Você foi como um dilúvio de amor
Arrancando do meu peito uma dor
Você é minha tempestade do bem
Trazendo chuva ao meu deserto, me fazendo alguém
Amada simplesmente pelo que é
Ontem, namorada, noiva
Agora e pra sempre sua mulher`,
    lyricsBySection: [
      {
        label: '1ª estrofe',
        text: `Me sinto tão amada, isso faz bem
Ao coração da gente quando tem
Alguém pra dividir um grande amor
Como a brisa da manhã, assim você chegou`,
      },
      {
        label: 'Desenvolvimento',
        text: `Uma ótica perfeita de amor
Uma ponte sobre um rio de dor
Na minha vida, um sonho lindo se realizou
Um presente enviado pelo meu Senhor`,
      },
      {
        label: 'Refrão / parte matrimonial',
        text: `Você foi como um dilúvio de amor
Arrancando do meu peito uma dor
E, no lugar daquela cicatriz, marcou
As cenas lindas que o tempo já notou
Você é minha tempestade do bem
Trazendo chuva ao meu deserto, me fazendo alguém
Amada simplesmente pelo que é
Ontem, namorada, noiva
Agora sua mulher`,
      },
    ],
  },
  {
    id: 'a-bencao',
    order: 11,
    title: 'A Bênção',
    artist: 'Gabriel Guedes (part. Nívea Soares)',
    youtubeUrl: 'https://www.youtube.com/watch?v=v8gaG2ed01I',
    usage: 'SAÍDA DOS NOIVOS',
    plannedTime: '3:00–4:00',
    instrumentation: 'Abner + Carol + Fabiana',
    notes: ['David: não participa.'],
    editableFields: [],
    lyrics: `Que o Senhor te abençoe
E faça brilhar Seu rosto em ti
Que conceda Sua graça
E te dê paz

Amém, amém, amém
Amém, amém, amém

Que o Senhor te abençoe
E faça brilhar Seu rosto em ti
Que conceda Sua graça
E te dê paz

Amém, amém, amém
Amém, amém, amém

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos de teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Sua presença te acompanhe
Por de trás, por diante
Do teu lado e em ti
É contigo, é por ti

E de dia, e de noite
Tua entrada e saída
Em teu riso, em teu choro
É contigo, é por ti

É contigo, é por ti
É contigo, é por ti
É contigo, é por ti
É contigo, é por ti

Amém, amém, amém
Amém, amém, amém

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Sua presença te acompanhe
Por detrás e por diante
Do teu lado e em ti
É contigo, é por ti

E de dia, e de noite
Tua entrada e saída
Em teu riso, em teu choro
É contigo, é por ti

É contigo, é por ti
É contigo, é por ti
É contigo, é por ti
É contigo, é por ti

Amém, amém, amém
Amém, amém, amém`,
  },
];

export function songById(id: string): Song | undefined {
  return SONGS.find((s) => s.id === id);
}

// ---------------------------------------------------------------------------
// ETAPAS DO CORTEJO / CERIMÔNIA (ordem oficial — seção 11)
// ---------------------------------------------------------------------------

export const CEREMONY_STEPS: CeremonyStep[] = [
  {
    id: 'step-1',
    order: 1,
    title: 'Boas-vindas',
    noSong: true,
    speech: [
      {
        title: 'Boas-vindas',
        text: `Boa noite a todos na paz do Senhor.

As famílias Flauzino e Castanheira Faria, com alegria e gratidão, damos as boas-vindas a todos vocês que vieram prestigiar e participar desta cerimônia diante de Deus. Que este momento seja de bênçãos, paz e comunhão.`,
      },
    ],
  },
  {
    id: 'step-2',
    order: 2,
    title: 'Apresentação dos pastores',
    participants: 'Entram em dois momentos:',
    participantsList: ['1º — Etevildo da Silveira & Maria Lucia', '2º — Samuel Gonçalves & Márcia da Silveira'],
    noSong: true,
    speech: [
      {
        title: 'Apresentação dos pastores',
        text: `Convidamos, neste momento, aquele que conduzirá esta cerimônia com sabedoria e unção: o servo de Deus que vem em nome do Senhor para abençoar esta união.

Recebamos com gratidão e reverência o Pastor Etevildo da Silveira e sua digníssima esposa Maria Lucia, e também o Pastor Samuel Gonçalves e sua digníssima esposa Márcia da Silveira, instrumentos escolhidos por Deus para proclamar a Palavra e conduzir este momento de aliança diante do altar.`,
      },
    ],
  },
  {
    id: 'step-3',
    order: 3,
    title: 'Entrada da Bíblia',
    participants: 'Bíblia levada pelas crianças — elas deixam a Bíblia no púlpito',
    participantsList: ['Luna', 'Lira'],
    songId: 'ale-a-gloria',
    speech: [
      {
        title: 'Entrada da Bíblia',
        text: `Leva-me em teu coração, guia-me com a Palavra. Luz para o nosso caminho. Onde o amor e a fé se encontram.

Neste momento, recebemos com muito carinho Luna e Lira, trazendo a Bíblia Sagrada, a palavra que vai abençoar e guiar esta nova família.`,
      },
    ],
  },
  {
    id: 'step-4',
    order: 4,
    title: 'Oração inicial',
    noSong: true,
    speech: [
      {
        title: 'Oração inicial',
        text: `[Pastor faz a oração de abertura da cerimônia. Ao final, retorna ao seu lugar e a cerimônia segue normalmente a partir daqui.]`,
      },
    ],
  },
  {
    id: 'step-5',
    order: 5,
    title: 'Avós e Tia',
    participants: 'Entram em sequência:',
    participantsList: ['Pascoal & Sônia', 'Maria (avó paterna)', 'Cleonice (tia)'],
    songId: 'deus-e-deus',
    speech: [
      {
        title: 'Entrada dos avós e tia',
        text: `Senhoras e senhores, preparem os seus corações. Damos início a este momento tão esperado acolhendo aqueles que são a base, a raiz e o início de toda essa história. Com seus passos sábios e corações cheios de orgulho, recebemos os avós dos nossos noivos. Eles que nos ensinam o verdadeiro significado de um amor que atravessa gerações. Uma salva de palmas para a entrada dos avós!

O amor de família é o alicerce de nossas vidas. Para abençoar este caminho, convidamos a tia Cleonice.`,
      },
    ],
  },
  {
    id: 'step-6',
    order: 6,
    title: 'Amigas da noiva',
    participantsList: FLORISTAS_1.nomes,
    songId: 'gratidao',
    speech: [
      {
        title: 'Entrada das amigas da noiva',
        text: `Vocês não foram apenas convidadas para estar aqui hoje; vocês fazem parte da minha história. Dividiram comigo os risos, seguraram minha mão nos momentos de dúvida e celebraram cada passo até este altar. Ter vocês ao meu lado no dia mais feliz da minha vida é a certeza de que a nossa amizade é um presente para sempre. Obrigada por serem meu refúgio e minha alegria. Amo vocês!`,
      },
    ],
  },
  {
    id: 'step-7',
    order: 7,
    title: 'Padrinhos',
    participants: '12 casais de padrinhos, alternando 1 do noivo / 1 da noiva:',
    participantsList: PADRINHOS_ORDEM_ENTRADA,
    songId: 'quao-lindo-esse-nome-e',
    speech: [
      {
        title: 'Entrada dos padrinhos',
        text: `Convidamos, neste momento, aqueles que foram escolhidos com muito carinho para testemunhar este ato de fé e amor: os padrinhos e madrinhas.

Queridos padrinhos, vocês não estão aqui apenas para acompanhar este momento solene, mas para serem colunas de apoio, conselheiros e intercessores na vida deste casal.

A presença de vocês hoje representa laços de afeto, confiança e espiritualidade. Que cada um de vocês seja, ao longo da caminhada dos noivos, um exemplo de amor, amizade e fé.

Sejam bem-vindos a este altar, onde não apenas se firmam alianças humanas, mas também se consagram propósitos diante de Deus.`,
      },
    ],
  },
  {
    id: 'step-8',
    order: 8,
    title: 'Pais do noivo',
    participants: PAIS_NOIVO.join(' e '),
    songId: 'deus-de-promessas',
    speech: [
      {
        title: 'Entrada dos pais',
        text: `Neste momento, convidamos com muito carinho aqueles que foram os primeiros a amar, a cuidar e a sonhar com este dia tão especial.

São eles que guiaram, com fé e dedicação, os passos dos noivos até aqui.

Com gratidão e honra, recebamos os pais do noivo, que agora caminham até este altar para abençoar e testemunhar a união de seu filho, celebrando o fruto do amor que cultivaram em sua família.`,
      },
    ],
  },
  {
    id: 'step-9',
    order: 9,
    title: 'Plaquinha — Criança Safira',
    participants: 'Criança Safira',
    plaquinha: 'Lá vem o noivo',
    noSong: true,
  },
  {
    id: 'step-10',
    order: 10,
    title: 'Noivo — Valtemir Junior',
    participants: 'Valtemir & Idamar',
    songId: 'eu-te-agradeco',
    speech: [
      {
        title: 'Fala da entrada do noivo',
        text: `Que o Senhor seja sempre o alicerce do amor de vocês. Que cada passo da caminhada a dois seja guiado pela fé, pela confiança mútua e pelo propósito de honrar a Deus em cada escolha.

O casamento é uma aliança não apenas entre duas pessoas, mas também com Deus, que abençoa, fortalece e sustenta o amor verdadeiro.

Neste momento vamos receber o noivo:

Valtemir Junior!`,
      },
    ],
  },
  {
    id: 'step-11',
    order: 11,
    title: 'Plaquinha — Criança Lívia',
    participants: 'Criança Lívia',
    plaquinha: 'Aí vem a noiva',
    noSong: true,
  },
  {
    id: 'step-12',
    order: 12,
    title: 'Florista',
    participantsList: FLORISTAS_2.nomes,
    songId: 'santo-espirito',
    speech: [
      {
        title: 'Entrada da florista',
        text: `Com um sorriso no rosto e flores nas mãos, vocês anunciam que o amor chegou. Que a vida de vocês seja sempre colorida e cheia de luz como este momento.

Aparecem flores na terra e chegou o tempo de celebrar. Recebam agora a nossa florista, que vem preparando o caminho com delicadeza, espalhando amor e alegria para o momento mais esperado.`,
      },
    ],
  },
  {
    id: 'step-13',
    order: 13,
    title: 'Noiva — Thamara (Marcha Nupcial → Agnus Dei)',
    participants: `${NOIVOS.noiva} & Creosmar`,
    songId: 'marcha-nupcial',
    phases: [
      {
        label: 'Marcha Nupcial',
        songId: 'marcha-nupcial',
        description:
          'Entra Thamara, acompanhada por Creosmar. David inicia a Marcha Nupcial no violino, Abner e Carol já acompanham.',
      },
      {
        label: 'Agnus Dei (transição, sem corte)',
        songId: 'agnus-dei',
        description:
          'Continuação da entrada de Thamara. Transição musical sem corte brusco: David sustenta o violino, Abner mantém o acompanhamento, Carol prepara a harmonia — depois inicia Agnus Dei. A música termina quando Thamara chegar ao altar.',
      },
    ],
    speech: [
      {
        title: 'Fala da entrada da noiva',
        text: `"Senhoras e senhores, preparem seus corações. O momento mais aguardado está prestes a começar."

Agora, o momento mais esperado desta cerimônia…

Com o coração cheio de fé, amor e emoção, ela entra para viver o cumprimento de uma promessa, para selar diante de Deus e das testemunhas a aliança de um amor verdadeiro.

Ela não traz apenas um vestido branco, mas também a história, os sonhos e a certeza de que o amor tudo suporta, tudo crê e jamais acaba.

Recebamos com todo carinho e reverência a noiva, que caminha rumo ao altar conduzida pelas mãos do Senhor e pelo amor que hoje será consagrado.

Thamara Tallyeli!`,
      },
    ],
    extra: [
      'Arranjo: David inicia a Marcha Nupcial. Thamara e Creosmar iniciam a caminhada. Abner e Carol já acompanham.',
      'Durante a marcha: Abner (violão) e Carol (teclado) continuam. David faz o destaque de violino, do início da Marcha até o final do Agnus Dei — sem interrupção.',
      'Controle: Início da Marcha 00:00 · Entrada de Thamara 00:00 · Ponto médio do corredor --:-- · Preparar final --:-- · Final da Marcha --:--',
    ],
  },
  {
    id: 'step-14',
    order: 14,
    title: 'Cerimônia religiosa',
    participants: 'Ministração — MÚSICA OFF (Momento de reverência, sem música)',
    noSong: true,
    speech: [
      {
        title: 'Passagem da palavra aos pastores',
        text: `Neste momento tão especial, com os corações cheios de gratidão e reverência, passamos a palavra àqueles que conduzirão esta cerimônia diante de Deus.

Com alegria e honra, convidamos o Pastor Samuel Gonçalves e o Pastor Etevildo da Silveira para ministrar esta celebração de amor, fé e aliança — um inicia, o outro completa a mensagem.

Que o Senhor os use como instrumentos para abençoar esta união e falar aos nossos corações.`,
      },
    ],
    extra: [
      'Palavra pastoral',
      'Versículo',
      'Votos do noivo',
      'Votos da noiva',
      'Troca das alianças',
      'Oração',
      'Declaração',
      'Bênção',
    ],
  },
  {
    id: 'step-15',
    order: 15,
    title: 'Alianças',
    participants: 'Porta-aliança: Pedro e Emanuele',
    songId: 'que-bom-que-voce-chegou',
    speech: [
      {
        title: 'Fala das alianças',
        text: `Neste momento, vamos receber um dos símbolos mais sagrados desta cerimônia: as alianças.

Que entrem agora as alianças, sinal visível de uma aliança eterna. Elas representam o amor que não tem fim, o compromisso firmado diante de Deus, a fidelidade e a união que se renovam a cada novo dia.

Que cada olhar se volte com ternura para este gesto tão simples, mas tão cheio de significado.

Recebamos, com carinho e reverência, as alianças que selarão este amor diante do altar do Senhor.`,
      },
    ],
  },
  {
    id: 'step-16',
    order: 16,
    title: 'Encerramento',
    participants: `${NOIVOS.noivo} & ${NOIVOS.noiva}`,
    songId: 'a-bencao',
    speech: [
      {
        title: 'Fala de encerramento',
        text: `Chegamos ao fim desta cerimônia, mas é apenas o começo de uma nova e linda jornada para este casal abençoado por Deus.

Que esta união seja fortalecida a cada dia pelo amor, pela fé e pela presença constante do Senhor.

Agradecemos a todos os presentes por compartilharem este momento tão especial. Que cada um leve consigo a alegria, a paz e o testemunho de um amor firmado no altar e sustentado por Deus.

Que o Senhor os abençoe e os guarde, que faça resplandecer o Seu rosto sobre vocês e lhes conceda paz.

Está encerrada a cerimônia. Que os noivos sigam em amor, sob a graça e a bênção do nosso Deus.`,
      },
    ],
  },
  {
    id: 'step-17',
    order: 17,
    title: 'Saída dos avós e tias',
    participantsList: AVOS_TIA,
    noSong: true,
    isSaida: true,
  },
  {
    id: 'step-18',
    order: 18,
    title: 'Saída dos pais dos noivos',
    participantsList: [PAIS_NOIVO.join(' e '), PAIS_NOIVA.join(' e ')],
    noSong: true,
    isSaida: true,
  },
  {
    id: 'step-19',
    order: 19,
    title: 'Saída dos padrinhos',
    participantsList: PADRINHOS_ORDEM_ENTRADA,
    noSong: true,
    isSaida: true,
  },
  {
    id: 'step-20',
    order: 20,
    title: 'Saída das amigas da noiva',
    participantsList: FLORISTAS_1.nomes,
    noSong: true,
    isSaida: true,
  },
  {
    id: 'step-21',
    order: 21,
    title: 'Saída da florista',
    participantsList: FLORISTAS_2.nomes,
    noSong: true,
    isSaida: true,
  },
  {
    id: 'step-22',
    order: 22,
    title: 'Saída do porta-aliança',
    participants: 'Pedro e Emanuele',
    noSong: true,
    isSaida: true,
  },
  {
    id: 'step-23',
    order: 23,
    title: 'Saída dos noivos',
    participants: `${NOIVOS.noivo} & ${NOIVOS.noiva}`,
    noSong: true,
    isSaida: true,
  },
];

export const DURACAO_TOTAL_PREVISTA = '19min50s a 26min40s';
