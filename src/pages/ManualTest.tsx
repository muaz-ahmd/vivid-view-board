import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManualTest = () => {
  const navigate = useNavigate();
  const [trafficSignal, setTrafficSignal] = useState("1");
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

  const handleSubmit = () => {
    navigate("/test-dashboard");
  };

  return (
    <div className="min-h-screen bg-background p-12">
      <h1 className="text-4xl font-bold mb-8">Enter values for manual analysis on demo intersection</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-card border border-border shadow-sm">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <label className="text-lg font-semibold min-w-[140px]">Traffic Signal</label>
              <Input 
                type="number" 
                value={trafficSignal}
                onChange={(e) => setTrafficSignal(e.target.value)}
                className="w-20"
              />
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
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hard-Braking :</span>
                    <span>{metrics.hardBraking}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tailgating :</span>
                    <span>{metrics.tailgating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">No. of Lanes :</span>
                    <span>{metrics.lanes}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Platoon weight :</span>
                    <span>{metrics.platoonWeight}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Average Speed :</span>
                    <span>{metrics.avgSpeed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Queue Length :</span>
                    <span>{metrics.queueLength}</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-secondary border border-border">
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Distance Between Intersection</span>
                <span className="font-semibold">{distance}</span>
              </div>
            </Card>

            <div className="flex justify-end">
              <Button 
                onClick={handleSubmit}
                size="lg"
                className="px-12"
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ManualTest;
