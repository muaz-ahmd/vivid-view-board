import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ManualTest = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [trafficSignal, setTrafficSignal] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState({
    car: "29",
    bike: "29",
    truck: "29",
    ambulance: "29",
    bus: "29",
  });
  const [metrics, setMetrics] = useState({
    hardBraking: "2",
    tailgating: "2",
    lanes: "2",
    platoonWeight: "2",
    avgSpeed: "2",
    queueLength: "2",
  });
  const [distance, setDistance] = useState("29");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const payload = {
        vehicle_counts: {
          car: parseInt(vehicles.car),
          bike: parseInt(vehicles.bike),
          truck: parseInt(vehicles.truck),
          ambulance: parseInt(vehicles.ambulance),
          bus: parseInt(vehicles.bus),
        },
        hard_brakes: parseInt(metrics.hardBraking),
        tailgating_events: parseInt(metrics.tailgating),
        lanes: parseInt(metrics.lanes),
        platoon_weight: parseFloat(metrics.platoonWeight),
        distance_m: parseFloat(distance),
        avg_speed_m_s: parseFloat(metrics.avgSpeed),
        queue_length: parseFloat(metrics.queueLength),
      };

      const response = await fetch(`http://localhost:8000/intersection1/traffic${trafficSignal}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to process traffic data");
      }

      const result = await response.json();
      
      // Store the result in localStorage
      localStorage.setItem("trafficAnalysisResult", JSON.stringify(result));
      
      toast({
        title: "Success",
        description: "Traffic analysis completed successfully",
      });
      
      navigate("/test-dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to connect to backend. Make sure your FastAPI server is running on localhost:8000",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-12">
      <h1 className="text-4xl font-bold mb-8">Enter values for manual analysis on demo intersection</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-card border border-border shadow-sm">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <label className="text-lg font-semibold min-w-[140px]">Traffic Signal No.</label>
              <Select value={trafficSignal} onValueChange={setTrafficSignal}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-lg font-semibold block mb-4">No. of Vehicles</label>
              <div className="grid grid-cols-5 gap-4">
                <div className="text-center">
                  <label className="block mb-2 font-medium">Car</label>
                  <Input 
                    type="number" 
                    value={vehicles.car}
                    onChange={(e) => setVehicles({...vehicles, car: e.target.value})}
                    className="text-center"
                  />
                </div>
                <div className="text-center">
                  <label className="block mb-2 font-medium">Bike</label>
                  <Input 
                    type="number" 
                    value={vehicles.bike}
                    onChange={(e) => setVehicles({...vehicles, bike: e.target.value})}
                    className="text-center"
                  />
                </div>
                <div className="text-center">
                  <label className="block mb-2 font-medium">Truck</label>
                  <Input 
                    type="number" 
                    value={vehicles.truck}
                    onChange={(e) => setVehicles({...vehicles, truck: e.target.value})}
                    className="text-center"
                  />
                </div>
                <div className="text-center">
                  <label className="block mb-2 font-medium">Ambulance</label>
                  <Input 
                    type="number" 
                    value={vehicles.ambulance}
                    onChange={(e) => setVehicles({...vehicles, ambulance: e.target.value})}
                    className="text-center"
                  />
                </div>
                <div className="text-center">
                  <label className="block mb-2 font-medium">Bus</label>
                  <Input 
                    type="number" 
                    value={vehicles.bus}
                    onChange={(e) => setVehicles({...vehicles, bus: e.target.value})}
                    className="text-center"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-secondary border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-medium">Hard-Braking :</span>
                    <Input 
                      type="number" 
                      value={metrics.hardBraking}
                      onChange={(e) => setMetrics({...metrics, hardBraking: e.target.value})}
                      className="w-20 text-center"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-medium">Tailgating :</span>
                    <Input 
                      type="number" 
                      value={metrics.tailgating}
                      onChange={(e) => setMetrics({...metrics, tailgating: e.target.value})}
                      className="w-20 text-center"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-medium">No. of Lanes :</span>
                    <Input 
                      type="number" 
                      value={metrics.lanes}
                      onChange={(e) => setMetrics({...metrics, lanes: e.target.value})}
                      className="w-20 text-center"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-medium">Platoon weight :</span>
                    <Input 
                      type="number" 
                      value={metrics.platoonWeight}
                      onChange={(e) => setMetrics({...metrics, platoonWeight: e.target.value})}
                      className="w-20 text-center"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-medium">Average Speed :</span>
                    <Input 
                      type="number" 
                      value={metrics.avgSpeed}
                      onChange={(e) => setMetrics({...metrics, avgSpeed: e.target.value})}
                      className="w-20 text-center"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-medium">Queue Length :</span>
                    <Input 
                      type="number" 
                      value={metrics.queueLength}
                      onChange={(e) => setMetrics({...metrics, queueLength: e.target.value})}
                      className="w-20 text-center"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-secondary border border-border">
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Distance Between Intersection</span>
                <Input 
                  type="number" 
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-24 text-center"
                />
              </div>
            </Card>

            <div className="flex justify-end">
              <Button 
                onClick={handleSubmit}
                size="lg"
                className="px-12"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Submit"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ManualTest;
