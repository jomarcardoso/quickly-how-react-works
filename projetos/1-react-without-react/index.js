function Input({ value = '', onChange }) {
  setTimeout(() => {
    const input = document.querySelector('#input');

    input.addEventListener('input', onChange);
    input.focus();
    input.setSelectionRange(value.length, value.length);
  });

  return `<input value="${value}" id="input" autofocus />`;
}

const App = (() => {
  let value = '';

  return () => {
    function handleClick(event) {
      value = event.target.value.toUpperCase();
      render();
    }

    return `
      <div class="App">
        <h1>Hello World</h1>
        ${Input({ onChange: handleClick, value })}
        <p>${value}</p>
      </div>
    `;
  };
})();

function render() {
  const root = document.getElementById('root');

  root.innerHTML = App();
}

render();
