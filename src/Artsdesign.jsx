const artTypes = [
  {
    id: "digital",
    title: "Digital Arts",
    icon: "🎨",
    description:
      "Create visual content using digital tools for websites, apps, games and media.",
    color: "digital",
  },

  {
    id: "spatial",
    title: "Spatial & Physical Arts",
    icon: "🏛️",
    description:
      "Design spaces, objects and physical experiences that people can interact with.",
    color: "spatial",
  },

  {
    id: "fine",
    title: "Fine & Traditional Arts",
    icon: "🖌️",
    description:
      "Explore drawing, painting, sculpture and traditional forms of artistic expression.",
    color: "fine",
  },
];

function ArtsDesign({ onBack, onSelect }) {
  return (
    <div className="app">
      <div className="phone-screen">

        {/* Back button */}
        <button className="back-button" onClick={onBack}>
          ←
        </button>

        {/* Heading */}
        <div className="arts-page-header">
          <h1>Arts & Design</h1>

          <p>
            Choose an area that interests you
          </p>
        </div>

        {/* Art types */}
        <div className="art-types">

          {artTypes.map((art) => (
            <button
              key={art.id}
              className={`art-type-card ${art.color}`}
              onClick={() => onSelect(art.id)}
            >

              <div className="art-type-icon">
                {art.icon}
              </div>

              <div className="art-type-content">

                <h2>{art.title}</h2>

                <p>
                  {art.description}
                </p>

              </div>

              <span className="arrow">
                →
              </span>

            </button>
          ))}

        </div>

        {/* Bottom navigation */}
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

export default ArtsDesign;