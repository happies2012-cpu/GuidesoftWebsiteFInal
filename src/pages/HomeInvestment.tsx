import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Users, DollarSign, BarChart3, PieChart } from "lucide-react";
import { motion, Easing } from "framer-motion";

const HomeInvestment = () => {
  const investmentServices = [
    {
      title: "Instant suggestion",
      description: "Always Ready to support customer"
    },
    {
      title: "Be the best investor", 
      description: "Always Ready to support customer"
    },
    {
      title: "Transaction Advisory",
      description: "Always Ready to support customer"
    }
  ];

  const portfolioItems = [
    {
      title: "Direct Involvement in Assets",
      description: "There are many lipsum of in pass sages available.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
    },
    {
      title: "Rich Experience and Wide Expertise",
      description: "There are many lipsum of in pass sages available.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
    },
    {
      title: "Openness and Transparency", 
      description: "There are many lipsum of in pass sages available.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3"
    },
    {
      title: "Co-investments Solutions",
      description: "There are many lipsum of in pass sages available.", 
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3"
    }
  ];

  const stats = [
    {
      icon: BarChart3,
      number: "193+",
      label: "Project Complete"
    },
    {
      icon: Users,
      number: "519+", 
      label: "Satisfied Clients"
    },
    {
      icon: TrendingUp,
      number: "306+",
      label: "Awards Winning"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(30,41,59,0.9), rgba(30,41,59,0.7)), url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3')"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Reach Your
                <br />
                <span className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white px-4 py-2 rounded">Investment</span>
                <br />
                Goals Today
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium laudantium totam rem aperiam qua inventore
              </p>
              
              <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Free Consultations →
              </Button>
            </motion.div>

            {/* Right Content - Investment Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid gap-6">
                {/* Success Rate Card */}
                <div className="bg-background/40 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-foreground font-semibold">Success Rate</h3>
                    <div className="w-16 h-16 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">89%</span>
                    </div>
                  </div>
                </div>
                
                {/* Client Stats */}
                <div className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-white font-semibold mb-4">256+ Global Clients</h3>
                  <div className="flex space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 bg-white/20 rounded-full" />
                    ))}
                  </div>
                </div>
                
                {/* Circular Design Elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full opacity-80 blur-xl" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/20 rounded-full opacity-80 blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Investment Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as Easing }}
                  className="bg-background/40 backdrop-blur-xl rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow border border-primary/20 hover:border-primary/50 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Company</h2>
              <p className="text-xl opacity-90">Statistics</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg border border-white/20 backdrop-blur-sm bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-xl opacity-80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              The Future Of Investing Platform
              <br />
              Is All Here In Your Financial World
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer bg-background/40 backdrop-blur-xl rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow border border-primary/20 hover:border-primary/50"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary-start/20 to-gradient-primary-end/20 group-hover:opacity-40 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                    Read More
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeInvestment;