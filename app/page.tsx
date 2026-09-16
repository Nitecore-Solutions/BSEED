"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { 
  Atom, Leaf, Lightbulb, BookOpen, Users, ArrowRight, CheckCircle2, 
  Download, Mail, MapPin, Phone, Microscope, Palette, Trophy, Globe,
  Play, Quote, ChevronDown, Star, Award, Target, Zap, Heart,
  Menu, X, Camera, Twitter, Linkedin, Share2, Youtube
} from 'lucide-react';

// --- COMPONENTS ---

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = React.useRef<number>(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = Math.floor(easeOutQuart * end);
      setCount(countRef.current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const SectionHeading = ({ children, subtitle, align = "center", light = false }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`mb-20 ${align === "center" ? "text-center" : "text-left"} max-w-4xl mx-auto`}
  >
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`inline-block py-2 px-4 rounded-full text-xs font-bold tracking-widest uppercase mb-6 ${light ? 'bg-white/10 text-white border border-white/20' : 'bg-blue-100 text-blue-700'}`}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0, originX: align === "center" ? 0.5 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-2 w-32 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 mt-8 rounded-full ${align === "center" ? "mx-auto" : ""}`} 
    />
  </motion.div>
);

const FeatureCard = ({ icon, title, desc, delay, gradient }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -12, transition: { duration: 0.3 } }}
    className="group relative"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
    <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:shadow-3xl transition-all duration-500 h-full">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
      <motion.div 
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
        className="h-1 bg-gradient-to-r from-blue-600 to-green-500 mt-6 rounded-full"
      />
    </div>
  </motion.div>
);

const StatCard = ({ number, label, icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    className="text-center p-8"
  >
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
      {icon}
    </div>
    <div className="text-5xl md:text-6xl font-black text-white mb-3">
      <AnimatedCounter end={number} suffix="+" />
    </div>
    <div className="text-blue-200 font-medium text-lg">{label}</div>
  </motion.div>
);

// --- MAIN PAGE ---

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 origin-left z-[60]" style={{ scaleX }} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 100 ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-700 to-green-600 flex items-center justify-center text-white font-black text-xl shadow-2xl">
              B
            </div>
            <div>
              <h1 className={`font-black text-2xl tracking-tight ${scrollY > 100 ? 'text-slate-900' : 'text-white'}`}>B.S.E.E.D.</h1>
              <p className={`text-[10px] uppercase tracking-widest font-bold ${scrollY > 100 ? 'text-slate-500' : 'text-white/70'}`}>Child Science Project</p>
            </div>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 ${scrollY > 100 ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Involved
            </motion.button>
          </div>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={scrollY > 100 ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrollY > 100 ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="block px-4 py-3 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-600 font-medium">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section 1 - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-green-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-12"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-bold text-sm tracking-wide">Transforming Education Across Bihar Since 2026</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-8 tracking-tight"
          >
            Every Child.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-gradient">Every Dream.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Igniting curiosity through science, nurturing environmental stewardship, and empowering the next generation of innovators in rural India.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-black text-lg overflow-hidden shadow-2xl hover:shadow-white/25 transition-all">
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Mission <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Play className="w-4 h-4 text-slate-900 ml-0.5" />
              </div>
              Watch Film
            </button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-green-900 -mt-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number={50} label="Partner Schools" icon={<BookOpen className="w-8 h-8 text-white" />} delay={0} />
            <StatCard number={5000} label="Students Impacted" icon={<Users className="w-8 h-8 text-white" />} delay={0.1} />
            <StatCard number={120} label="Science Models" icon={<Atom className="w-8 h-8 text-white" />} delay={0.2} />
            <StatCard number={100} label="Percent Free" icon={<Heart className="w-8 h-8 text-white" />} delay={0.3} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                Who We Are
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                Bridging the Gap Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Theory & Practice</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                In rural Bihar, education often stops at textbooks. We believe every child deserves hands-on learning experiences that spark curiosity, foster creativity, and build confidence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                B.S.E.E.D. brings science to life through experiments, environmental programs, and innovation challenges—completely free for government schools.
              </p>
              
              <div className="space-y-4">
                {['100% Free for Schools', 'Government Aligned Curriculum', 'Trained Expert Volunteers', 'Sustainable Long-term Impact'].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-slate-900">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 text-white shadow-2xl">
                    <Microscope className="w-12 h-12 mb-4" />
                    <h3 className="font-bold text-xl mb-2">Science Labs</h3>
                    <p className="text-blue-100 text-sm">Portable equipment for hands-on experiments</p>
                  </div>
                  <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-2xl">
                    <Trophy className="w-12 h-12 mb-4 text-yellow-400" />
                    <h3 className="font-bold text-xl mb-2">Competitions</h3>
                    <p className="text-slate-400 text-sm">District-level exhibitions & awards</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-6 text-white shadow-2xl">
                    <Leaf className="w-12 h-12 mb-4" />
                    <h3 className="font-bold text-xl mb-2">Eco Clubs</h3>
                    <p className="text-green-100 text-sm">Environmental stewardship programs</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 text-white shadow-2xl">
                    <Lightbulb className="w-12 h-12 mb-4" />
                    <h3 className="font-bold text-xl mb-2">Innovation</h3>
                    <p className="text-amber-100 text-sm">Problem-solving challenges</p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Grid - Bento Style */}
      <section id="programs" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="What We Do">
            Comprehensive Learning <br />Programs
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            <FeatureCard 
              icon={<Atom className="w-8 h-8 text-white" />}
              title="Bal Vigyan Exhibitions"
              desc="Annual science fairs featuring working models built from waste materials. Students showcase innovations in physics, chemistry, and biology with live demonstrations."
              gradient="from-blue-600 to-blue-800"
              delay={0}
            />
            <FeatureCard 
              icon={<Leaf className="w-8 h-8 text-white" />}
              title="Environmental Action"
              desc="Kitchen gardens, waste segregation, water conservation projects, and plastic-free campus initiatives led by student Eco-Warrior clubs."
              gradient="from-green-600 to-green-800"
              delay={0.1}
            />
            <FeatureCard 
              icon={<Lightbulb className="w-8 h-8 text-white" />}
              title="Innovation Challenges"
              desc="Identifying local village problems and guiding students to create low-cost technological solutions using design thinking methodology."
              gradient="from-amber-500 to-orange-600"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Palette className="w-8 h-8 text-white" />}
              title="Creative Expression"
              desc="Science poster making, photography contests, slogan writing, and artistic projects that blend creativity with scientific observation."
              gradient="from-purple-600 to-purple-800"
              delay={0.3}
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-white" />}
              title="Girl Child Empowerment"
              desc="Specialized programs in KGBVs focusing on women scientists, career counseling, leadership development, and confidence building."
              gradient="from-pink-600 to-rose-700"
              delay={0.4}
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-white" />}
              title="Talent Recognition"
              desc="Systematic evaluation through quizzes, practical exams, and portfolio reviews with certificates and awards for outstanding performers."
              gradient="from-cyan-600 to-blue-700"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Video/CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Ready to Transform <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Education?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Join hands with us to bring quality science education, environmental awareness, and innovation to thousands of children across Bihar.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <BookOpen className="w-6 h-6" />, text: "Partner Your School" },
                  { icon: <Users className="w-6 h-6" />, text: "Become a Volunteer" },
                  { icon: <Heart className="w-6 h-6" />, text: "Support Our Mission" },
                  { icon: <Globe className="w-6 h-6" />, text: "Spread Awareness" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="font-bold text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-black text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all">
                Start Your Journey Today
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-3xl border-4 border-white/10 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-green-600/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                <img src="/api/placeholder/800/450" alt="Video thumbnail" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-black text-slate-900">15+</div>
                <div className="text-sm text-slate-600 font-bold">Districts Covered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section id="impact" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading subtitle="Our Journey">
            Making a Difference <br />Step by Step
          </SectionHeading>
          
          <div className="relative mt-20">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-green-500 to-blue-600 -translate-x-1/2 hidden md:block" />
            
            {[
              { phase: "Phase 1", title: "Pilot Program Launch", desc: "Started with 5 schools in Patna district, conducting initial science exhibitions and environmental awareness sessions.", year: "2026", side: "left" },
              { phase: "Phase 2", title: "District Expansion", desc: "Scaled to 25+ schools across 5 districts. Introduced innovation challenges and girl child empowerment programs.", year: "2026", side: "right" },
              { phase: "Phase 3", title: "State-wide Rollout", desc: "Expanding to 100+ schools across Bihar. Establishing permanent resource centers and training local educators.", year: "2027", side: "left" },
              { phase: "Phase 4", title: "National Recognition", desc: "Aiming for partnerships with national organizations and replication of model in other states.", year: "2028", side: "right" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex items-center mb-20 ${item.side === "left" ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 hidden md:block" />
                
                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center z-10 shadow-xl">
                  <span className="text-xs font-black text-blue-900 text-center">{item.year}</span>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`flex-1 md:w-1/2 ${item.side === "left" ? "md:pr-16 pl-16 md:pl-0 md:text-right" : "md:pl-16 pl-16"}`}
                >
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">{item.phase}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Moments">
            Glimpses of <br />Inspiration
          </SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {[
              { span: "col-span-2 row-span-2", title: "Science Exhibition 2026" },
              { span: "col-span-1 row-span-1", title: "Kitchen Garden" },
              { span: "col-span-1 row-span-2", title: "Student Projects" },
              { span: "col-span-1 row-span-1", title: "Eco Club Activity" },
              { span: "col-span-2 row-span-1", title: "Innovation Workshop" },
              { span: "col-span-1 row-span-1", title: "Award Ceremony" },
              { span: "col-span-1 row-span-1", title: "Group Discussion" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${item.span} relative group overflow-hidden rounded-3xl bg-slate-200 cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-slate-900 ml-0.5" fill="currentColor" />
                    </div>
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-slate-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Testimonials" light>
            Voices of <br />Change
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { name: "Ramesh Kumar", role: "Headmaster, Govt. Middle School", text: "B.S.E.E.D. transformed our school. Students who never raised their hands are now leading science exhibitions. The confidence they've gained is remarkable.", avatar: "RK" },
              { name: "Priya Sharma", role: "Science Teacher", text: "The working models and hands-on experiments have made science come alive for my students. They now ask questions I never expected!", avatar: "PS" },
              { name: "Anjali Devi", role: "Student, Class 10", text: "I built my first working model on water conservation. Winning the district competition made me believe I can solve real problems in my village.", avatar: "AD" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full">
                  <Quote className="w-10 h-10 text-blue-400 mb-6" />
                  <p className="text-white/90 leading-relaxed mb-8 text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-blue-300 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Trusted By Educational Institutions Across Bihar</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Bihar Education Dept', 'NCERT', 'SCERT Bihar', 'UNICEF', 'Pratham', 'KGBV'].map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors grayscale hover:grayscale-0"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-slate-200" />
                  <span className="text-xs font-bold text-slate-600">{partner}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading subtitle="FAQ">
            Frequently Asked <br />Questions
          </SectionHeading>
          
          <div className="space-y-4 mt-12">
            {[
              { q: "Is there any fee for schools to participate?", a: "No. B.S.E.E.D. is a completely non-profit initiative. All activities, materials, certifications, and support are provided free of charge to government and aided schools." },
              { q: "Who conducts the activities in schools?", a: "Our team consists of trained volunteers including science educators, environmental experts, artists, and subject matter specialists who undergo rigorous verification and training." },
              { q: "Can private schools also join the program?", a: "While our primary focus is rural government schools and KGBVs, we welcome partnerships with private institutions that wish to support our mission through CSR initiatives or resource sharing." },
              { q: "How do I become a volunteer?", a: "Click the 'Get Involved' button and fill out the volunteer application form. We're always looking for passionate teachers, scientists, artists, and coordinators across Bihar." },
              { q: "What age groups do you work with?", a: "We primarily work with students from Class 3 to Class 12, with programs tailored to different age groups and learning levels." },
              { q: "Do you provide certificates to students?", a: "Yes! All participating students receive participation certificates, and outstanding performers receive merit certificates, awards, and special recognition." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading align="left" subtitle="Get In Touch">
                Let's Start a <br />Conversation
              </SectionHeading>
              <p className="text-lg text-slate-600 mb-12">
                Whether you're a school administrator, potential donor, volunteer, or just curious about our work—we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-slate-600">Office No. 12, Education Complex<br/>Patna, Bihar - 800001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">contact@bseed.org.in<br/>partnerships@bseed.org.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">+91 98765 43210<br/>Mon-Sat, 10AM - 6PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-12">
                {[Share2, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:outline-none transition-colors" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:outline-none transition-colors" />
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:outline-none transition-colors" />
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:outline-none transition-colors resize-none" />
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-8">Subscribe to our newsletter for success stories, upcoming events, and ways to get involved.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-white/30" />
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white font-black text-xl">B</div>
                <span className="text-white font-black text-2xl">B.S.E.E.D.</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Bal Vigyan, Paryavaran Evam Shaikshanik Vikas Pariyojana.<br/>
                Empowering rural Bihar through science, environment, and education.
              </p>
              <div className="flex gap-3">
                {[Share2, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {['About Us', 'Our Programs', 'Impact Stories', 'Volunteer', 'Partner Schools', 'Careers'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Programs</h4>
              <ul className="space-y-3 text-sm">
                {['Science Exhibitions', 'Eco Clubs', 'Innovation Lab', 'Girl Child Empowerment', 'Teacher Training', 'Competitions'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy', 'Code of Conduct'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 B.S.E.E.D. All rights reserved.</p>
            <p>Designed with ❤️ for the children of Bihar</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// FAQ Component
function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="font-bold text-slate-900 pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}