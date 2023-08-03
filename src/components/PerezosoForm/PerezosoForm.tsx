import "./PerezosoForm.css";

const PerezosoForm = (): React.ReactElement => {
  return (
    <form className="perezoso-form">
      <div className="perezoso-form__group">
        <label htmlFor="name" className="perezoso-form__label">
          Nombre del Perezoso:
        </label>
        <input type="text" id="name" className="perezoso-form__input" />
      </div>
      <div className="perezoso-form__group">
        <label htmlFor="url" className="perezoso-form__label">
          Url imagen de Perezoso:
        </label>
        <input type="text" id="url" className="perezoso-form__input" />
      </div>
      <div className="perezoso-form__group">
        <label htmlFor="fingers" className="perezoso-form__label">
          Numero de dedos:
        </label>
        <input type="number" id="fingers" className="perezoso-form__input" />
      </div>
      <div className="perezoso-form__group">
        <button className="perezoso-form__button">Crea tu Perezoso!</button>
      </div>
    </form>
  );
};

export default PerezosoForm;
