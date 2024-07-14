import React from "react";
import { useParams } from "react-router-dom";

const facts = {
  1: "Christopher Columbus made his first voyage in 1492, sailing from Spain to the Bahamas.",
  2: "Columbus made a total of four voyages to the New World between 1492 and 1504.",
  3: "Columbus originally set out to find a direct water route west from Europe to Asia, but he never did.",
  4: "During his voyages, Columbus explored parts of the Caribbean including present-day Cuba and Hispaniola.",
  5: "Despite popular belief, many educated Europeans of Columbus’s time already knew that the Earth was round.",
};

const Fact = () => {
  const { factId } = useParams();
  const fact = facts[factId];

  return (
    <div className="fact">
      {fact ? (
        <p>{fact}</p>
      ) : (
        <p>The fact with id {factId} could not be found.</p>
      )}
    </div>
  );
};

export default Fact;
