const { React, ReactDOM } = window as any;

function Input(props) {
  return <input {...props} />;
}

function App() {
  const [value, setValue] = React.useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <Input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
