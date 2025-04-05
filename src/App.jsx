import { useEffect, useState } from "react";
import "./App.css";

const startDate = new Date("2024-04-14");

const loveQuotes = [
  "Você é meu lugar favorito no mundo.",
  "Desde que te conheci, meu mundo é mais bonito.",
  "Te amo mais a cada dia que passa.",
  "Com você, todos os dias são especiais. 💖",
  "Meu coração é só seu.",
  "Tudo fica melhor com você por perto.",
  "Meu coração é só seu, desde o primeiro olhar.",
  "Eu te quero pra sempre, gatinha",
  "Eu vou te amar como um idiota ama!",
  "Todos os dias acordo feliz por ter você",
  "Certamente você é o melhor presente que a vida já me deu",
  "Fico ansiosa esperando os dias para te ter sempre comigo",
  "Sou perdidamente apaixonada em cada detalhe seu, gatinha",
  "Tenho a melhor esposa do mundo, e a amo todos os dias",
  "Nós somos um alinhamento milenar, você não acha?",
  "Obrigada por me perguntar a minha sitcom preferida. Eu nunca vou esquecer isso",
  "Te amo e te admiro. Preciso de você sempre",
  "Sempre que pensar em mim, saiba que estou pensando em você também, amor"
];

function generateHearts() {
  const hearts = [];
  for (let i = 0; i < 20; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const size = Math.random() * 20 + 10;
    hearts.push(
      <div
        key={i}
        className="heart"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          fontSize: `${size}px`,
        }}
      >
        ❤️
      </div>
    );
  }
  return hearts;
}

function App() {
  const [days, setDays] = useState(0);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const now = new Date();
    const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    setDays(diff);
    setQuote(loveQuotes[Math.floor(Math.random() * loveQuotes.length)]);
  }, []);

  return (
    <>
      <div className="background-hearts">{generateHearts()}</div>
      <div className="container">
        <h1>💘 Nós duas 💘</h1>
        <img src="/amor.jpeg" alt="Casal" className="couple-photo" />
        <h2>Estamos juntas há</h2>
        <div className="days">{days} dias</div>
        <p className="quote">"{quote}"</p>
        <footer>Feito com muito amor e gayolice 💕</footer>
      </div>
    </>
  );
}

export default App;
