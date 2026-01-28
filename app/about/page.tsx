import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="relative">
        {/* Elemento Decorativo */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blockpixel-primary/20 blur-[100px] rounded-full" />
        
        <section className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
            SOMOS A <br />
            <span className="text-blockpixel-primary italic">BLOCKPIXEL.</span>
          </h1>

          <div className="space-y-8 text-xl md:text-2xl text-white/80 leading-relaxed">
            <p className="border-l-4 border-blockpixel-primary pl-8 py-4 bg-white/5 rounded-r-2xl">
              "A Blockpixel Studios é um estúdio criativo que cria jogos, sites e apps, além de conteúdos para jogos, como o Minecraft, e plataformas, como o Discord."
            </p>
            
            <p>
              Nosso DNA é formado por pixels e linhas de código, mas nosso objetivo é puramente humano: 
              <strong> conectar pessoas através da interatividade.</strong>
            </p>
          </div>
        </section>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="p-10 bg-gradient-to-br from-blockpixel-primary/20 to-transparent border border-white/10 rounded-[40px]">
            <h2 className="text-3xl font-bold mb-6 text-white">Nossa Visão</h2>
            <p className="text-white/60">
              Não entregamos apenas produtos. Entregamos ecossistemas digitais onde a criatividade não tem limites, seja em um servidor de Roleplay ou em uma aplicação web de alta performance.
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px]">
             <Image 
                src="/logo-icon.png" 
                alt="Blockpixel Mascot" 
                fill 
                className="object-contain animate-pulse"
             />
          </div>
        </section>
      </div>
    </main>
  );
            }

