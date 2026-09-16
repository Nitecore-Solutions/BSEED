import Image from "next/image";
import Link from "next/link";
import { 
  BeakerIcon, 
  BookOpenIcon, 
  LightBulbIcon, 
  UsersIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline"; // Assuming you have heroicons installed, or use SVGs

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="border-b border-slate-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            <div className="leading-tight">
              <h1 className="font-bold text-xl text-blue-900 tracking-tight">B.S.E.E.D.</h1>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest hidden sm:block">
                Child Science & Environment Project
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#mission" className="hover:text-blue-900 transition-colors">Our Mission</Link>
            <Link href="#programs" className="hover:text-blue-900 transition-colors">Programs</Link>
            <Link href="#impact" className="hover:text-blue-900 transition-colors">Impact</Link>
            <Link href="#schools" className="hover:text-blue-900 transition-colors">For Schools</Link>
            <Link href="#resources" className="hover:text-blue-900 transition-colors">Resources</Link>
            <button className="bg-blue-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 text-xs font-bold uppercase tracking-wide">
              Get Involved
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Active Across Bihar
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                Igniting Curiosity.<br />
                <span className="text-blue-900">Empowering Futures.</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                We bridge the gap between textbook theory and real-world application for students in rural Bihar. Through science, environment, and innovation, we are building a generation of critical thinkers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#schools" className="group bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
                  Partner Your School
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#programs" className="px-8 py-4 rounded-lg font-bold text-slate-700 border border-slate-300 hover:border-blue-900 hover:text-blue-900 transition-all bg-white flex items-center justify-center">
                  Explore Activities
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  <span>Non-Profit Initiative</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  <span>Govt. Aligned Curriculum</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image Placeholder - Professional looking */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-900 rounded-2xl rotate-3 opacity-10 transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-slate-200 rounded-2xl h-[500px] w-full overflow-hidden shadow-2xl border border-slate-300 flex items-center justify-center group">
                 {/* Replace with actual image */}
                 <div className="text-center p-8">
                    <AcademicCapIcon className="w-20 h-20 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">Hero Image: Students engaged in a science experiment</p>
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                    <p className="text-white font-bold text-lg">"Science is not just a subject, it's a way of life."</p>
                    <p className="text-blue-200 text-sm mt-1">— B.S.E.E.D. Philosophy</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CONTEXT / PROBLEM STATEMENT --- */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h3 className="text-blue-900 font-bold tracking-widest uppercase text-sm mb-3">The Challenge</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Textbooks Aren't Enough</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            In many rural schools, education is limited to rote memorization. Students lack access to laboratories, environmental awareness programs, and platforms to showcase their creativity. 
            <strong className="text-slate-800"> B.S.E.E.D. exists to change this narrative.</strong>
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Lack of Practical Exposure",
              desc: "Students learn theories but rarely see them in action. We bring 'Working Models' and live experiments directly to classrooms.",
              icon: <BeakerIcon className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Environmental Disconnect",
              desc: "With climate change rising, rural youth must be stewards of their land. We integrate kitchen gardens and waste management into daily school life.",
              icon: <GlobeAltIcon className="w-8 h-8 text-green-600" />
            },
            {
              title: "Untapped Potential",
              desc: "Every child has a unique talent—be it art, logic, or leadership. Our holistic approach ensures no skill goes unnoticed.",
              icon: <LightBulbIcon className="w-8 h-8 text-amber-500" />
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm">{item.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETAILED PROGRAMS (EXPANDED) --- */}
      <section id="programs" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Our Core Pillars</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Learning Modules</h2>
              <p className="text-slate-400 text-lg">We don't just visit; we integrate. Our programs are designed to run alongside your academic calendar.</p>
            </div>
            <Link href="#" className="text-blue-400 hover:text-white font-medium flex items-center gap-2 transition-colors">
              View Full Curriculum <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program Card 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-blue-900/50 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-700">SCIENCE</span>
                <BeakerIcon className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">Bal Vigyan Exhibitions</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Annual science fairs where students build working models from waste materials. Focus on physics, chemistry, and daily-life applications.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-500" /> Model Making Workshops</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-500" /> District Level Competitions</li>
              </ul>
            </div>

            {/* Program Card 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-green-900/50 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-700">ENVIRONMENT</span>
                <GlobeAltIcon className="w-6 h-6 text-slate-500 group-hover:text-green-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">Eco-Warrior Clubs</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Establishing student-led committees for waste segregation, water conservation, and maintaining school kitchen gardens.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Plastic-Free Campus Drives</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Rainwater Harvesting Projects</li>
              </ul>
            </div>

            {/* Program Card 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-amber-900/50 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-700">INNOVATION</span>
                <LightBulbIcon className="w-6 h-6 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">Innovation Challenges</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Identifying local village problems (e.g., irrigation, lighting) and guiding students to create low-cost technological solutions.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-amber-500" /> Design Thinking Workshops</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-amber-500" /> Prototype Funding Support</li>
              </ul>
            </div>

             {/* Program Card 4 */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-purple-900/50 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-700">ARTS</span>
                <UsersIcon className="w-6 h-6 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">Creative Expression</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Poster making, slogan writing, and science photography contests to blend artistic talent with scientific observation.
              </p>
            </div>

            {/* Program Card 5 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-pink-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-pink-900/50 text-pink-300 text-xs font-bold px-3 py-1 rounded-full border border-pink-700">EMPOWERMENT</span>
                <AcademicCapIcon className="w-6 h-6 text-slate-500 group-hover:text-pink-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">Girl Child Focus</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Specialized sessions in KGBVs focusing on women in science, career counseling, and leadership development.
              </p>
            </div>

            {/* Program Card 6 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-cyan-900/50 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-cyan-700">ASSESSMENT</span>
                <ChartBarIcon className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">Talent Identification</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Systematic evaluation of student progress through quizzes, practical exams, and portfolio reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT METRICS --- */}
      <section id="impact" className="py-20 bg-blue-900 text-white border-y border-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-sm text-blue-100 uppercase tracking-wider font-medium">Partner Schools</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">5,000+</div>
              <div className="text-sm text-blue-100 uppercase tracking-wider font-medium">Students Impacted</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">120+</div>
              <div className="text-sm text-blue-100 uppercase tracking-wider font-medium">Science Models Built</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">100%</div>
              <div className="text-sm text-blue-100 uppercase tracking-wider font-medium">Free Participation</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY / HOW IT WORKS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-blue-900 font-bold tracking-widest uppercase text-sm mb-3">Our Process</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Collaborate With Schools</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Proposal & Approval", desc: "We submit a detailed plan to the school administration for review." },
                { step: "02", title: "Resource Mobilization", desc: "Materials, kits, and volunteer experts are arranged at no cost to school." },
                { step: "03", title: "Execution & Activity", desc: "Interactive sessions, exhibitions, and workshops conducted on-site." },
                { step: "04", title: "Evaluation & Report", desc: "Students receive certificates; School receives a detailed impact report." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg shadow-blue-900/30">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL / QUOTE --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-6xl text-blue-200 font-serif mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-8">
            Before B.S.E.E.D., my students thought science was just a difficult subject to pass. Now, they see it as a tool to solve problems in our own village. The confidence in their eyes during the exhibition was priceless.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
               {/* Placeholder for Principal Photo */}
               <div className="w-full h-full bg-slate-300 flex items-center justify-center text-xs text-slate-500">Photo</div>
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">Ramesh Kumar</div>
              <div className="text-sm text-slate-500">Headmaster, Govt. Middle School, Patna</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESOURCES / DOWNLOADS --- */}
      <section id="resources" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h3 className="text-blue-900 font-bold tracking-widest uppercase text-sm mb-3">Transparency</h3>
              <h2 className="text-3xl font-bold text-slate-900">Documents & Resources</h2>
            </div>
            <p className="text-slate-600 mt-4 md:mt-0 max-w-md text-right">
              We believe in complete transparency. Access our proposals, inspection formats, and annual reports here.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-center gap-4 hover:border-blue-300 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-blue-700">Official Proposal 2026</h4>
                <p className="text-xs text-slate-500 mt-1">PDF • 2.4 MB</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-center gap-4 hover:border-blue-300 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-blue-700">School Inspection Format</h4>
                <p className="text-xs text-slate-500 mt-1">DOCX • 150 KB</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-center gap-4 hover:border-blue-300 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-blue-700">Activity Photo Gallery</h4>
                <p className="text-xs text-slate-500 mt-1">External Link</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is there any fee for schools to participate?", a: "No. B.S.E.E.D. is a completely non-profit initiative. All activities, materials, and certifications are provided free of charge to government and aided schools." },
              { q: "Who conducts the activities?", a: "Our team consists of trained volunteers, science educators, and subject matter experts who undergo a rigorous verification process before interacting with students." },
              { q: "Can private schools join?", a: "While our primary focus is on rural government schools and KGBVs, we welcome partnerships with private institutions that wish to support our mission through CSR or resource sharing." },
              { q: "How do I become a volunteer?", a: "Click the 'Get Involved' button in the navigation bar. We are currently looking for teachers, artists, and science graduates across Bihar." }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-blue-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Inspire the Next Generation?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Whether you are a school administrator, a potential donor, or a passionate volunteer, there is a place for you in the B.S.E.E.D. family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Contact Us Today
            </button>
            <button className="border border-blue-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* --- EXTENDED FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-xs">B</div>
              <span className="text-white font-bold text-lg">B.S.E.E.D.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Bal Vigyan, Paryavaran Evam Shaikshanik Vikas Pariyojana.<br/>
              Registered Non-Profit Organization.<br/>
              Bihar, India.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">f</div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">in</div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">yt</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Organization</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Annual Reports</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Science Exhibitions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Eco-Clubs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Teacher Training</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">KGBV Initiatives</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Innovation Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                <span>Office No. 12, Education Complex,<br/>Patna, Bihar - 800001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                <span>contact@bseed.org.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; 2026 B.S.E.E.D. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with purpose for the children of Bihar.</p>
        </div>
      </footer>
    </div>
  );
}