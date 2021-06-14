
# NEWSSAFE(Caesar Cipher)

Este produto é baseado em uma técnica simples de criptação conhecida como "Cifra de César",
em que cada letra do texto original é substituída por outra que se encontra há um deslocamento (offset) mais a frente do mesmo alfabeto. Em resumo, ele codifica ou descodifica um texto.

NEWSSAFE destinado principalmente à equipes jornalísticas e/ou jornalistas individuais   e meios de impresa.


## Objetivos

NEWSSAFE é usado para a comunicação entre membros de equipes jornalísticas, protege informações privilegiadas, informações para matérias inéditas ou sobre entrevistas, programas, etc.,dificultando acesso aos dados pelos concorrentes ou pessoas não autorizadas através da codificação de mensagens e trabalhos escritos.


## Instruções

- Inserir texto a ser codificado ou descodificado na primeira entrada, selecionar o offset  (deslocamento) e apertar o botão criptografar ou descriptografar para acionar; Ver o resultado na janela a direita;

- Codifica/descodifica APENAS letras do alfabeto romano MAIÚSCULO (A~Z), sem acentos;
- Retorna os demais valores iguais ao texto original;
- Uso de offset APENAS positivo;
- IMPORTANTE: Para descodificar uma mensagem deve-se usar o mesmo offset usado para criptografar-lo.


## Processo do desenho

O primeiro desenho do projeto contou com quatro janelas, sendo duas de input e duas de output, mas durante o desenvolvimento dos códigos de botões no index.js, percebeu-se a possibilidade de fazer com apenas duas janelas, sendo a função de codificação ou descodificação determinada pelo botão clicado pelo usuário.
O botão de offset tipo "range" foi usado no intuito de evitar que o usuário inserisse valores não numéricos, nulos e/ou valores equivalentes a deslocamento igual a zero (0,26,52,...) e que portanto, não fariam uma codifição; Os valores desse botão foram limitados aos que abrangem todos os deslocamentos sem repetir (exceção para o offset negativo para o HackerEdition).
Alterações através de feedback:
- O botão de limpar as janelas foi excluído por ser nada ou muito pouco útil. Considerou-se também um possível acionamento não intencional do usuário, apagando o conteúdo e causando transtornos.   
- As janelas de input e output que estavam dispostas verticalmente foram colocadas lado a lado horizontalmente (pensando no usuário de desktop).
- Alteração do fundo por um mais claro.
- Inserção de botão para copiar o código, pensando em textos mais longos.
