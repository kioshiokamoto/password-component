import "./App.css";
import PasswordInput from "./components/PasswordInput/PasswordInput";

function App() {
  return (
    <>
      <h1>Password component</h1>

      <PasswordInput
        options={["hasNumber", "hasSpecialChar", "hasNoConsecutiveLetter"]}
      />
    </>
  );
}

export default App;
