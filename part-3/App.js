const App = () => (
  <div>
    <Person name="Bob" age="12" hobbies={["baseball", "pokemon", "bugs"]} />
    <Person name="VaroujanM" age="31" hobbies={["badminton", "rage quitting", "sucking dick"]} />
    <Person name="Jenny" age="100" hobbies={["gaming", "pokemon", "eating"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
