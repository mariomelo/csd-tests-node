Certified Scrum Developer - Módulo de Testes
=========

Durante esse módulo, criaremos um pequeno simulador de cotidiano de um desenvolvedor. Em cada etapa, você terá algumas opções que podem deixar seu dia mais leve ou mais estressante. O seu nível de stress pode variar de 0 a 10 e esse coeficiente influenciará a probabilidade de você se envolver em determinados eventos durante o dia.

- Acordar
- Café da Manhã
- Ida ao Trabalho
- Almoço
- Fim do Expediente
- Volta do Trabalho
- Filme pra relaxar

O módulo de testes do CSD se dividirá em 4 etapas:


## Testes

#### Gerenciamento de dependências

Para escrever e rodar testes é necessário adicionar algum *framework* de testes ao seu classpath. Mas vamos fazer isso de uma maneira mais profissional: usando o [Gradle][1].

O [**NPM**][1] é uma ferramenta de automação de *builds* que faz o trabalho dos conhecidos [Maven][2] e [Ant][3] de uma maneira mais sucinta e auto-explicativa. 
Sua sintaxe é menos verbosa e de fácil compreensão, e por esse motivo o utilizaremos bastante no decorrer do curso.

O arquivo `package.json` é onde declaramos as dependências e tarefas de nossa aplicação. 
Para esse repositório, utilizamos também alguns plugins para facilitar a execução da aplicação.

Vamos utilizar o [Jest][4] para executar os testes. 

Para incluí-lo no projeto basta rodar o seguinte comando:

`npm install --save-dev jest`

ou a versão mais simples:

`npm i -D jest`

A seguinte linha será automaticamente adicionada no arquivo `package.json`:

```json
"devDependencies": {
  "jest": "_número da versão_"
  }
```

Essa linha informa ao npm que nossos testes dependem da biblioteca Jest. 

Com isso, o comando `npm install` instalará o Jest automaticamente. Note que o número da versão passa a ser parte do arquivo `package.json`, e portanto, a dependência passa a ser parte do projeto.

Embora não seja um assunto ligado diretamente ao TDD, o gerenciamento de dependências é extremamente importante para que possamos garantir a uniformidade entre os ambientes de desenvolvimento. Se você desenvolver sempre dessa forma, fica fácil garantir que o servidor de CI e as máquinas de todo o time estão trabalhando com as mesmas dependências.

#### Escrevendo seu primeiro teste

Abra o arquivo `package.json` em um editor de texto qualquer. Repare que existe uma seção _scripts_ que já possui dois comandos:

* `"test": "jest"`
* `"start": "node index.js"`

O comando *start* inicia a penosa semana do desenvolvedor, e alguns comandos já foram implementados. Rode e veja o que acontece!

* `npm start`

Já existem também testes para a rotina do desenvolvedor! Para roda-los, basta executar o comando:

* `npm run test`

Com esse comando rodamos os testes existentes para nosso projeto. No momento temos um único teste para a rotina `despertar`.

Dê uma olhada no arquivo `__tests__/despertar.js` e tente implementar seu primeiro teste para a função `getOptions`.

------------------

## TDD (Ou quase)

#### Implementando a rotina do café da manhã e seu teste logo depois

Para o café da manhã, vamos fazer algo um pouco diferente. Você terá duas opções: um café **light** com frutas e um café **americano** com bacon, ovos, bacon, calabresa, bacon e bacon. Mas dessa vez a pontuação ganha irá variar de acordo com o seu humor atual.

* Para o café **light**:
 * Se sua pontuação de humor atual for inferior a estiver abaixo de 10, comer pouco só vai te deixar mais mal-humorado. Então você perde mais alguns pontos de humor (a seu critério).
 * Caso seu humor esteja acima de 10, você vai ficar ainda mais feliz por conseguir se manter na dieta! Ganhe alguns pontos de humor a seu critério.

*  Para o café **americano**:
 * Se seu humor está abaixo de 10 um café reforçado com bacon pode ser exatamente o que você precisa para reverter a situação. Ganhe alguns pontos de humor a seu critério.
 * Caso seu humor esteja acima de 10, comer demais logo de manhã pode trazer aquele peso na consciência... Penalize seu humor a seu critério.


Após implementar seu acontecimento de café da manhã, adicione-o à lista de acontecimentos no início do arquivo `index.js` e rode a aplicação com o comando `npm start`.

**Hora de escrever o teste!** O café da manhã tem mais variações e dependências que o acontecimento anterior, então seus testes serão um pouco mais complicados.

------------------

[1]: http://www.npmjs.com/
[2]: http://maven.apache.org/
[3]: http://ant.apache.org/
[4]: https://facebook.github.io/jest/
