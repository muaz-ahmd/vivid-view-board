const TechnologyStack = () => {
  const technologies = [
    {
      number: 1,
      name: "Python 3.x",
      description: "The foundational programming language for system logic and model creation.",
    },
    {
      number: 2,
      name: "CCTV video streams are processed by OpenCV",
      description: "",
    },
    {
      number: 3,
      name: "NumPy",
      description: "Manages quick matrix operations and numerical calculations for image/AI jobs.",
    },
    {
      number: 4,
      name: "Flask",
      description: "Offers the backend structure and APIs for dashboard and module interactions.",
    },
    {
      number: 5,
      name: "TensorFlow",
      description: "Used to train and run traffic prediction models.",
    },
    {
      number: 6,
      name: "YOLOv11",
      description: "Continuously detects emergency vehicles, traffic density, and vehicles.",
    },
    {
      number: 7,
      name: "MongoDB",
      description: "Holds system logs, historical trends, and real-time traffic data for analysis.",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-12">
      <h1 className="text-4xl font-bold mb-8">Technology Stack</h1>
      
      <div className="max-w-5xl space-y-6">
        {technologies.map((tech) => (
          <div key={tech.number} className="leading-relaxed">
            <span className="font-medium">{tech.number}) {tech.name}</span>
            {tech.description && (
              <>
                <span> → </span>
                <span>{tech.description}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
