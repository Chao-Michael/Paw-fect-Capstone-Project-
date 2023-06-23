import DogCard from "../DogCard/DogCard";
import "./DogPage.scss";

const DogPage = ({ data }) => {
  return (
    <section className="dog-page">
      <h3 className="dog-page__header">The Paw-fect dog for you!</h3>
      <div className="dog-page__box">
        {data.map((dog, index) => (
          <DogCard key={index} image={dog.image_link} name={dog.name} goodWithKids={dog.good_with_children} goodWithdogs={dog.good_with_other_dogs} playfulness={dog.playfulness} />
        ))}
      </div>
    </section>
  );
};

export default DogPage;
