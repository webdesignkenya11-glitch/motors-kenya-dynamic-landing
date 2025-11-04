import Contact from "@/components/Contact";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
};

export default ContactPage;
