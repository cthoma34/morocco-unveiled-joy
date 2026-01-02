import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-15 py-5 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-heading text-xl md:text-2xl font-semibold text-foreground">
          Maximum Impact <span className="text-primary">Travel</span>
        </a>
        <Button variant="outline" asChild className="hidden sm:inline-flex">
          <a href="#register">Reserve Your Seat</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
