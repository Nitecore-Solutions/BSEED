"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Leaf, 
  Lightbulb, 
  BookOpen, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Mail, 
  MapPin, 
  Phone,
  Microscope,
  Palette,
  Trophy,
  Globe
} from 'lucide-react';

// --- UTILITY COMPONENTS ---

const SectionHeading = ({ children, subtitle, align = "center" }: { children: React.ReactNode, subtitle?: string, align?: "left" | "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"} max-w-4xl mx-auto`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-1.5 w-24 bg-gradient-to-r from-blue-600 to-green-500 mt-6 rounded-full ${align === "center" ? "mx-auto" : ""}`} 
    />
  </div>
);

const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group ${className}`}
  >
    {children}
  </motion.div>
);

// --- MAIN PAGE COMPONENT ---

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- MODERN NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20">
              B
            </div>
            <div className="leading-none">
              <h1 className="font-bold text-xl text-slate-900 tracking-tight">B.S.E.E.D.</h1>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-medium">Child Science Project</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {['Mission', 'Programs', 'Impact', 'Join Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-700 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-lg shadow-slate-900/20 text-xs uppercase tracking-wide">
              Get Involved
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div style={{ y: yBackground }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-800 text-sm font-bold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Now Active Across 15+ Districts in Bihar
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Curiosity in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">Every Child.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              We are redefining rural education by bringing hands-on science, environmental stewardship, and creative innovation directly to classrooms across Bihar.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 flex items-center gap-2">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-blue-300 transition-colors">
                View Our Impact
              </motion.button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Non-Profit</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Govt. Aligned</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> 100% Free</div>
            </div>
          </motion.div>

          {/* Hero Visual / Abstract Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 rotate-3 hover:rotate-0 transition-transform duration-500">
               {/* Placeholder for actual hero image */}
               <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                    [High-Quality Photo of Students Doing Experiments]
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-white/50">
                    <p className="text-xs text-slate-500 uppercase font-bold">Current Focus</p>
                    <p className="text-slate-900 font-bold">Rural Science Labs</p>
                  </div>
               </div>
            </div>
            {/* Decorative Elements Behind */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </motion.div>
        </div>
      </section>

      {/* --- THE PROBLEM (CONTEXT) --- */}
      <section id="mission" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Why We Exist">Beyond Textbooks & Rote Learning</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <Microscope className="w-8 h-8 text-blue-600"/>, title: "Theory Without Practice", desc: "Students memorize laws of physics but have never held a magnet or built a circuit. We bridge this gap with portable lab kits." },
              { icon: <Globe className="w-8 h-8 text-green-600"/>, title: "Environmental Disconnect", desc: "Rural youth are closest to nature yet most vulnerable to climate change. We turn schools into hubs of sustainability." },
              { icon: <Lightbulb className="w-8 h-8 text-amber-500"/>, title: "Untapped Creativity", desc: "Standardized testing ignores artistic and innovative potential. Our programs celebrate diverse intelligences." }
            ].map((item, i) => (
              <Card key={i} delay={i * 0.1} className="bg-slate-50 border-none">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENTO GRID PROGRAMS (MODERN LAYOUT) --- */}
      <section id="programs" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-950 opacity-80" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">Our Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Holistic Development Modules</h2>
            <p className="text-slate-400 text-lg max-w-2xl">We don't just conduct events; we build sustainable ecosystems within schools.</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Large Card: Science */}
            <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 border border-blue-700/50 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-400/30 transition-colors" />
              <div>
                <Atom className="w-12 h-12 text-blue-300 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Bal Vigyan Exhibitions</h3>
                <p className="text-blue-100 leading-relaxed mb-6">Annual science fairs where students build working models from waste materials. Focus on physics, chemistry, and daily-life applications. Includes district-level competitions and expert mentorship.</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {['Working Models', 'Live Demos', 'Expert Judging'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-950/50 border border-blue-700 text-xs font-medium text-blue-200">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Medium Card: Environment */}
            <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-1 lg:col-span-1 row-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-between group">
              <Leaf className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-bold mb-3">Eco-Warrior Clubs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Student-led committees for waste segregation, water conservation, and kitchen gardens.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                  <Trophy className="w-4 h-4" /> Green School Certification
                </div>
              </div>
            </motion.div>

            {/* Small Card: Innovation */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-6 border border-slate-700 group">
              <Lightbulb className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Innovation Lab</h3>
              <p className="text-slate-400 text-xs">Solving local village problems through tech.</p>
            </motion.div>

            {/* Small Card: Arts */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-6 border border-slate-700 group">
              <Palette className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Creative Arts</h3>
              <p className="text-slate-400 text-xs">Science posters, photography & slogan writing.</p>
            </motion.div>

            {/* Wide Card: Girl Child */}
            <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 bg-gradient-to-r from-pink-900/40 to-slate-800 rounded-3xl p-8 border border-pink-800/30 flex items-center gap-6">
              <div className="bg-pink-500/20 p-4 rounded-2xl">
                <Users className="w-8 h-8 text-pink-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Girl Child Empowerment</h3>
                <p className="text-slate-300 text-sm">Specialized sessions in KGBVs focusing on women in science, career counseling, and leadership development.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- IMPACT METRICS (ANIMATED COUNTERS) --- */}
      <section id="impact" className="py-20 bg-blue-900 text-white border-y border-blue-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Partner Schools", val: "50+" },
            { label: "Students Impacted", val: "5k+" },
            { label: "Science Models", val: "120+" },
            { label: "Volunteer Hours", val: "800+" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="p-6"
            >
              <div className="text-5xl font-black text-blue-300 mb-2">{stat.val}</div>
              <div className="text-sm text-blue-100 uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- METHODOLOGY TIMELINE --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading subtitle="How We Work">The Collaboration Journey</SectionHeading>
          
          <div className="relative mt-16">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
            
            {[
              { step: "01", title: "Proposal & Approval", desc: "Detailed plan submission to school admin.", side: "left" },
              { step: "02", title: "Resource Mobilization", desc: "Kits, volunteers, and experts arranged free of cost.", side: "right" },
              { step: "03", title: "On-Ground Execution", desc: "Interactive workshops, exhibitions, and labs.", side: "left" },
              { step: "04", title: "Evaluation & Report", desc: "Certificates for students, impact report for school.", side: "right" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center mb-12 ${item.side === "left" ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1" />
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-xs font-bold text-blue-900">{item.step}</span>
                </div>
                
                <div className={`flex-1 pl-20 md:pl-0 ${item.side === "left" ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VOLUNTEER PATHWAYS (EXTENDED CONTENT) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Join The Movement</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  B.S.E.E.D. thrives on the passion of educators, artists, and scientists. Whether you can spare a weekend or commit to a semester, there's a role for you.
                </p>
                
                <div className="space-y-4">
                  {[
                    { role: "Subject Expert", desc: "Guide students in Physics, Chem, Bio experiments." },
                    { role: "Creative Mentor", desc: "Lead art, poster making, and storytelling sessions." },
                    { role: "Field Coordinator", desc: "Manage logistics and school relationships." }
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-bold">{r.role}</h4>
                        <p className="text-slate-400 text-sm">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Volunteer Application</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    <input type="text" placeholder="Last Name" className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  <select className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-500">
                    <option>Select Your Area of Interest</option>
                    <option>Science Education</option>
                    <option>Environmental Activities</option>
                    <option>Arts & Culture</option>
                    <option>Logistics & Management</option>
                  </select>
                  <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                    Submit Interest
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting, you agree to our volunteer code of conduct.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESOURCES & TRANSPARENCY --- */}
      <section id="resources" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Transparency First">Documents & Reports</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Official Proposal 2026", type: "PDF", size: "2.4 MB", icon: <Download className="w-5 h-5" /> },
              { title: "School Inspection Format", type: "DOCX", size: "150 KB", icon: <BookOpen className="w-5 h-5" /> },
              { title: "Annual Impact Report", type: "PDF", size: "5.1 MB", icon: <Trophy className="w-5 h-5" /> }
            ].map((doc, i) => (
              <motion.a 
                key={i}
                href="#"
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{doc.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{doc.type} • {doc.size}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white font-bold">B</div>
              <span className="text-white font-bold text-xl">B.S.E.E.D.</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-md">
              Bal Vigyan, Paryavaran Evam Shaikshanik Vikas Pariyojana.<br/>
              A non-profit initiative dedicated to nurturing scientific temper and environmental responsibility in rural Bihar.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {['Fb', 'Li', 'Tw', 'Ig'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold hover:bg-blue-800 hover:text-white transition-colors cursor-pointer border border-slate-800">
                  {s}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Our Programs', 'School Partnership', 'Volunteer', 'Contact'].map(l => (
                <li key={l}><a href="#" className="hover:text-blue-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Office No. 12, Education Complex,<br/>Patna, Bihar - 800001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>contact@bseed.org.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; 2026 B.S.E.E.D. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}