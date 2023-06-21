import DogCard from "../DogCard/DogCard";
import "./DogPage.scss";

const DogPage = ({ data }) => {
  return (
    <section className="dog-page">
      <h3 className="dog-page__header">The Paw-fect dog for you!</h3>
      <DogCard image={data.image_link} name={data.name}></DogCard>
    </section>
  );
};

export default DogPage;
