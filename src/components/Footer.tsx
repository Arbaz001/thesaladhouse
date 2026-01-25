import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold">The Salad House</span>
        </div>
        <p className="text-background/70 text-sm">
          © {new Date().getFullYear()} The Salad House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
