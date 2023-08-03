import PerezosoForm from "../PerezosoForm/PerezosoForm";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <div className="form-container">
        <h1 className="form-title">¡Crea tu Perezoso!</h1>
        <PerezosoForm />
      </div>
    </div>
  );
};

export default App;
