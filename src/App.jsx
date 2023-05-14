import { Component } from 'react';
import { BsHearts, BsEnvelopeHeart, BsEnvelopeOpenHeart } from 'react-icons/bs';
import './App.css';

export default class App extends Component {
  state = {
    index: 0,
    action: 'Clique no coração..',
  };

  phrases = [
    'Esse ano a senhora sabe que eu estou mais quebrado que o convencional, então esse vai ser seu presente.. rsrs',
    'Mae, você me deu a vida e me ensinou tudo que sei.',
    'Obrigado por dar o seu melhor!',
    'Tudo que sou é graças a você.',
    'Você me inspira todos os dias.',
    'Com você aprendi a nunca desistir,',
    'a trabalhar duro',
    'a respeitar os outros',
    'Me orgulho muito da mãe que eu tenho',
    'Você é a melhor mãe do mundo',
    'Te amo muito!!',
  ];

  phraseGen = () => {
    this.setState(({ index }) => {
      return ({
        index: (index + 1) % (this.phrases.length),
        action: index === this.phrases.length - 2 ? 'Fim!' : 'Clique novamente.',
      });
    });
  };

  render() {
    const { index, action, transition } = this.state;
    return (
      <>
        <header>
          <h1>
            Feliz Dia das Mães!
            <BsHearts className="icon" />
          </h1>
        </header>
        <main className="card">
          <div
            className={ transition ? 'phrase-container transition'
              : 'phrase-container transition' }
          >
            <p>{ this.phrases[index] }</p>
            <p className="clique">{ !index ? 'Clique no coração..' : action }</p>
          </div>
          <button
            type="button"
            className="btn-letter"
            onClick={ this.phraseGen }
          >
            {
              index ? (
                <BsEnvelopeOpenHeart className="letter" />
              ) : (
                <BsEnvelopeHeart className="letter" />
              )
            }
          </button>
        </main>
      </>
    );
  }
}
