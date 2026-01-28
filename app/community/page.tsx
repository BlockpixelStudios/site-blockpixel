import Image from 'next/image';

export default function CommunityPage() {
  const discordLink = "https://discord.gg/EdKAMp7yAJ";

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Efeito de iluminação de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blockpixel-primary/20 blur-[150px] rounded-full -z-10" />

      <section className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 border border-blockpixel-primary/50 rounded-full text-blockpixel-primary text-xs font-bold tracking-widest uppercase mb-6 bg-blockpixel-primary/5">
          Join the Multiverse
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
          NOSSA <span className="text-blockpixel-primary">COMUNIDADE</span>
        </h1>

        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Onde jogadores, desenvolvedores e criadores se encontram. Participe de eventos exclusivos, receba atualizações antecipadas e ajude a moldar o futuro da Blockpixel.
        </p>

        {/* Card do Discord */}
        <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-10 md:p-16 rounded-[40px] backdrop-blur-xl shadow-2xl relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
             <div className="w-24 h-24 bg-[#5865F2] rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(88,101,242,0.5)] animate-bounce">
                <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
                </svg>
             </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">🧊┇Blockpixel Studios</h2>
          <p className="text-white/40 mb-10 uppercase tracking-widest text-sm font-bold">Oficial Discord Server</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="block text-blockpixel-primary font-bold text-xl">+60</span>
              <span className="text-xs text-white/40">Membros</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="block text-green-400 font-bold text-xl">Online</span>
              <span className="text-xs text-white/40">Agora</span>
            </div>
            <div className="hidden md:block p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="block text-white font-bold text-xl">24/7</span>
              <span className="text-xs text-white/40">Suporte</span>
            </div>
          </div>

          <a 
            href={discordLink} 
            target="_blank" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(88,101,242,0.3)]"
          >
            ENTRAR NO SERVIDOR
          </a>
        </div>
      </section>
    </main>
  );
}

