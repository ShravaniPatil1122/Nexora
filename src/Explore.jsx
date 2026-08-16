import { useState } from "react";

const fields = [
  {
    name: "Science",
    icon: "🧪",
    color: "science",
  },
  {
    name: "Arts & Design",
    icon: "🎨",
    color: "arts",
  },
  {
    name: "Technology",
    icon: "💻",
    color: "technology",
  },
  {
    name: "Humanities",
    icon: "📖",
    color: "humanities",
  },
  {
    name: "Commerce",
    icon: "💼",
    color: "commerce",
  },
  {
    name: "Mathematics",
    icon: "📐",
    color: "mathematics",
  },
  {
    name: "Sports",
    icon: "⚽",
    color: "sports",
  },
  {
    name: "Performing Arts",
    icon: "🎭",
    color: "performing",
  },
];

function Explore({ onArtsClick, onFieldClick }) {

  // Stores what the user types in the search bar
  const [searchText, setSearchText] = useState("");

  // Filter fields according to search
  const filteredFields = fields.filter((field) =>
    field.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="app">

      <div className="phone-screen">

        {/* Header */}
        <div className="explore-header">

          <h1>Explore</h1>

          <p>
            What interests you today?
          </p>


          {/* SEARCH BAR */}
          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search for fields, roles or skills"
              value={searchText}
              onChange={(e) =>
                setSearchText(e.target.value)
              }
            />

          </div>

        </div>


        {/* Search result message */}
        {searchText && filteredFields.length === 0 && (
          <p
            style={{
              padding: "20px",
              textAlign: "center",
              color: "#777",
            }}
          >
            No fields found.
          </p>
        )}


        {/* Fields */}
        <div className="fields-grid">

          {filteredFields.map((field) => (

            <button
              key={field.name}
              className={`field-card ${field.color}`}

              onClick={() => {

                // Arts & Design gets its own page
                if (field.name === "Arts & Design") {
                  onArtsClick();
                }

                // All other fields open Field Details
                else {
                  onFieldClick(
                    field.name.toLowerCase()
                  );
                }

              }}
            >

              <span className="field-icon">
                {field.icon}
              </span>

              <span className="field-name">
                {field.name}
              </span>

            </button>

          ))}

        </div>


        {/* Bottom Navigation */}
        <div className="bottom-nav">

          <div>
            <span>⌂</span>
            <small>Home</small>
          </div>

          <div className="active">
            <span>⌕</span>
            <small>Explore</small>
          </div>

          <div>
            <span>♙</span>
            <small>Profile</small>
          </div>

          <div>
            <span>▣</span>
            <small>Roadmap</small>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Explore;