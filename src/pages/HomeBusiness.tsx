import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Users, Lightbulb } from "lucide-react";
import { motion, Easing } from "framer-motion";

const HomeBusiness = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Development Strategy Buildup",
      description: "Perspiciatis undemnis natus voluptatem accusantium doloremque laudante.",
    },
    {
      icon: Target,
      title: "Rise Business Marketing Growth Planning", 
      description: "We denounce with righteous and dislike men who beguiled and demoralize.",
    },
    {
      icon: Lightbulb,
      title: "Self-development Build and Camping",
      description: "Perspiciatis undemnis natus voluptatem accusantium doloremque laudante.",
    }
  ];

  const reasons = [
    {
      title: "Reasons to Explain Fast Business",
      description: "Sed perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium rem aperiam, eaque wipsa quae abilloey inventore veritatis et architecto."
    },
    {
      title: "Guidance from our office agents", 
      description: "Sed perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium rem aperiam, eaque wipsa quae abilloey inventore veritatis et architecto."
    },
    {
      title: "What we are capable to usually",
      description: "Sed perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium rem aperiam, eaque wipsa quae abilloey inventore veritatis et architecto."
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
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3')"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20">
                → Popular Consulting Agency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Solution <span className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white px-4 py-2 rounded">Business</span>
              <br />
              & Consulting
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Cards Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-background relative -mt-32 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as Easing }}
                className="bg-background/40 backdrop-blur-xl rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow border border-primary/20 hover:border-primary/50 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reasons Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as Easing }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-background/40 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-primary/20 shadow-xl">
                  <Users className="h-32 w-32 text-primary opacity-20" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">GS</span> {/* Reverted to GS */}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as Easing }}
              className="space-y-8"
            >
              {reasons.map((reason, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.1, ease: "easeOut" as Easing }} className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 via-gradient-primary-end/20 to-cyan-500/20 opacity-30 backdrop-blur-sm" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as Easing }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's work together to build innovative solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeBusiness;