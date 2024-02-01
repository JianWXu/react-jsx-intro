const App = () => (
  <div>
    <Header />
    <NamedComponent name="Jenny" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
