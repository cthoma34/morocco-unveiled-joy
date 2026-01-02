const Footer = () => {
  return (
    <footer className="bg-dark-card py-8 px-5 border-t border-border text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Maximum Impact Travel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
