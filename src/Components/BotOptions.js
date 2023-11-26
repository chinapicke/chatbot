
const BotOptions = (props) => {
    const options = [
        { text: "Javascript", handler: props.actionProvider.handleJavascriptQuiz, id: 1 },
        {text: "Python", handler: () => {}, id: 2}

    ]
    
      const optionsMarkup = options.map((option) => (
        <button
          className="option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));
    
      return <div className="options-container">{optionsMarkup}</div>;
};

export default BotOptions