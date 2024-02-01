const App = () => {
  return (
    <div>
      <Tweet
        username="catlady123"
        name="Jenny"
        date="Jan 31, 2024"
        message="sup"
      />
      <hr></hr>
      <Tweet name="Jenny" message="sup" />
      <hr></hr>
      <Tweet username="Vad" date="Dec 25, 1969" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
