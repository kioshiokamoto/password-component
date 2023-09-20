import "./App.css";
import PasswordInput from "./components/PasswordInput/PasswordInput";

function App() {
  return (
    <>
      <h1>Password component</h1>

      <PasswordInput
        options={["hasNumber", "hasNoConsecutiveLetter", "hasSpecialChar"]}
      />
    </>
  );
}

export default App;
