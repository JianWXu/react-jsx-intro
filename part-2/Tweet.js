const Tweet = ({
  username = "bot1",
  name = "bot1",
  date = "today's date",
  message = "hello world!",
}) => (
  <div>
    <p>
      Tweet message by:
      <span>
        {name} username of <i>{username}</i>
      </span>
    </p>
    <p>{message}</p>
    <p>
      <span>{date}</span>
    </p>
  </div>
);
