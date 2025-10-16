"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { generateAvatarUrl } from "@/lib/image-utils";

const testimonials = [
  {
    text: "Guidesoft's custom software development transformed our business processes. Their team delivered a scalable solution that integrated seamlessly with our existing systems.",
    image: generateAvatarUrl("Sarah Johnson", "8B5CF6"),
    name: "Sarah Johnson",
    role: "CTO, TechStartup Inc.",
  },
  {
    text: "The web application they built for us is intuitive and performant. Guidesoft's expertise in React and modern frameworks made the project a success.",
    image: generateAvatarUrl("Michael Chen", "3B82F6"),
    name: "Michael Chen",
    role: "Product Manager, E-commerce Co.",
  },
  {
    text: "Their IT consulting services provided valuable insights that optimized our digital strategy. The team is professional and responsive.",
    image: generateAvatarUrl("Emily Davis", "EC4899"),
    name: "Emily Davis",
    role: "Operations Director, FinTech Firm",
  },
  {
    text: "Guidesoft developed a mobile app that boosted user engagement by 40%. Their agile approach ensured timely delivery.",
    image: generateAvatarUrl("David Lee", "10B981"),
    name: "David Lee",
    role: "CEO, HealthTech Startup",
  },
  {
    text: "The full-stack development services exceeded our expectations. Guidesoft's attention to detail and code quality is outstanding.",
    image: generateAvatarUrl("Lisa Wang", "F59E0B"),
    name: "Lisa Wang",
    role: "VP Engineering, Retail Corp.",
  },
  {
    text: "Their UI/UX design team created an interface that our users love. The collaboration was smooth and creative.",
    image: generateAvatarUrl("Robert Kim", "6366F1"),
    name: "Robert Kim",
    role: "Design Lead, Media Company",
  },
  {
    text: "Guidesoft's dedicated developers helped us scale our platform efficiently. Highly recommend for long-term partnerships.",
    image: generateAvatarUrl("Anna Rodriguez", "14B8A6"),
    name: "Anna Rodriguez",
    role: "Project Manager, Logistics Firm",
  },
  {
    text: "The AI/ML solutions they implemented have given us a competitive edge. Guidesoft's expertise is top-notch.",
    image: generateAvatarUrl("James Patel", "8B5CF6"),
    name: "James Patel",
    role: "Data Scientist, Analytics Co.",
  },
  {
    text: "From concept to deployment, Guidesoft handled our e-commerce platform flawlessly. Excellent value for money.",
    image: generateAvatarUrl("Maria Garcia", "EF4444"),
    name: "Maria Garcia",
    role: "Founder, Online Store",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;