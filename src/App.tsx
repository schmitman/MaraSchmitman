import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Linkedin, 
  Twitter, 
  Plus,
  ArrowRight
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Fractional", href: "#fractional" },
  { name: "The Practice", href: "#practice" },
  { name: "Writing", href: "#writing" },
];

const services = [
  {
    id: "01",
    title: "Fractional Head of Talent",
    description: "Strategic leadership for scaling organizations that need senior expertise without the full-time overhead.",
  },
  {
    id: "02",
    title: "Talent Org Diagnostic",
    description: "A deep dive into your current people systems to identify bottlenecks and opportunities for growth.",
  },
  {
    id: "03",
    title: "Hiring Process Design",
    description: "Building high-conversion, bias-resistant hiring engines tailored to your company's DNA.",
  },
  {
    id: "04",
    title: "People Advisor for Founders",
    description: "Direct advisory for leadership on culture, organizational design, and critical talent decisions.",
  },
];

const practiceSteps = [
  { title: "Talent OS", desc: "The 100-day people sprint for post-Seed/Series A." },
  { title: "Workshops", desc: "Training the people who hire people." },
  { title: "Market Intel", desc: "Data-driven hiring based on real placements." },
  { title: "Command Center", desc: "Bespoke organizational diagnostics." },
];

const clients = [
  "Mural", "Auth0", "Vercel", "Notion", "Linear", "Mercury"
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-mint selection:text-white font-sans">
      {/* Sidebar Navigation - Desktop */}
      <nav className="fixed left-0 top-0 h-full w-20 border-r border-slate-900/5 hidden lg:flex flex-col items-center py-12 justify-between z-50 bg-white/80 backdrop-blur-md">
        <a href="#" className="font-display italic text-3xl tracking-tighter hover:text-mint transition-colors">MS<span className="text-mint font-sans not-italic text-xl">.</span></a>
        <div className="flex flex-col gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mono-label vertical-text hover:text-mint transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <a href="https://linkedin.com" className="hover:text-mint transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="https://x.com/fenomena" className="hover:text-mint transition-colors"><Twitter className="w-4 h-4" /></a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="lg:hidden fixed top-0 w-full h-16 border-b border-slate-900/5 bg-white/80 backdrop-blur-md z-50 px-6 flex items-center justify-between">
        <a href="#" className="font-display italic text-2xl tracking-tighter">MS<span className="text-mint font-sans not-italic text-lg">.</span></a>
        <a href="mailto:mara@schmitman.com" className="mono-label text-mint font-bold">Contact</a>
      </nav>

      <main className="lg:pl-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 border-b border-slate-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=1000" 
              alt="Botanical" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>

          <div className="max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="mono-label mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-slate-900/20" />
                Organizational Psychologist & Advisor
              </p>
              <h1 className="font-sans text-6xl md:text-[7.5rem] font-light leading-[0.95] tracking-tight mb-12 text-balance">
                Systems for <br />
                <span className="italic font-display font-light text-slate-400">human</span> <br />
                scale<span className="text-mint">.</span>
              </h1>
              <div className="grid md:grid-cols-2 gap-12 items-end">
                <p className="font-serif text-xl md:text-2xl text-slate-500 leading-relaxed max-w-md font-light">
                  18+ years navigating the complexities of culture, hiring, and organizational growth.
                </p>
                <div className="flex flex-col gap-4">
                  <p className="mono-label">Based in Tigre, Argentina</p>
                  <p className="mono-label">Fractional Executive Advisor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By - New Section for Polish */}
        <section className="py-12 border-b border-slate-900/5 px-6 md:px-20 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-30 grayscale">
            <p className="mono-label mr-8">Trusted by founders at</p>
            {clients.map((client) => (
              <span key={client} className="font-sans text-xl font-medium tracking-tighter">{client}</span>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="grid lg:grid-cols-2 border-b border-slate-900/5">
          <div className="p-6 md:p-20 border-b lg:border-b-0 lg:border-r border-slate-900/5">
            <p className="mono-label mb-12">01 / The Foundation</p>
            <h2 className="font-sans text-4xl md:text-6xl font-light tracking-tight mb-12 leading-none">
              Facts over <br />
              <span className="italic font-display font-light text-slate-300">adjectives.</span>
            </h2>
            <div className="space-y-8 font-serif text-lg text-slate-600 leading-relaxed max-w-lg font-light">
              <p>
                I founded Bondy Group in 2008, establishing it as the standard for technical hiring in Latin America. 
                My approach is rooted in organizational psychology—understanding that technology scales, but culture sustains.
              </p>
              <p>
                Today, I operate as an independent advisor, helping founders build sustainable talent engines. 
                I don't just fill roles; I build the capabilities that make great hiring possible.
              </p>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-slate-50">
            <img 
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1000" 
              alt="Serene Nature" 
              className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-900/5">
          {[
            { label: "Experience", value: "18+ Y" },
            { label: "Companies", value: "300+" },
            { label: "Placements", value: "1K+" },
            { label: "Focus", value: "Tech" },
          ].map((stat, i) => (
            <div key={i} className="p-12 border-r last:border-r-0 border-slate-900/5 flex flex-col justify-between hover:bg-slate-50 transition-colors group">
              <p className="mono-label group-hover:text-mint transition-colors">{stat.label}</p>
              <p className="font-sans text-4xl font-light tracking-tight">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Fractional Section */}
        <section id="fractional" className="border-b border-slate-900/5">
          <div className="p-6 md:p-20 border-b border-slate-900/5 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <p className="mono-label mb-12">02 / Fractional Offer</p>
              <h2 className="font-sans text-4xl md:text-7xl font-light tracking-tight leading-none">
                Strategic <br />Advisory<span className="text-mint">.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="font-serif text-lg text-slate-400 italic font-light">
                "Hiring is not a transaction. It's an organizational capability."
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.id} className="p-12 border-b lg:border-b-0 border-r last:border-r-0 border-slate-900/5 hover:bg-slate-950 hover:text-white transition-all duration-500 group">
                <p className="mono-label mb-12 group-hover:opacity-100 transition-opacity">{service.id}</p>
                <h3 className="font-sans text-xl font-medium mb-6 leading-tight uppercase tracking-wide">{service.title}</h3>
                <p className="font-serif text-sm opacity-60 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The Practice - Clean & Systematic */}
        <section id="practice" className="py-32 px-6 md:px-20 relative overflow-hidden border-b border-slate-900/5">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1500" 
              alt="Mountain Range" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-20">
              <div>
                <p className="mono-label mb-12">03 / The Practice</p>
                <h2 className="font-sans text-5xl md:text-8xl font-light tracking-tight mb-8 leading-[0.85]">
                  The <br />System<span className="text-mint">.</span>
                </h2>
                <p className="font-serif text-xl text-slate-500 leading-relaxed font-light">
                  A proprietary framework designed to build capabilities, not just fill seats.
                </p>
              </div>
              <div className="space-y-px bg-slate-100">
                {practiceSteps.map((step, i) => (
                  <div key={i} className="bg-white p-12 flex justify-between items-center group cursor-default hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                    <div>
                      <h4 className="font-sans text-2xl font-medium mb-2 group-hover:text-mint transition-colors tracking-tight">{step.title}</h4>
                      <p className="font-serif text-slate-400 font-light">{step.desc}</p>
                    </div>
                    <Plus className="w-6 h-6 text-slate-200 group-hover:text-mint group-hover:rotate-90 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="grid lg:grid-cols-[0.4fr_0.6fr] border-b border-slate-900/5">
          <div className="p-6 md:p-20 border-b lg:border-b-0 lg:border-r border-slate-900/5">
            <p className="mono-label mb-12">04 / Thinking</p>
            <h2 className="font-sans text-4xl md:text-6xl font-light tracking-tight leading-none">
              Latest <br />Writing<span className="text-mint">.</span>
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { title: "The One-in-Four Rule", date: "2024", platform: "Medium" },
              { title: "Talent OS: The 100-day sprint", date: "2023", platform: "Medium" },
              { title: "Why culture is your only moat", date: "2023", platform: "Substack" },
            ].map((post, i) => (
              <a key={i} href="#" className="p-12 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                <div>
                  <p className="mono-label mb-2 group-hover:opacity-100 transition-opacity">{post.platform} — {post.date}</p>
                  <h4 className="font-sans text-2xl font-medium tracking-tight">{post.title}</h4>
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-10 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section - More Prominent */}
        <section id="contact" className="py-32 px-6 md:px-20 border-b border-slate-900/5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="mono-label mb-12">05 / Contact</p>
            <h2 className="font-sans text-5xl md:text-8xl font-light tracking-tight mb-12 leading-none">
              Ready to <br />scale<span className="text-mint">?</span>
            </h2>
            <p className="font-serif text-xl text-slate-500 mb-12 font-light">
              Currently accepting select fractional advisory roles for late 2026.
            </p>
            <a 
              href="mailto:mara@schmitman.com" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-slate-950 text-white font-sans font-medium hover:bg-mint transition-all group"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-6 md:p-20 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=1000" 
              alt="Botanical Close-up" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 items-end relative z-10">
            <div>
              <h2 className="font-sans text-4xl md:text-8xl font-light tracking-tight mb-12 leading-none">
                MS<span className="text-mint">.</span>
              </h2>
              <p className="mono-label">© 2026 MARA SCHMITMAN — TIGRE, AR</p>
            </div>
            <div className="flex flex-col md:items-end gap-8">
              <div className="flex gap-8">
                <a href="#" className="mono-label hover:text-mint transition-colors">LinkedIn</a>
                <a href="#" className="mono-label hover:text-mint transition-colors">Twitter</a>
                <a href="#" className="mono-label hover:text-mint transition-colors">Medium</a>
              </div>
              <p className="mono-label opacity-20 italic">Built for human scale.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
