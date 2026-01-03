import { motion } from 'framer-motion';

const EditorialFooter = () => {
  return (
    <footer className="relative py-16 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <img 
              src="/mit-logo.png" 
              alt="Maximum Impact Travel" 
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" 
            />
            <div className="h-6 w-px bg-border/30" />
            <span className="text-sm text-foreground/70">
              © {new Date().getFullYear()} Maximum Impact Travel
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-foreground/70 italic">
            Designed for transformative travel experiences
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default EditorialFooter;
