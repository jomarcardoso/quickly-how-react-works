const React = (() => {
  let state;

  return {
    useState: (initialState) => {
      state = state || initialState;

      const setState = (newState) => {
        state = newState;
      };

      return [state, setState];
    },
  };
})();

function App() {
  const [value, setValue] = React.useState('');
  const p = document.querySelector('p');
  const input = document.querySelector('input');

  function handleChange(event) {
    setValue(event.target.value);
    input.removeEventListener('input', handleChange);
    App();
  }

  input.addEventListener('input', handleChange);

  p.innerText = value;
}

App();
