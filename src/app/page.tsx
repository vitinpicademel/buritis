"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle, CheckCircle2, BedDouble, Bath, Car, Maximize, MapPin, Ruler } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { siteData } from "../data";
import { FadeIn } from "../components/FadeIn";

const carrosselImages = [
  "/images/carrossel/foto1.jpeg",
  "/images/carrossel/foto2.jpeg",
  "/images/carrossel/foto3.jpeg",
  "/images/carrossel/foto4.jpeg",
  "/images/carrossel/foto5.png",
  "/images/carrossel/foto6.jpeg",
];

const internasImages = [
  "/images/internas/foto1.png",
  "/images/internas/foto2.jpeg",
  "/images/internas/foto3.jpeg",
  "/images/internas/foto4.jpeg",
];

const lazerImages = [
  "/images/lazer/foto1.jpeg",
  "/images/lazer/foto2.jpeg",
  "/images/lazer/foto3.jpeg",
  "/images/lazer/foto4.jpeg",
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 4500, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const [showFloatingWA, setShowFloatingWA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingWA(true);
    }, 7000); // Aparece após 7 segundos
    return () => clearTimeout(timer);
  }, []);

  const scrollToRef = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* 1. Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-black/5 shadow-sm transition-all">
        <div className="container mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo Parque dos Buritis 2"
              width={250}
              height={72}
              className="w-[180px] md:w-[250px] h-auto object-contain mix-blend-multiply"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-logo');
              }}
            />
            <span className="hidden font-bold text-xl text-stone-800 tracking-tight fallback-text">
              Parque dos Buritis 2
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-foreground/80">
            <button onClick={() => scrollToRef('casas')} className="hover:text-primary transition-colors">Plantas</button>
            <button onClick={() => scrollToRef('lazer')} className="hover:text-primary transition-colors">Empreendimento</button>
            <button onClick={() => scrollToRef('localizacao')} className="hover:text-primary transition-colors">Localização</button>
          </nav>

          {/* CTA */}
          <Link
            href={siteData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:opacity-90 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Falar com corretor</span>
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-20 h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {carrosselImages.map((src, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full min-w-0">
                <Image
                  src={src}
                  alt={`Parque dos Buritis 2 - Foto ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/15" />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {carrosselImages.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === selectedIndex ? "w-12 bg-primary" : "w-8 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-medium mb-6 animate-fade-in-up backdrop-blur-md">
            Lançamento em Uberaba
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl animate-fade-in-up animation-delay-100 font-sora">
            Parque dos Buritis 2 <br className="hidden md:block" />
            <span className="text-white font-light italic">Sua casa nova está aqui</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl font-light animate-fade-in-up animation-delay-200">
            Casas modernas em condomínio com infraestrutura completa e condições especiais de financiamento.
          </p>

          {/* 3. CTA Principal */}
          <div className="animate-fade-in-up animation-delay-300">
            <Link
              href={siteData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-accent hover:bg-[#1da065] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_15px_#22b573] hover:shadow-[0_0_25px_#22b573] animate-pulse hover:animate-none hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Quero mais informações
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Banner Destaque */}
      <section className="bg-primary text-white py-6 shadow-inner relative z-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-sora font-bold mb-1">
            Aceitamos seu imóvel ou veículo de menor valor como parte do pagamento<span className="text-sm font-normal align-super ml-1">(i)</span>
          </h3>
          <p className="text-[11px] md:text-xs text-white/80 max-w-3xl mx-auto mt-2">
            (i) Sujeito a avaliação de mercado e análise jurídica do bem, limitado a 30% do valor de tabela.
          </p>
        </div>
      </section>

      {/* 4. Seção Casas Disponíveis */}
      <section id="casas" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Plantas Disponíveis</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Projetos modernos pensados para o conforto da sua família, com acabamento de primeira linha.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.casas.map((casa, idx) => (
              <FadeIn key={casa.id} delay={idx * 150}>
                <div className={`bg-surface rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 h-full ${
                  idx === 0 ? "border-2 border-primary shadow-lg" : "border border-stone-200 shadow-sm hover:shadow-md"
                }`}>
                  <div className="relative h-48 w-full shrink-0 border-b border-stone-100">
                    <Image
                      src={casa.imagem}
                      alt={`Fachada da ${casa.nome}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider">{casa.nome}</h3>
                    {idx === 0 && <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">Mais procurada</span>}
                  </div>
                  <div className="flex items-baseline gap-2 mb-6">
                    <p className="text-primary font-bold text-3xl font-sora">{casa.preco.replace('*', '')}</p>
                    <span className="text-[10px] text-muted bg-stone-100 px-2 py-1 rounded">Promoção</span>
                  </div>
                  
                  <div className="flex justify-between mb-6 pb-6 border-b border-stone-100">
                    <div className="flex items-center gap-1.5 text-sm text-foreground" title="Quartos">
                      <BedDouble className="w-4 h-4 text-muted" />
                      <span className="font-semibold">{casa.infos.quartos}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground" title="Suítes">
                      <Bath className="w-4 h-4 text-muted" />
                      <span className="font-semibold">{casa.infos.suites}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground" title="Vagas">
                      <Car className="w-4 h-4 text-muted" />
                      <span className="font-semibold">{casa.infos.garagem}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground" title="Área construída">
                      <Ruler className="w-4 h-4 text-muted" />
                      <span className="font-semibold">{casa.infos.area}m²</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-foreground mb-4">{casa.descricao}</p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {casa.detalhes.map((detalhe, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-2 text-sm text-muted leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{detalhe}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={siteData.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-transparent text-foreground border-2 border-primary/20 hover:border-primary px-4 py-3 rounded-xl font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-accent" />
                    Tenho interesse
                  </Link>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Área de Lazer e Internas */}
      <section id="lazer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Conheça o Empreendimento</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Ambientes projetados para o seu bem-estar.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-amber-500"></span>
                Fotos internas (ilustrativas)
              </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {internasImages.map((src, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm">
                  <Image
                    src={src}
                    alt={`Foto interna ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-4 text-white text-sm font-medium z-10">Ambiente Interno</span>
                </div>
              ))}
            </div>
          </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-amber-500"></span>
                Área de lazer do condomínio
              </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {lazerImages.map((src, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm">
                  <Image
                    src={src}
                    alt={`Área de lazer ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-4 text-white text-sm font-medium z-10">Área Comum</span>
                </div>
              ))}
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Facilidades */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Facilidades para você realizar seu sonho</h2>
              <p className="text-stone-300 mb-10 text-lg">
                Temos as melhores condições para você adquirir sua casa própria com segurança e sem burocracia.
              </p>
              <ul className="space-y-6">
                {siteData.facilidades.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-stone-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
            <div className="bg-surface-dark border border-white/5 p-10 rounded-[2rem] text-center text-white shadow-2xl">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-sora font-bold mb-4">Faça uma simulação</h3>
              <p className="text-stone-400 mb-8">
                Fale com nossos corretores agora mesmo e descubra qual plano se encaixa melhor no seu orçamento.
              </p>
              <Link
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:opacity-90 text-white px-6 py-4 rounded-xl text-lg font-bold transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                Simular Financiamento
              </Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Localização */}
      <section id="localizacao" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-sora font-bold text-stone-800 mb-4">Localização Privilegiada</h2>
                <p className="text-lg text-stone-600 font-medium bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  {siteData.condominio.endereco}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-[400px] relative bg-[#e0ded8]">
                {/* Fallback caso não seja possível carregar o mapa. */}
                <iframe 
                  src="https://maps.google.com/maps?q=Avenida%20Laerte%20de%20Oliveira,%201095,%20Uberaba%20-%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ filter: "grayscale(100%) sepia(20%) hue-rotate(350deg) contrast(1.1) opacity(0.85)", border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Localização - Parque dos Buritis 2"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-foreground text-white pt-20 pb-10 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <Link href="/" className="mb-6 opacity-90 inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Logo Parque dos Buritis 2"
                  width={300}
                  height={86}
                  className="w-[200px] md:w-[300px] h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('fallback-logo');
                  }}
                />
                <span className="hidden font-bold text-xl text-white tracking-tight fallback-text">
                  Parque dos Buritis 2
                </span>
              </Link>
              <p className="text-stone-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
                Realize o sonho da casa própria com as melhores condições e infraestrutura completa para sua família.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-sora font-bold text-lg mb-4 text-white">Navegação Rápida</h4>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><a href="#casas" className="hover:text-primary transition-colors">Plantas Disponíveis</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">O Empreendimento</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Facilidades de Pagamento</a></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-sora font-bold text-lg mb-4 text-white">Contato & Vendas</h4>
              <p className="text-primary font-bold text-2xl mb-2 font-sora">{siteData.telefone}</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                {siteData.imobiliaria.nome}<br/>
                {siteData.imobiliaria.endereco}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="space-y-3 mb-8">
              {siteData.textosLegais.map((texto, idx) => (
                <p key={idx} className="text-stone-500 text-[11px] leading-relaxed text-justify max-w-5xl mx-auto">
                  {texto}
                </p>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
              <p>&copy; {new Date().getFullYear()} {siteData.imobiliaria.nome}. Todos os direitos reservados.</p>
              <p>
                Desenvolvido por{" "}
                <Link
                  href="https://www.instagram.com/orbytaads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white font-medium transition-colors hover:underline"
                >
                  Orbyta - Ads
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* 8. Botão Flutuante WhatsApp */}
      {showFloatingWA && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <Link
            href={siteData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110"
            aria-label="Falar no WhatsApp"
          >
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 group-hover:hidden"></span>
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
          </Link>
        </div>
      )}
    </main>
  );
}
