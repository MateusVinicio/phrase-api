import type { NextApiRequest, NextApiResponse} from 'next'

const dataApi = (req: NextApiRequest, res:NextApiResponse) => {
  try {

    const { method} = req;

    if(method !== "GET")
      res.status(405).json({ statusCode: 500, message: "Method not allowed"})

    res.status(200).json(info);
  } catch (error) {
    let message;
    if(error instanceof Error) 
      message = error.message;
    else 
      message = String(error);

    res.status(500).json({ statusCode: 500, message: message})
  }
}

const info = [
  {"id": 1, "text": "É em meio a dificuldade que se encontra a oportunidade"},
  {"id": 2, "text": "O êxito é ir de frustração a frustração sem perder a animação"},
  {"id": 3, "text": "Mesmo que algo pareça difícil, nunca desista antes de tentar"},
  {"id": 4, "text": "Você é o único que entende as suas dificuldades, por isso motive se a prosseguir"},
  {"id": 5, "text": "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso"},
  {"id": 6, "text": "A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis"},
  {"id": 7, "text": "Que os dias bons se tornem rotina, e os ruins se tornem raros"},
  {"id": 8, "text": "É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota"},
  {"id": 9, "text": "Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução"},
  {"id": 10, "text": "Já pensou que você já superou muitas dificuldades até aqui?"},
  {"id": 11, "text": "Suas pequenas vitórias são todas as dificuldades superadas durante sua vida, tenha orgulho delas"},
  {"id": 12, "text": "Cada dificuldade ultrapassada te faz mais forte"},
  {"id": 13, "text": "Desistir não deve ser considerado, mesmo que as coisas não sejam fáceis"},
  {"id": 14, "text": "O êxito é a somatória dos pequenos esforços repetidos diariamente"},
  {"id": 15, "text": "Para quem está iluminado, os dias de luz sempre retornam"},
  {"id": 16, "text": "Conheci o pior das pessoas e o melhor de mim, passando por tempos difíceis"},
  {"id": 17, "text": "Você não vai encontrar ninguém para sorrir por ti, então não deixe de sorrir"},
  {"id": 18, "text": "Mesmo que nem todo dia seja bom, há algo de bom todo dia"},
  {"id": 19, "text": "Em dias difíceis, lembre-se do que Deus já fez por ti. Recorde o que pode te oferecer esperança"},
  {"id": 20, "text": "Da mesma forma que a felicidade não dura para sempre, a tristeza também não"},
  {"id": 21, "text": "As dores não são eternas, se permita, o seu melhor é o suficiente"},
  {"id": 22, "text": "Mesmo que a jornada seja lenta, abrir mão não acelera"},
  {"id": 23, "text": "Que a expectativa por dias melhores nunca nos falte"},
  {"id": 24, "text": "Você é maior do que toda essa tormenta, seja resiliente"},
  {"id": 25, "text": "A vida é um eterno recomeço"},
  {"id": 26, "text": "O fruto do que você escolher hoje, é o que você viverá amanhã"},
  {"id": 27, "text": "Ser uma pessoa melhor é o objetivo do dia"},
  {"id": 28, "text": "Se nada der certo hoje, acorde mais cedo amanhã e tente novamente"},
  {"id": 29, "text": "Você nunca irá fazer nada, se ficar esperando pelas situações perfeitas"},
  {"id": 30, "text": "O futuro ainda não chegou, seja grato pelo agora"},
  {"id": 31, "text": "Para chegar em lugares maravilhosos, é necessário passar por caminhos difíceis"},
  {"id": 32, "text": "As estrelas mais brilhantes são produzidas nas noites mais escuras"},
  {"id": 33, "text": "A diferença entre os dias ruins e bons, é que um ensina e o outro marca"},
  {"id": 34, "text": "A superação da dificuldade depende apenas de você"},
  {"id": 35, "text": "Se não está feliz com algo, mexa se!"},
  {"id": 36, "text": "Mesmo que a conquista venha apenas às vezes, não deixe de lutar"},
  {"id": 37, "text": "Está na hora de deixar o passado no lugar dele e seguir em frente"},
  {"id": 38, "text": "Superação é esquecer o ontem para um amanhã melhor e promitente"},
  {"id": 39, "text": "Domine os seus medos!"},
  {"id": 40, "text": "Você não chegou até aqui por acaso, para tudo existe uma razão. Continue em frente"},
  {"id": 41, "text": "Você terá possibilidade de ganhar, enquanto tiver força para lutar"},
  {"id": 42, "text": "Seus medos morrerão de fome, se alimentar a sua motivação"},
  {"id": 43, "text": "Vencer momentos difíceis pede esforço, entretanto todos somos capacitados para isso, recomeçar e escolher um novo caminho"},
  {"id": 44, "text": "Problemas não são barreiras, mas chances de ímpares de superação e desenvolvimento"},
  {"id": 45, "text": "Você só será vencedor se lutar hoje e sempre, que os fracassos da vida não sejam motivo para tristeza"},
  {"id": 46, "text": "Diversas coisas me fizeram sofrer, entretanto elas somente precisavam acontecer para me fazer crescer"},
  {"id": 47, "text": "Não importa se o obstáculo é forte, difícil ou grande demais, pois a persistência para vencer supera qualquer coisa"},
  {"id": 48, "text": "Conforme você superar cada desafio, você sentirá que com motivação e fé nada é impossível de acontecer"},
  {"id": 49, "text": "Não há outra forma de crescer, senão superar os desafios e os medos. Deixe-os vir"},
  {"id": 50, "text": "Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo"},
  {"id": 51, "text": "Está enganado quem pensa que o meu coração cheio de cicatrizes não tem forças para prosseguir"},
  {"id": 52, "text": "O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos"},
  {"id": 53, "text": "Em um mundo cheio de adversidades, quem não desiste sempre sairá como vencedor no final"},
  {"id": 54, "text": "Até que ser forte seja a sua única opção, você não saberá o quão forte você é"},
  {"id": 55, "text": "As pedras que atrapalham a sua jornada hoje, irão enfeitar a sua estrada amanhã. Siga em frente e não se dê por derrotado"},
  {"id": 56, "text": "Existem momentos em que caímos, mas nos reerguemos melhor do que antes"},
  {"id": 57, "text": "Permita-se começar e recomeçar quantas vezes forem necessárias"},
  {"id": 58, "text": "Apenas grandes guerreiros recebem grandes batalhas"},
  {"id": 59, "text": "As pequenas vitórias devem ser superadas"},
  {"id": 60, "text": "Tentar é sinônimo de vencer"},
  {"id": 61, "text": "Aprenda a ignorar as coisas para ser feliz"},
  {"id": 62, "text": "Quando você aprender que tem que se levantar sozinho, você vai aprender a ser forte"},
  {"id": 63, "text": "Você não está voltando para trás, então não olhe para lá"},
  {"id": 64, "text": "A sua competição é com você mesmo"},
  {"id": 65, "text": "Se não batalhar por nada, você será derrotado por qualquer coisa"},
  {"id": 66, "text": "Você só vai vencer amanhã, se não desistir hoje"},
  {"id": 67, "text": "Respire fundo e continue, é proibido desistir"},
  {"id": 68, "text": "Não tenha medo de crescer devagar, tenha medo somente de ficar parado"},
  {"id": 69, "text": "Se você não tiver animação para acreditar que pode mudar, as coisas vão permanecer iguais"},
  {"id": 70, "text": "Aquilo que você não tenta, é a única coisa impossível"},
  {"id": 71, "text": "Todos os seus amanhã permanecerão iguais a ontem, se você não modificar hoje"},
  {"id": 72, "text": "Não desista agora, cada esforço vai valer a pena"},
  {"id": 73, "text": "Faça o que a maioria não faz, se quiser chegar onde a maioria não chega"},
  {"id": 74, "text": "É o empenho e a persistência que determinam o seu êxito, não a força ou a sorte"},
  {"id": 75, "text": "A primeira pessoa que tem que acreditar nos seus sonhos é você mesmo, não aguarde pelo incentivo dos outros"},
  {"id": 76, "text": "Acredite em você, nos seus sonhos e nas suas ideias"},
  {"id": 77, "text": "Não foque em ser ocupado, foque em ser produtivo"},
  {"id": 78, "text": "Você pode controlar qualquer coisa no futuro, se aprender a se controlar"},
  {"id": 79, "text": "Coloque fé em seus sonhos, e não limites"},
  {"id": 80, "text": "Acredite na sua capacidade e conquiste o seu lugar"},
  {"id": 81, "text": "Você se aproxima cada vez mais do seu objetivo, a cada passo que você dá"},
  {"id": 82, "text": "Entre você e o seu propósito só há uma barreira: você"},
  {"id": 83, "text": "É essencial para a nossa evolução reconhecer quem somos"},
  {"id": 84, "text": "Você é digno de tudo o que almeja e merecedor de tudo o que possui"},
  {"id": 85, "text": "A partir do momento em que você passa a focar em você, a única lamentação que você terá é a de não ter feito isso antes"},
  {"id": 86, "text": "Cruzar lutas, dificuldades e dores faz parte da jornada. Entretanto, é você quem escolhe se vai deixá-los te vencerem ou se é você quem vai vencê-los"},
  {"id": 87, "text": "A pessoa que você escolhe ser, é a única pessoa que você está fadado a se tornar"},
  {"id": 88, "text": "Esteja em paz consigo, vivendo a sua verdade"},
  {"id": 89, "text": "Não é necessário agradar as outras pessoas"},
  {"id": 90, "text": "Confie no seu potencial, encare os seus medos e faça da bravura o seu mantra diário"},
  {"id": 91, "text": "Lute pela sua felicidade escutando o que o seu coração diz"},
  {"id": 92, "text": "É dentro de você que está a superação"},
  {"id": 93, "text": "Dê pequenos passos diariamente"},
  {"id": 94, "text": "O que a mente acredita é o que o corpo vai alcançar"},
  {"id": 95, "text": "Não ache que vai acordar resistente todos os dias, o cansaço também faz parte"},
  {"id": 96, "text": "Os seus resultados são determinados pelas suas atitudes"},
  {"id": 97, "text": "A vida retribui quem pensa positivo"},
  {"id": 98, "text": "Não utilize a régua de outro, para medir a sua evolução"},
  {"id": 99, "text": "Você é a única pessoa capaz que tem capacidade para mudar o seu trajeto, confie mais no seu potencial"},
  {"id": 100, "text": "Não faça sempre o mesmo, se está procurando por resultados distintos"}
]


export default dataApi;
