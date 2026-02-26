import { motion } from "motion/react";
import { 
  Brain, 
  Layers, 
  PenTool, 
  Cloud, 
  Lock, 
  Rocket, 
  ArrowRight, 
  ArrowUpRight,
  Building2,
  Truck,
  HeartPulse,
  Wallet,
  ShoppingCart,
  Cpu,
  Layout,
  Zap,
  Database,
  Mail,
  Phone,
  MapPin,
  Menu,
  ChevronRight,
  CheckCircle2,
  RefreshCw,
  Infinity as InfinityIcon
} from "lucide-react";
import { PORTFOLIO_ITEMS, CAPABILITIES, TECH_STACK, DOMAINS } from "./constants";

const IconMap: Record<string, any> = {
  Brain, Layers, PenTool, Cloud, Lock, Rocket,
  Building2, Truck, HeartPulse, Wallet, ShoppingCart,
  Cpu, Layout, Zap, Database
};

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark selection:bg-primary selection:text-background-dark">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Silicodes</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <button className="hidden md:flex items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-colors px-6 py-2.5 text-background-dark text-sm font-bold">
              Start Project
            </button>
            <button className="md:hidden text-white p-2">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                Visionary Engineering
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white">
                Scaling <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Enterprises</span> <br />
                with AI
              </h1>
              <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                We deploy bulletproof software and engineer immersive realities for global reach, taking you from MVP to enterprise scale with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-dark transition-all px-8 py-4 text-background-dark text-base font-bold shadow-[0_0_20px_-5px_rgba(25,204,240,0.5)]">
                  Start Your Project
                  <ArrowRight className="size-5" />
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border border-slate-700 hover:border-primary/50 hover:bg-white/5 transition-all px-8 py-4 text-white text-base font-medium">
                  Explore Portfolio
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden md:block h-[600px] w-full"
            >
              <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md overflow-hidden">
                <img 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEJqGhR8FU5ZOQEu_pMQdCTvOjSKWBI6pokURhGOnJj2PcmXBtObLXdq3sLhGrJde5x6-GE0-XhiwP0jpVvbyXtUdou5aAPQLAfCBtBd-CSr5L7z8M9LHZuF7LGJ_5jSgnRdxe_ekTj8kNdXXzzHhUkKjWAMtgVnSD54AZBTZEBIeh3JP630Qvqe5LkUNl4LwvgX6wr8BSOclhMn_t2qjzZ32VRZ4PNXjLj2EWkA3YWwonKlxYuxdtL_cOMaFAIqyaNeV63i7_VXiQ" 
                  alt="Abstract AI Visualization"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-primary uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xl font-bold text-white">System Optimal</p>
                    </div>
                    <div className="flex gap-1">
                      {[20, 40, 60, 100].map((opacity) => (
                        <div key={opacity} className={`h-8 w-2 bg-primary rounded-sm`} style={{ opacity: opacity / 100 }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-24 px-4 bg-background-dark relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Solutions in Action</h2>
                <p className="text-slate-400 text-lg max-w-xl">Curated digital experiences delivering measurable impact across industries.</p>
              </div>
              <a href="#" className="group flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
                View all case studies
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
              {PORTFOLIO_ITEMS.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-[2rem] overflow-hidden bg-surface-dark border border-white/5 cursor-pointer ${item.featured ? 'md:col-span-2' : ''} ${item.tall ? 'md:row-span-2' : ''}`}
                >
                  <img 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-primary text-sm font-bold mb-2">{item.category}</p>
                        <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-300 line-clamp-2 max-w-md">{item.description}</p>
                      </div>
                      {item.stats && (
                        <div className="hidden md:block text-right">
                          <p className="text-4xl font-bold text-white">{item.stats.value}</p>
                          <p className="text-xs text-slate-400 uppercase tracking-wider">{item.stats.label}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="services" className="py-24 px-4 bg-surface-darker">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineering & Design Capabilities</h2>
              <p className="text-slate-400">The elemental components of our innovation engine.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {CAPABILITIES.map((cap) => {
                const Icon = IconMap[cap.icon];
                return (
                  <motion.div 
                    key={cap.id}
                    whileHover={{ y: -4 }}
                    className={`group aspect-square p-4 rounded-xl transition-all duration-300 flex flex-col justify-between border ${cap.highlight ? 'bg-primary text-background-dark border-primary shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'bg-background-dark border-white/5 hover:border-primary/50'}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-mono ${cap.highlight ? 'text-background-dark/60 font-bold' : 'text-slate-500'}`}>{cap.id}</span>
                      <Icon className={`size-6 ${cap.highlight ? 'text-background-dark' : 'text-primary group-hover:scale-110 transition-transform'}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${cap.highlight ? 'text-background-dark' : 'text-white'}`}>{cap.symbol}</h3>
                      <p className={`text-xs mt-1 ${cap.highlight ? 'text-background-dark/80 font-bold' : 'text-slate-400'}`}>{cap.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Silicodes Edge */}
        <section id="about" className="py-24 px-4 bg-background-dark">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm">The Silicodes Edge</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
                We don't just write code.<br />
                We architect the future.
              </h2>
              <div className="flex flex-col gap-8">
                {[
                  { icon: Brain, title: 'Human-Centered Design', desc: 'Technology serves people, not the other way around. We craft intuitive interfaces that drive adoption and satisfaction.' },
                  { icon: RefreshCw, title: 'End-to-End Lifecycle', desc: 'From the first sketch to continuous deployment and maintenance, we own the process to ensure integrity.' },
                  { icon: InfinityIcon, title: 'Future-Proof Scalability', desc: 'Systems engineered to handle the demands of tomorrow, ensuring your growth is never bottlenecked by tech.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                      <feature.icon className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full bg-surface-darker rounded-[2rem] border border-white/5 p-8 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
              <div className="relative z-10">
                <div className="text-6xl font-black text-white/5 mb-4">LOGIC</div>
                <div className="text-6xl font-black text-white/5 mb-4 pl-12">DESIGN</div>
                <div className="text-6xl font-black text-white/5 mb-4">SCALE</div>
              </div>
              <div className="relative z-10 bg-background-dark/80 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 rounded-full bg-white/10 overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqwXn2RZTQgspOCLAOS0CvL8gVXkTO8jZF3PF_X7XqeyQcVs_7tf1M-ebhkX0kzddKXze2kufjOGp1X1FtrnymvbvXXe_ZqLjU5iHXauQjOAxR5xzyWAxwbJ4tU49_UdYO8TEKUmgeExP4mA8zviBJNVmxj-93tOqQscGAMtY6xB53KIOfqSMNZKYmP9leQXWT6UbGbelysgOafsYSiozkIX4OHR-NeTIEhNabx5xFcc6a3ndQIY0qAVEeY2p_orqZd4ibVtboEuGD" 
                      alt="Sarah Jenkins"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold">Sarah Jenkins</p>
                    <p className="text-xs text-slate-400">CTO, Global Logistics</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"Silicodes transformed our legacy systems into a sleek, AI-driven powerhouse. Their attention to detail in both code and design is unmatched."</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="py-20 border-y border-white/5 bg-background-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-12">Domains We Revolutionize</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {DOMAINS.map((domain) => {
                const Icon = IconMap[domain.icon];
                return (
                  <motion.div 
                    key={domain.name}
                    whileHover={{ scale: 1.05, borderColor: '#19ccf0' }}
                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface-dark border border-white/5 hover:bg-surface-darker w-40 transition-all cursor-default"
                  >
                    <Icon className="size-8 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">{domain.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Infrastructure */}
        <section className="py-24 px-4 bg-surface-darker">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tech Infrastructure</h2>
            <p className="text-slate-400">Our arsenal for building the impossible.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_STACK.map((cluster) => {
              const Icon = IconMap[cluster.icon];
              return (
                <div key={cluster.category} className="bg-background-dark p-6 rounded-2xl border border-white/5">
                  <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
                    <Icon className="size-4" /> {cluster.category}
                  </h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {cluster.items.map((item, idx) => (
                      <li key={item} className={`${idx !== cluster.items.length - 1 ? 'border-b border-white/5 pb-1' : ''}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-background-dark pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
            <img 
              className="w-full h-full object-cover grayscale invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_cbB7MJV9Avxpbr4fgDHfviRzaRK9NxaAxuk4VddEsrXfuHmx2F5iWkz_x-R8mNHkzP4vmyWS3Mexly2fb7lKq5PxlRuUNfkXaFYmupBdpayilTxv6lO_iW7gnZim7NmtJht1cvSQPNAt9LZJd7ksYwgAVOnbFpj0d1fBZ4FejZx8cvgOnfegZsU7PNBl4cpKucYUJgldOfjSbtsfe40mf1hE5cS78qKXa1uORxO_S1ddVRtMpocUdMRvO3vA5dpiDXsvQM4Sj02" 
              alt="Map Background"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-white">Silicodes</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Ready to scale?</h3>
                <div className="max-w-md">
                  <form className="relative" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      className="w-full bg-surface-darker border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all pr-12" 
                      placeholder="Enter your email" 
                      type="email" 
                    />
                    <button className="absolute right-2 top-2 p-2 bg-primary text-background-dark rounded-full hover:bg-white transition-colors" type="submit">
                      <ArrowRight className="size-5" />
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Explore</h4>
                <ul className="space-y-4">
                  {['Our Work', 'Services', 'About Us', 'Careers'].map((link) => (
                    <li key={link}><a className="text-slate-400 hover:text-primary transition-colors" href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li className="text-slate-400 flex items-start gap-3">
                    <MapPin className="size-4 text-primary mt-1" />
                    <span>Blue Area, Islamabad,<br />Pakistan 44000</span>
                  </li>
                  <li className="text-slate-400 flex items-center gap-3">
                    <Mail className="size-4 text-primary" />
                    <a className="hover:text-white" href="mailto:hello@silicodes.com">hello@silicodes.com</a>
                  </li>
                  <li className="text-slate-400 flex items-center gap-3">
                    <Phone className="size-4 text-primary" />
                    <a className="hover:text-white" href="tel:+923001234567">+92 300 123 4567</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-slate-500">
              <p>© 2024 Silicodes. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
