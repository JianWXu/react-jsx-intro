const Person = ({ name, age, hobbies }) => {
  let nameDisplay;
  if (name.length > 8) {
    nameDisplay = name.slice(0, 6);
  } else {
    nameDisplay = name;
  }

  return (
    <div>
      <p>Learn some information about this person:</p>
      <p>{nameDisplay}</p>
      <b>{age > 18 ? "Please go vote!" : "You must be 18"}</b>
      <div>
        <ul>
          {hobbies.map(h => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
