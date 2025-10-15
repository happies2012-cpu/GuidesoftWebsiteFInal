import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-[calc(100vh-200px)] flex items-center justify-center bg-background p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNs(var(--gradient-primary-start)/0.1) )" />

      <div className="text-center relative z-10 max-w-xl mx-auto p-8 rounded-xl bg-background/40 backdrop-blur-xl border border-primary/20 shadow-lg">
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/">
          <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;