function Input({ value = '', onChange }) {
  return React.createElement('input', {
    onChange,
    value,
  });
}

function App() {
  const [value, setValue] = React.useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Input, { value, onChange: handleChange }),
    React.createElement('p', null, value)
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);
