import { motion, Easing } from "framer-motion";

const Index = () => {
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

      <div className="text-center relative z-10 max-w-3xl mx-auto p-8 rounded-xl bg-background/40 backdrop-blur-xl border border-primary/20 shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </motion.div>
  );
};

export default Index;