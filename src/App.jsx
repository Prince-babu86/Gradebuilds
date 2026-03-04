import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Smartphone,
  Zap,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Reusable components
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    {children}
  </h2>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const Button = ({ children, primary, icon: Icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all ${
      primary
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
    }`}
    {...props}
  >
    {children}
    {Icon && <Icon size={18} />}
  </motion.button>
);

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          GradeBuilds
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-8"
        >
          <a href="#work" className="hover:text-blue-400 transition">Work</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#process" className="hover:text-blue-400 transition">Process</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </motion.div>
        <Button primary>Start a Project</Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Building Modern Websites
            <br />for Growing Businesses
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fast, scalable, and future-proof websites crafted by a developer who
            turns ideas into digital reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button primary icon={ArrowRight}>View My Work</Button>
            <Button icon={ArrowRight}>Start a Project</Button>
          </div>
        </motion.div>

        {/* Animated floating shapes */}
        <div className="relative mt-20 h-64">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute left-1/4 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-xl border border-blue-500/30"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute right-1/4 w-24 h-24 bg-purple-500/20 rounded-full backdrop-blur-xl border border-purple-500/30"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute left-1/2 -translate-x-1/2 w-32 h-32 border border-white/10 rounded-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Grade
              </span>
            </h2>
            <p className="text-gray-300 mb-4">
              I build high-performance websites and web applications that help
              businesses establish a powerful online presence. With a focus on
              speed, scalability, and modern design, I deliver solutions that
              stand out.
            </p>
            <p className="text-gray-300">
              My mission is to help you launch faster and grow smarter. From
              simple business sites to complex SaaS platforms, I've got you
              covered.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-20">
        <SectionTitle>Services I Offer</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Layout, title: "Business Websites", desc: "Professional sites that convert visitors into customers." },
            { icon: Zap, title: "Startup Landing Pages", desc: "High-converting pages to launch your next big idea." },
            { icon: Code, title: "SaaS Platforms", desc: "Scalable web applications with modern architecture." },
            { icon: Layout, title: "Admin Dashboards", desc: "Powerful interfaces to manage your data and users." },
            { icon: Smartphone, title: "Hostel Management", desc: "Complete systems for managing bookings and operations." },
            { icon: Code, title: "Custom Web Apps", desc: "Tailored solutions for unique business needs." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full">
                <service.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="container mx-auto px-6 py-20">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Hostel Management System", tech: "React, Node, MongoDB", desc: "Complete solution for managing hostel operations." },
            { title: "Business Website Template", tech: "Next.js, Tailwind", desc: "Modern template for small businesses." },
            { title: "AI Chat Web App", tech: "OpenAI, Express, React", desc: "Real-time AI chat with custom prompts." },
            { title: "Analytics Dashboard", tech: "Vue, D3, Firebase", desc: "Interactive dashboard for data visualization." },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card>
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(", ").map(t => (
                    <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <Button icon={ArrowRight} className="!px-4 !py-2 text-sm">View Project</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="container mx-auto px-6 py-20">
        <SectionTitle>How I Work</SectionTitle>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {[
            { step: 1, title: "Idea & Planning", desc: "We discuss your vision and goals." },
            { step: 2, title: "Design & UI", desc: "I create stunning, intuitive designs." },
            { step: 3, title: "Development", desc: "Clean, scalable code brings it to life." },
            { step: 4, title: "Launch", desc: "Deploy and celebrate your new site!" },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="container mx-auto px-6 py-20">
        <SectionTitle>Why Choose GradeBuilds</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Fast Delivery", "Modern UI", "Mobile Responsive", "Clean Code", "Scalable Architecture", "SEO Optimized"
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="text-blue-400" size={24} />
              <span className="text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Vision */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future is an Agency</h2>
          <p className="text-gray-300 text-lg mb-6">
            GradeBuilds is evolving into a full-service web development agency.
            We'll help businesses build scalable digital products, from startups
            to enterprises, with a team of experts.
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <span className="text-4xl">🚀</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <SectionTitle>What Clients Say</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map(i => (
            <Card key={i}>
              <p className="text-gray-300 italic mb-4">
                "GradeBuilds delivered an exceptional website ahead of schedule.
                The design is modern and the code is rock solid. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
                <div>
                  <p className="font-semibold">Client Name</p>
                  <p className="text-sm text-gray-400">CEO, Company</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <Card className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-gray-300 mb-8">
            Ready to start your project? Reach out today and let's make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button icon={Mail}>grade@gradebuilds.dev</Button>
            <Button icon={Phone}>+1 (555) 123-4567</Button>
          </div>
          <Button primary icon={ArrowRight} className="w-full sm:w-auto">
            Request a Project
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GradeBuilds
            </div>
            <div className="flex gap-6">
              <a href="#work" className="hover:text-blue-400 transition">Work</a>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#process" className="hover:text-blue-400 transition">Process</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
            <div className="flex gap-4">
              <Github className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} GradeBuilds. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}