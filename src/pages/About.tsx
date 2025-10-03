const About = () => {
  return (
    <div className="min-h-screen bg-background p-12">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      
      <div className="max-w-5xl space-y-6 text-foreground">
        <p className="leading-relaxed">
          Traffic congestions, road accidents and inefficient traffic signal management are some issues that Indian Urban cities face consistently. The traditional timer- based traffic lights fail to adapt to real time conditions. This leads to unwanted delays, wasted fuel, increased pollution, and safety risks. Odisha is also one of the states which face these persistent issues.
        </p>
        
        <p className="leading-relaxed">
          To overcome this issue, our team has come up with an AI - Powered Adaptive Traffic Management System that combines computer vision (YOLO), machine learning models, IoT sensors and Vehicle - to - infrastructure communication to improve the traffic flow and reduce accidents, known as R.O.A.D.S.
        </p>
        
        <p className="leading-relaxed">
          The core components of this idea are as follows -
        </p>
        
        <div className="space-y-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">1) Smart Traffic Signal Control</h2>
            
            <p className="mb-3">This is a two-layer framework which includes the following -</p>
            
            <div className="space-y-4 ml-4">
              <div>
                <p className="font-medium mb-2">i) Phase 1 :- Efficiency Optimization (T_clear formula) -</p>
                <p className="leading-relaxed">
                  It considers the vehicle queues and drivers' reaction delays and calculate the appropriate green light duration. The formula incorporates initial driver's reaction time for the first few cars, which is followed by a consistent discharge interval for the subsequent vehicles. The system sums these delays and calculates the exact clearance time for given queue length. This prevents unnecessary idling and hence the precise duration of green time, which increases the traffic capacity by up to 25%.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">ii) Phase 2 :- The Intelligent Brain (CPS Formula) -</p>
                <p className="leading-relaxed mb-2">It decides which lane should get priority using a score model based on :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Vehicle density and emergency vehicle detection: Higher priority is assigned to the lanes which has a higher density of vehicle or may contain emergency vehicle like ambulance/ fire truck.</li>
                  <li>Safety Penalties: This reduces the score of those lanes which shows a tendency of risky behaviours like hard braking/overspeeding.</li>
                  <li>Platoon Bonuses: Dynamic bonuses are rewarded to lanes expecting imminent inflows of vehicles from upstream intersections.</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4 leading-relaxed">
              Together, Phase 1 ensures efficiency at the micro level. Whereas, the Phase 2 provides intelligence at the macro level. With the help of the two, we can achieve safety improvements and smoother traffic flow.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">2) YOLO - Based Vehicle and Incident Detection</h2>
            <p className="leading-relaxed">
              YOLO (You Look Once), is a detection algorithm for real-time object detection. It processes entire images in one go, divides them into grids, detects objects, and predicts bounding boxes with high speed and accuracy. These features make it ideal for analyzing live CCTV footage, detecting vehicle types, and monitoring traffic behavior.
            </p>
            <p className="leading-relaxed mt-2">
              We'll be using a real time camera feed analysis to detect vehicles, pedestrians and potential accident - prone areas.
            </p>
            <p className="leading-relaxed mt-2">
              Our system will also identify emergency vehicles and act accordingly to provide priority to the required lane.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">3) Traffic Prediction and Dynamic Management</h2>
            <p className="leading-relaxed">
              Using Machine and deep learning like camera, IoT sensors, GPS, etc., the historical and live data will be analysed to predict the congestion 30-60 minutes ahead.
            </p>
            <p className="leading-relaxed mt-2">
              A multi agent system will prevent any jams to be formed.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">4) Vehicle - to - Infrastructure Communication</h2>
            <p className="leading-relaxed">
              Cars that are connected to the system will get real - time signal updates about green light countdown and also suggestions regarding rerouting.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Mentioned below are the impacts expected from our system</h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Reduced Congestion - The travel times will be shorter due to adaptive and coordinated signals.</li>
              <li>Enhanced Safety - With the help of monitoring of driver's behaviour and proactive detection of risks, accidents will be lowered.</li>
              <li>Faster Emergency Response - A green corridor will be created for ambulance/ fire trucks.</li>
              <li>Environmental Benefits - It will reduce emissions and also lead to lower fuel consumption.</li>
              <li>Scalable Model - We'll start with Odisha and replicate the framework across India.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
