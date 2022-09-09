import "./Info.css";

function Info() {
  return (
    <div className="Info">
      <h2>Por que o Cebolinha fala assim?</h2>
      <p>
        O Cebolinha possui dislalia, uma alteração da fala em que a pessoa não
        consegue articular e pronunciar algumas palavras, principalmente quando
        possuem R ou L. No caso do Cebolinha, ele não consegue pronunciar o "R"
        do começo e meio das palavras, pronunciando a letra L em seu lugar.
      </p>
      <h2>Curiosidades</h2>
      <ul>
        <li>
          <p>
            Ao contrário do que muitos pensam, o Cebolinha não troca o R do
            final das palavras.
          </p>
          <img
            className="ExampleComicImage"
            src="https://i.imgur.com/Yz1K27K.png"
            alt="Exemplo do Cebolinha falando R no final"
          />
        </li>
        <li>
          <p>
            Após tratamento fonoaudiológico, o Cebolinha consegue falar
            normalmente na Turma da Mônica Jovem.
          </p>
          <img
            className="ExampleComicImage"
            src="https://i.imgur.com/80XAHFj.png"
            alt="Exemplo do Cebolinha falando normalmente na Turma da Mônica Jovem"
          />
        </li>
        <li>
          <p>
            Nas historinhas mais antigas, os diálogos do Cebolinha usavam aspas
            em volta das palavras "eladas".
          </p>
          <img
            className="ExampleComicImage"
            src="https://i.imgur.com/aGrW184.jpeg"
            alt="Exemplo do Cebolinha falando com aspas em volta das palavras"
          />
        </li>
        <li>
          <p>
            Quando a letra R vem antes de um L nos gibis, ela é substituída por
            um U. No entanto, essa substituição é bem rara!
          </p>
          <img
            className="ExampleComicImage"
            src="https://i.imgur.com/bWrMFwb.png"
            alt="Exemplo de substituição de R por U"
          />
        </li>
        <li>
          <p>
            O problema do Cebolinha é só na fala, então ele escreve e pensa sem
            trocar as letras.
          </p>
          <img
            className="ExampleComicImage"
            src="https://i.imgur.com/Ubmp2Q8.jpeg"
            alt="Exemplo de Cebolinha pensando normalmente"
          />
        </li>
      </ul>
      <h2>Referências</h2>
      <p>
        Matéria no Tua Saúde sobre dislalia:{" "}
        <a href="https://www.tuasaude.com/dislalia/">
          Dislalia: o que é, causas e tratamento.
        </a>
      </p>
      <p>
        Repositório no GitHub usado para calcular a conversão:{" "}
        <a href="https://github.com/theuves-projects/cebolinha">
          Inútil transcritor para o Cebolinha.
        </a>
      </p>
      <p>
        Página do Cebolinha no Fandom da Turma da Mônica:{" "}
        <a href="https://monica.fandom.com/pt-br/wiki/Cebolinha">
          Cebolinha | Turma da Mônica Wiki
        </a>
      </p>
    </div>
  );
}

export default Info;
