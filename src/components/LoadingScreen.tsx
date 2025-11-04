import { Truck } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative">
          <Truck className="w-16 h-16 text-accent animate-bounce mx-auto" />
          <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Loading...</h2>
          <p className="text-muted-foreground">Preparing your equipment selection</p>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
