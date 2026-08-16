import React, { useState } from "react";

import StudentDiscoveryApp from "./pages/StudentDiscoveryApp";
import Explore from "./pages/Explore";
import FieldDetails from "./pages/FieldDetails";
import Artsdesign from "./pages/Artsdesign";
import BhumiActivities from "./pages/BhumiActivities";
import CareerRoadmap from "./pages/CareerRoadmap";

function App() {
  const [page, setPage] = useState("student");
  const [selectedField, setSelectedField] = useState(null);

  // STUDENT DISCOVERY → EXPLORE
  const openExplore = () => {
    setPage("explore");
  };

  const openRoadmap = () => {
  setPage("roadmap");
};

  // EXPLORE → FIELD DETAILS
  const openField = (fieldId) => {
    setSelectedField(fieldId);
    setPage("fieldDetails");
  };

  // EXPLORE → ARTS & DESIGN
  const openArts = () => {
    setPage("arts");
  };

  // FIELD DETAILS / ARTS → BHUMI
  const openChallenge = () => {
    setPage("bhumi");
  };



  // STUDENT DISCOVERY
  if (page === "student") {
  return (
    <StudentDiscoveryApp
      onExplore={openExplore}
      onRoadmap={openRoadmap}
    />
  );
}

  // KSHITIJA - EXPLORE
  if (page === "explore") {
    return (
      <Explore
        onArtsClick={openArts}
        onFieldClick={openField}
        onRoadmapClick={openRoadmap}
      />
    );
  }

  // KSHITIJA - ARTS & DESIGN
  if (page === "arts") {
    return (
      <Artsdesign
        onBack={() => setPage("explore")}
        onChallenge={openChallenge}
      />
    );
  }

  // KSHITIJA - FIELD DETAILS
  if (page === "fieldDetails") {
    return (
      <FieldDetails
        fieldId={selectedField}
        onBack={() => setPage("explore")}
        onChallenge={openChallenge}
      />
    );
  }

  // BHUMI - ACTIVITIES
  if (page === "bhumi") {
    return (
      <BhumiActivities
        onExploreRelated={openRoadmap}
      />
    );
  }

  // SIDDHI - ROADMAP
  if (page === "roadmap") {
    return (
      <CareerRoadmap
        onBack={() => setPage("student")}
      />
    );
  }

  return null;
}

export default App;