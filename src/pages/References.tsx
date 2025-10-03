const References = () => {
  const references = [
    "https://www.sciencedirect.com/science/article/pii/S235214652100675X",
    "https://www.sciencedirect.com/science/article/abs/pii/S0001457520305388",
    "youtube.com/watch?v=7OE0-iXgX0Q&feature=youtu.be",
  ];

  return (
    <div className="min-h-screen bg-background p-12">
      <h1 className="text-4xl font-bold mb-8">References</h1>
      
      <div className="max-w-5xl space-y-4">
        {references.map((ref, index) => (
          <div key={index} className="leading-relaxed">
            <span className="font-medium">{index + 1}</span> - <a href={`https://${ref}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">{ref}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
