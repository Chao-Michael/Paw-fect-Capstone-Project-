import "./Form.scss";

const Form = () => {
  return (
    <section>
      <div className="form-container">
        <h2 className="form-header">What is your paw-fect dog?</h2>
        <form className="form">
          <label htmlFor="form_maintenance" className="form__label">
            Maintenance
          </label>
          <select name="maintenance" className="form__select">
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="form_vocal" className="form__label">
            Vocalness
          </label>
          <select name="vocalness" className="form__select">
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="form_energy" className="form__label">
            Exercise needs
          </label>
          <select name="energy" className="form__select">
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="form_protectiveness" className="form__label">
            Protectiveness
          </label>
          <select name="protectiveness" className="form__select">
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="trainability" className="form__label">
            Trainability
          </label>
          <select name="trainability" className="form__select">
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <button className="form__button">SUBMIT!</button>
        </form>
        <div className="form-description">
          <p className="form-text">Here is a form with all the key things you should think about before getting the perfect furry friend!</p>
          <p className="form-text">Each input field has a scale of 1-5. With 1 being the least and 5 being the most</p>
        </div>
      </div>
    </section>
  );
};

export default Form;
