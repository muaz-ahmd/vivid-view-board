import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const VideoProcessing = () => {
  const signals = [
    { id: "TS-A01", signal: "Signal = TS-A01" },
    { id: "TS-A02", signal: "Signal = TS-A02" },
    { id: "TS-A03", signal: "Signal = TS-A03" },
    { id: "TS-A04", signal: "Signal = TS-A04" },
  ];

  return (
    <div className="min-h-screen bg-background p-12">
      <h1 className="text-4xl font-bold mb-8">Processed Footages using YOLOv11n</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {signals.map((item) => (
          <Card key={item.id} className="p-6 bg-card border border-border shadow-sm">
            <div className="aspect-video bg-muted mb-4 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-muted-foreground text-center">
                <p className="text-sm mb-2">Video Feed: {item.id}</p>
                <p className="text-xs">(Live YOLO Detection)</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">{item.signal}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Play className="w-4 h-4 mr-1" />
                  Play
                </Button>
                <Button size="sm" variant="outline">
                  <Pause className="w-4 h-4 mr-1" />
                  Pause
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoProcessing;
