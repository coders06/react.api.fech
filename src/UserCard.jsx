function UserCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "15px auto",
        width: "300px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Job: {props.job}</p>
    </div>
  );
}

export default UserCard;