export default function IdravaWebsite() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#EDEDED] font-sans">
      
      {/* NAV */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-[#8A5CFF]">Idrava</h1>
        <nav className="space-x-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#vision" className="hover:text-white">Vision</a>
          <a href="#systems" className="hover:text-white">Systems</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-10 py-24 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Intelligent systems for{" "}
          <span className="text-[#8A5CFF]">perception</span>,{" "}
          <span className="text-[#4B2E83]">reasoning</span>, and{" "}
          <span className="text-[#2DE2E6]">automation</span>
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          Idrava is a next-generation AI systems startup building technologies
          that transform data into understanding, decisions, and action.
        </p>

        <div className="mt-10 space-x-4">
          <button className="px-6 py-3 bg-[#8A5CFF] rounded-xl font-medium hover:opacity-90">
            Explore Idrava
          </button>
          <button className="px-6 py-3 border border-white/20 rounded-xl hover:border-white/40">
            Contact
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-20 border-t border-white/10">
        <h3 className="text-3xl font-bold mb-6">About Idrava</h3>
        <p className="text-white/60 max-w-3xl">
          Idrava is an AI systems initiative focused on building intelligent
          architectures that simulate perception, enhance reasoning, and
          automate decision-making. We operate at the intersection of AI,
          cognitive systems, and applied automation.
        </p>
      </section>

      {/* VISION */}
      <section id="vision" className="px-10 py-20 border-t border-white/10">
        <h3 className="text-3xl font-bold mb-6">Vision</h3>
        <p className="text-white/60 max-w-3xl">
          To build systems that understand the world as humans do — not just
          process data, but interpret meaning, context, and intention.
        </p>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="px-10 py-20 border-t border-white/10">
        <h3 className="text-3xl font-bold mb-10">Core Systems</h3>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-[#8A5CFF] font-semibold mb-2">
              Perception Systems
            </h4>
            <p className="text-white/60 text-sm">
              Models that interpret visual and structured data to extract meaning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-[#8A5CFF] font-semibold mb-2">
              Reasoning Engines
            </h4>
            <p className="text-white/60 text-sm">
              AI systems designed to simulate logical decision-making processes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-[#8A5CFF] font-semibold mb-2">
              Automation Layers
            </h4>
            <p className="text-white/60 text-sm">
              Infrastructure that turns intelligence into real-world action.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 border-t border-white/10 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Idrava</h3>
        <p className="text-white/60 mb-6">
          Building something intelligent? Let’s collaborate.
        </p>

        <a
          href="mailto:contact@idrava.ai"
          className="inline-block px-6 py-3 bg-[#4B2E83] rounded-xl hover:opacity-90"
        >
          Get in Touch
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Idrava. All systems conceptual.
      </footer>
    </div>
  );
}
