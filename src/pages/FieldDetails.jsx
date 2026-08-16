const details = {

  /* =====================================
     DIGITAL ARTS
     ===================================== */

  digital: {

    title: "Digital Arts",

    description:
      "Digital artists create visual content using digital tools for various forms of media.",

    icon: "🎨",

    activities: [
      "Create visuals and illustrations",
      "Work with colors, typography & layouts",
      "Design for web, apps, games and more",
    ],

    skills: [
      "Creativity",
      "Visual Thinking",
      "Attention to detail",
      "Design Tools",
      "Communication",
    ],
  },


  /* =====================================
     SPATIAL & PHYSICAL ARTS
     ===================================== */

  spatial: {

    title: "Spatial & Physical Arts",

    description:
      "Spatial and physical artists design objects, environments and experiences that people can interact with.",

    icon: "🏛️",

    activities: [
      "Design physical spaces and environments",
      "Create models and physical objects",
      "Explore architecture and 3D design",
    ],

    skills: [
      "Spatial Thinking",
      "Creativity",
      "Design Thinking",
      "Planning",
      "Problem Solving",
    ],
  },


  /* =====================================
     FINE & TRADITIONAL ARTS
     ===================================== */

  fine: {

    title: "Fine & Traditional Arts",

    description:
      "Fine and traditional artists express ideas through drawing, painting, sculpture and traditional art forms.",

    icon: "🖌️",

    activities: [
      "Create drawings and paintings",
      "Experiment with traditional art techniques",
      "Create sculptures and handmade artwork",
    ],

    skills: [
      "Creativity",
      "Observation",
      "Patience",
      "Visual Expression",
      "Attention to detail",
    ],
  },


  /* =====================================
     SCIENCE
     ===================================== */

  science: {

    title: "Science",

    description:
      "Science explores the natural world through observation, experimentation, analysis and evidence-based thinking.",

    icon: "🧪",

    activities: [
      "Observe and understand natural phenomena",
      "Conduct experiments and analyze results",
      "Explore biology, chemistry, physics and more",
    ],

    skills: [
      "Critical Thinking",
      "Problem Solving",
      "Observation",
      "Research",
      "Data Analysis",
    ],
  },


  /* =====================================
     TECHNOLOGY
     ===================================== */

  technology: {

    title: "Technology",

    description:
      "Technology focuses on using computers, software and digital systems to solve real-world problems.",

    icon: "💻",

    activities: [
      "Build software and digital solutions",
      "Work with programming and technology tools",
      "Solve problems using computational thinking",
    ],

    skills: [
      "Programming",
      "Problem Solving",
      "Logical Thinking",
      "Creativity",
      "Technology Skills",
    ],
  },


  /* =====================================
     HUMANITIES
     ===================================== */

  humanities: {

    title: "Humanities",

    description:
      "Humanities explore human culture, history, ideas, language and society.",

    icon: "📖",

    activities: [
      "Study human culture and society",
      "Explore history, language and literature",
      "Analyze ideas and human experiences",
    ],

    skills: [
      "Communication",
      "Critical Thinking",
      "Research",
      "Writing",
      "Analysis",
    ],
  },


  /* =====================================
     COMMERCE
     ===================================== */

  commerce: {

    title: "Commerce",

    description:
      "Commerce focuses on business, finance, trade and the systems that help organizations operate.",

    icon: "💼",

    activities: [
      "Understand business and financial concepts",
      "Analyze markets and organizations",
      "Explore entrepreneurship and management",
    ],

    skills: [
      "Communication",
      "Numeracy",
      "Business Thinking",
      "Analysis",
      "Decision Making",
    ],
  },


  /* =====================================
     MATHEMATICS
     ===================================== */

  mathematics: {

    title: "Mathematics",

    description:
      "Mathematics develops logical thinking through numbers, patterns, structures and problem solving.",

    icon: "📐",

    activities: [
      "Solve mathematical problems",
      "Explore patterns and relationships",
      "Apply mathematics to real-world situations",
    ],

    skills: [
      "Logical Thinking",
      "Problem Solving",
      "Numerical Reasoning",
      "Analysis",
      "Attention to detail",
    ],
  },


  /* =====================================
     SPORTS
     ===================================== */

  sports: {

    title: "Sports",

    description:
      "Sports involve physical activity, teamwork, competition and developing physical and mental skills.",

    icon: "⚽",

    activities: [
      "Develop physical fitness and coordination",
      "Practice sports and athletic activities",
      "Work as part of a team",
    ],

    skills: [
      "Teamwork",
      "Discipline",
      "Coordination",
      "Leadership",
      "Fitness",
    ],
  },


  /* =====================================
     PERFORMING ARTS
     ===================================== */

  performing: {

    title: "Performing Arts",

    description:
      "Performing arts allow people to express ideas and emotions through music, theatre, dance and performance.",

    icon: "🎭",

    activities: [
      "Perform music, dance or theatre",
      "Develop stage and presentation skills",
      "Express ideas through performance",
    ],

    skills: [
      "Creativity",
      "Expression",
      "Communication",
      "Confidence",
      "Teamwork",
    ],
  },

};


function FieldDetails({ fieldId, onBack }) {

  const field = details[fieldId];


  // Safety check in case a field doesn't exist
  if (!field) {

    return (
      <div className="app">

        <div className="phone-screen">

          <button
            className="back-button"
            onClick={onBack}
          >
            ←
          </button>

          <div style={{ padding: "25px" }}>
            <h1>Field not found</h1>
          </div>

        </div>

      </div>
    );
  }


  return (

    <div className="app">

      <div className="phone-screen details-page">


        {/* Top Bar */}

        <div className="details-top">

          <button
            className="details-back"
            onClick={onBack}
          >
            ←
          </button>

          <button className="heart-button">
            ♡
          </button>

        </div>


        {/* Field Heading */}

        <div className="details-heading">

          <div className="details-icon">
            {field.icon}
          </div>

          <div>

            <h1>
              {field.title}
            </h1>

            <p>
              {field.description}
            </p>

          </div>

        </div>


        {/* What You Do */}

        <section className="details-section">

          <h2>
            What will you do?
          </h2>

          {field.activities.map(
            (activity, index) => (

              <div
                className="activity"
                key={index}
              >

                <span>
                  +
                </span>

                <p>
                  {activity}
                </p>

              </div>

            )
          )}

        </section>


        {/* Skills */}

        <section className="details-section">

          <h2>
            Skills you'll use
          </h2>

          <div className="skills">

            {field.skills.map(
              (skill, index) => (

                <span
                  className="skill"
                  key={index}
                >
                  {skill}
                </span>

              )
            )}

          </div>

        </section>


        {/* Challenge */}

        <section className="challenge">

          <h2>
            Try it Yourself
          </h2>

          <p>
            Take a short activity to experience
            what it's like!
          </p>

          <button className="challenge-button">
            Start a Challenge
          </button>

        </section>


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

export default FieldDetails;