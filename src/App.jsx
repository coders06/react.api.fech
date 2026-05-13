import { useState } from "react";
import UserCard from "./UserCard";

function App() {
  // Counter
  const [count, setCount] = useState(0);

  // Background color
  const [bgColor, setBgColor] = useState("white");

  // Show hide text
  const [showText, setShowText] = useState(false);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>React Practice App</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>

      <button onClick={increase} style={styles.button}>
        +
      </button>

      <button onClick={decrease} style={styles.button}>
        -
      </button>

      <hr />

      {/* Background changer */}
      <h2>Background Color Changer</h2>

      <button
        onClick={() => setBgColor("red")}
        style={styles.button}
      >
        Red
      </button>

      <button
        onClick={() => setBgColor("blue")}
        style={styles.button}
      >
        Blue
      </button>

      <button
        onClick={() => setBgColor("green")}
        style={styles.button}
      >
        Green
      </button>

      <hr />

      {/* Show hide */}
      <h2>Show / Hide Text</h2>

      <button
        onClick={() => setShowText(true)}
        style={styles.button}
      >
        Show
      </button>

      <button
        onClick={() => setShowText(false)}
        style={styles.button}
      >
        Hide
      </button>

      {showText && (
        <p>React juda qiziqarli library</p>
      )}

      <hr />

      {/* User cards */}
      <h1>User Cards</h1>

      <UserCard
        name="Ali"
        age="22"
        job="Frontend Developer"
      />

      <UserCard
        name="Vali"
        age="25"
        job="Backend Developer"
      />

      <UserCard
        name="Sardor"
        age="20"
        job="UI/UX Designer"
      />
    </div>
  );
}

const styles = {
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default App;

