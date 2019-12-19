import React, { useState } from "react";
const AnimalForm = () => {
  const [animal, setAnimal] = useState({ species: "" });

  const handleChange = event => {
    setAnimal({ ...animal, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(animal.species);
  };

  return (
    <div className="animal-form">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Species:
          <input
            type="text"
            name="species"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default AnimalForm;
