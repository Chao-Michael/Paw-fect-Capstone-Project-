import DogCard from "../DogCard/DogCard";
import "./DogPage.scss";

const DogPage = () => {
  return (
    <section className="dog-page">
      <h3 className="dog-page__header">The Paw-fect dog for you!</h3>
      <DogCard></DogCard>
    </section>
  );
};

export default DogPage;
