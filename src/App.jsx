import { useState } from "react";

import Explore from "./Explore";
import ArtsDesign from "./ArtsDesign";
import FieldDetails from "./FieldDetails";

import "./App.css";


function App() {

  // Current page
  const [page, setPage] = useState("explore");

  // Selected field
  const [selectedField, setSelectedField] =
    useState(null);


  /*
   * PAGE 2
   * Arts & Design
   */

  if (page === "arts") {

    return (
      <ArtsDesign

        // Back to Explore
        onBack={() => {
          setPage("explore");
        }}

        // Select an art type
        onSelect={(fieldId) => {

          setSelectedField(fieldId);

          setPage("details");

        }}

      />
    );
  }


  /*
   * FIELD DETAILS PAGE
   */

  if (page === "details") {

    return (
      <FieldDetails

        fieldId={selectedField}

        // Back button
        onBack={() => {

          // If it was an art field,
          // go back to Arts & Design
          if (
            selectedField === "digital" ||
            selectedField === "spatial" ||
            selectedField === "fine"
          ) {
            setPage("arts");
          }

          // Otherwise go back to Explore
          else {
            setPage("explore");
          }

        }}

      />
    );
  }


  /*
   * PAGE 1
   * Explore
   */

  return (
    <Explore

      // Arts & Design button
      onArtsClick={() => {
        setPage("arts");
      }}


      // Science / other fields
      onFieldClick={(fieldName) => {

        setSelectedField(fieldName);

        setPage("details");

      }}

    />
  );
}

export default App;