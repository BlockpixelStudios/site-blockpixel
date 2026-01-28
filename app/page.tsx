import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-blockpixel-bg text-white selection:bg-blockpixel-accent">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Efeito de Brilho de Fundo */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blockpixel-primary/20 rounded-full blur-[120px] animate-glow" />
        
        <div className="z-10 text-center max-w-4xl">
          <Image 
            src="/logo-icon.png" // O ícone do cubinho
            alt="Blockpixel Icon"
            width={120}
            height={120}
            className="mx-auto mb-8 drop-shadow-[0_0_25px_rgba(91,93,255,0.5)]"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            CRIAMOS EXPERIENCIAS <br />
            <span className="text-blockpixel-primary">ALÉM DO CÓDIGO.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            A Blockpixel Studios é o ponto de encontro entre tecnologia, jogos e inovação digital. Transformamos ideias em realidades interativas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects" className="px-8 py-4 bg-blockpixel-primary hover:bg-blockpixel-accent transition-all rounded-full font-bold shadow-lg shadow-blockpixel-primary/20">
              Ver Projetos
            </Link>
            <Link href="/community" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-full font-bold backdrop-blur-sm">
              Entrar no Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de Destaque Sutil */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Jogos', desc: 'Desenvolvimento imersivo e mecânicas únicas.' },
            { title: 'Tecnologia', desc: 'Soluções digitais com as stacks mais modernas.' },
            { title: 'Comunidade', desc: 'Conectando criadores e gamers em um só lugar.' }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blockpixel-primary/50 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blockpixel-primary transition-colors">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
              }
      
