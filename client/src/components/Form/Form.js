import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Form.scss";

const Form = ({ setData }) => {
  const api_key = "MhztgGE749zJ5EmwDSP3V8lPAUsMVcNqMfPofInW";
  const navigate = useNavigate();
  const [maintenance, setMaintenance] = useState("");
  const [vocalness, setVocalness] = useState("");
  const [energy, setEnergy] = useState("");
  const [protectiveness, setProtectiveness] = useState("");
  const [trainability, setTrainability] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const api_url =
      `https://api.api-ninjas.com/v1/dogs?offset=2&` + `shedding=${maintenance}&` + `barking=${vocalness}&` + `energy=${energy}&` + `trainability${trainability}&` + `protectiveness=${protectiveness}`;

    const config = {
      headers: {
        "X-Api-Key": api_key,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(api_url, config)
      .then(res => {
        console.log(res.data);
        if (Array.isArray(res.data) && res.data.length === 0) {
          alert("There is no dog matched for you. Please try makiing adjustments to the form!");
        } else {
          setData(res.data);
          navigate("/dogs");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="form-container">
        <h2 className="form-header">What is your paw-fect dog?</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="maintenance" className="form__label">
            Maintenance
          </label>
          <select id="maintenance" name="maintenance" className="form__select" value={maintenance} onChange={event => setMaintenance(event.target.value)}>
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="vocal" className="form__label">
            Vocalness
          </label>
          <select id="vocal" name="vocalness" className="form__select" value={vocalness} onChange={event => setVocalness(event.target.value)}>
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="energy" className="form__label">
            Exercise needs
          </label>
          <select id="energy" name="energy" className="form__select" value={energy} onChange={event => setEnergy(event.target.value)}>
            <option value="hide"></option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <label htmlFor="protectiveness" className="form__label">
            Protectiveness
          </label>
          <select id="protectiveness" name="protectiveness" className="form__select" value={protectiveness} onChange={event => setProtectiveness(event.target.value)}>
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
          <select id="trainability" name="trainability" className="form__select" value={trainability} onChange={event => setTrainability(event.target.value)}>
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
