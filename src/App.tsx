import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Heart, 
  Smile, 
  Instagram, 
  ArrowRight, 
  X, 
  Award,
  ThumbsUp,
  UserCheck
} from 'lucide-react';

// DADOS DO EXPERT & COORDENADAS
const EXPERT = {
  name: "Dra. Bianca Colombo",
  profession: "Dentista | Geral e Ortodontia",
  location: "Araras, SP",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5519997768979&text=Ol%C3%A1%20Dra.%20Bianca!%20Gostaria%20de%20agendar%20minha%20primeira%20consulta.&type=phone_number&app_absent=0&utm_source=ig",
  instagramUrl: "https://www.instagram.com/dentistabiancacolombo?igsh=aDllcWJndHNucTdp",
  heroImage: "https://i.imgur.com/HAfqSqi.jpg",
  bioImage: "https://i.imgur.com/o1uOEID.jpg"
};

// GALERIA DE RESULTADOS (ANNTES E DEPOIS / PROVAS VISUAIS)
const GALLERY_IMAGES = [
  { url: "https://i.imgur.com/hd1BLl6.jpg", title: "Transformação de Sorriso e Alinhamento" },
  { url: "https://i.imgur.com/NT4QQ2b.jpg", title: "Harmonia Dental e Estética" },
  { url: "https://i.imgur.com/v0iGzxt.jpg", title: "Correção de Mordida e Restauração" },
  { url: "https://i.imgur.com/okTwS0G.jpg", title: "Estética Avançada do Sorriso" },
  { url: "https://i.imgur.com/JzMxYDo.jpg", title: "Planejamento Ortodôntico Preciso" },
  { url: "https://i.imgur.com/0dgPIP3.jpg", title: "Resultado Alinhamento Invisível" },
  { url: "https://i.imgur.com/M6RE6Gu.jpg", title: "Finalização Estética Impecável" }
];

// REQUISITOS DE DIFERENCIAIS (POR QUE CONFIAR EM MIM?)
const DIFFERENTIALS = [
  {
    icon: <UserCheck className="w-6 h-6 text-[#B59466]" />,
    title: "Atendimento 100% Personalizado",
    description: "Cada paciente é único. Eu planejo e conduzo pessoalmente cada detalhe do seu tratamento, do início ao fim, sem repassar para terceiros."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#B59466]" />,
    title: "Avaliação Sincera e Honesta",
    description: "Sem tratamentos invasivos ou desnecessários. Proponho apenas o que realmente fará bem para a sua saúde bucal e melhorará sua autoestima."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#B59466]" />,
    title: "Estética e Ortodontia Moderna",
    description: "Utilizo as técnicas mais modernas do mercado de aparelhos estéticos e ortodontia preventiva para garantir agilidade e conforto máximo."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#B59466]" />,
    title: "Atenção Sem Correria",
    description: "Consultas agendadas com amplo intervalo para você tirar todas as suas dúvidas. Aqui, o foco está em escutar você com calma."
  },
  {
    icon: <Heart className="w-6 h-6 text-[#B59466]" />,
    title: "Acolhimento e Sem Medo",
    description: "Técnicas humanizadas e ambiente calmo, ideal para quem sente ansiedade em consultas odontológicas convencionais."
  },
  {
    icon: <Award className="w-6 h-6 text-[#B59466]" />,
    title: "Infraestrutura de Alto Padrão",
    description: "Aparelhagem avançada para exames e planejamentos em Araras, garantindo diagnósticos de extrema precisão anatômica."
  }
];

// PERGUNTAS FREQUENTES (Para acelerar a conversão de quem tem dúvidas comuns)
const FAQS = [
  {
    question: "Como funciona a Primeira Consulta com a Dra. Bianca?",
    answer: "A sua primeira consulta é um momento de escuta e diagnóstico inicial. Eu analiso clinicamente a saúde dos seus dentes, gengiva e estrutura bucal, tiro fotos e explico honestamente o que pode ser melhorado. Você receberá um direcionamento inicial e uma estimativa de planejamento personalizado."
  },
  {
    question: "A avaliação é realmente sem compromisso?",
    answer: "Sim! A avaliação inicial é um presente meu para que você conheça a forma como eu trabalho e tome uma decisão de forma tranquila, segura e sem pressões financeiras."
  },
  {
    question: "Vocês atendem crianças, jovens e adultos?",
    answer: "Sim. Como clìnica geral e ortodontista, atendo todas as faixas etárias — desde o acompanhamento preventivo das crianças até o tratamento de alinhadores modernos para adultos."
  },
  {
    question: "Quais são as formas de contato e onde fica o consultório?",
    answer: "O agendamento inicial é feito de modo fácil e rápido pelo WhatsApp. O consultório está localizado em Araras, SP, com instalações pensadas no seu máximo bem-estar."
  }
];

export default function App() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Monitora o scroll para exibir o CTA flutuante
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const copyAddress = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText("Consultório Dra. Bianca Colombo - Araras, SP")
        .then(() => {
          setCopiedText(true);
          setTimeout(() => setCopiedText(false), 2000);
        })
        .catch((err) => {
          console.warn("Clipboard access denied or failed", err);
        });
    } else {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2D30] selection:bg-[#E8E1D5] selection:text-[#5C4D3C] antialiased pb-12">
      
      {/* HEADER PREMIUM - SEM LINKS DE DISTRAÇÃO */}
      <header className="sticky top-0 bg-[#FAF9F6]/90 backdrop-blur-md z-40 border-b border-[#EBE8E2] px-4 py-3.5 transition-all text-center">
        <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center text-center">
            <span className="font-premium-serif text-lg tracking-wider font-semibold text-[#1B1D1F]">
              DRA. BIANCA COLOMBO
            </span>
            <span className="text-[10px] tracking-widest text-[#9C825F] uppercase font-bold -mt-0.5">
              Odontologia Personalizada • Araras
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#FAF9F6] border border-[#C5A880]/30 py-0.5 px-2.5 rounded-full justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[9px] font-medium text-emerald-800 tracking-wider">Online no WhatsApp</span>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 sm:px-6">

        {/* 1. SEÇÃO HERO - PRIMEIRA DOBRA DA PÁGINA */}
        <section className="pt-6 pb-12 flex flex-col items-center">
          {/* Tag Inicial de Boas-vindas */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#F1EFE9] border border-[#D5CFC3] text-[#5C4E3C] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#B59466]" /> Primeira Consulta
            </span>
          </div>

          {/* Headline Forte em 1ª Pessoa (Ajustada e acima da foto) */}
          <div className="text-center space-y-2 mb-6 px-1">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#1A1C1E] leading-tight max-w-[325px] mx-auto">
              Eu sou a <span className="font-premium-serif italic font-normal text-2xl sm:text-3xl text-[#8E724E] inline-block mx-1">Dra. Bianca Colombo</span> <br />
              e transformo sorrisos em Araras.
            </h1>
            
            {/* Subheadline orientada a benefício e segurança (Tamanho Reduzido) */}
            <p className="text-xs font-light text-[#55585D] leading-relaxed max-w-[285px] mx-auto">
              Acredito em um cuidado leve, acolhedor e 100% humanizado. Agende sua avaliação e conquiste o sorriso saudável que você merece.
            </p>
          </div>

          {/* Foto Principal do Expert */}
          <div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl border border-white max-w-[280px] mx-auto group">
            <img 
              src={EXPERT.heroImage} 
              alt="Dra. Bianca Colombo - Sorrindo no Consultório" 
              referrerPolicy="no-referrer"
              className="w-full h-auto aspect-[3/4] object-cover object-center transform transition duration-700 hover:scale-105"
            />
            {/* Overlay sutil na base da foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 right-3 text-white text-center">
              <p className="font-premium-serif italic text-xs font-light text-[#EFEAE2]">“Cada transformação começa com uma conversa sincera.”</p>
            </div>
          </div>

          {/* Botão de CTA com design premium do WhatsApp */}
          <div className="mt-8 space-y-3 px-2">
            <a 
              href={EXPERT.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 w-full bg-[#1FAF51]/95 text-white py-4 px-6 rounded-xl font-bold tracking-wide hover:bg-[#1C9E49] active:scale-[0.98] transition-all duration-250 shadow-lg shadow-emerald-700/20 group overflow-hidden"
            >
              {/* Brilho animado de fundo no botão */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              
              <MessageSquare className="w-5.5 h-5.5 animate-bounce" />
              <span className="text-sm sm:text-base">Agendar minha avaliação</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Microtexto abaixo do botão */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-[#7A7E84] font-medium">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Resposta rápida no WhatsApp
              </span>
              <span className="text-[#D3CFC6]">•</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Sem compromisso
              </span>
            </div>
          </div>
        </section>


        {/* 2. BLOCO "QUEM SOU EU" (Autoridade Pessoal e Conexão Humana) */}
        <section className="py-12 border-t border-[#EBE8E2] text-center flex flex-col items-center w-full">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#B59466] font-extrabold block mb-1">Cuidado e Dedicação</span>
            <h2 className="text-2xl font-bold text-[#1A1C1E]">
              Muito prazer, sou a <span className="font-premium-serif italic font-normal text-2xl text-[#8E724E]">Dra. Bianca Colombo</span>
            </h2>
          </div>

          {/* Foto Pessoal / Bastidores */}
          <div className="relative rounded-2xl overflow-hidden mb-6 shadow-md max-w-[280px] mx-auto border border-[#EBE8E2]">
            <img 
              src={EXPERT.bioImage} 
              alt="Dra. Bianca Colombo no Consultório" 
              referrerPolicy="no-referrer"
              className="w-full h-auto aspect-[1/1] object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#8E724E] px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border border-[#E8E1D5]">
              Araras, SP
            </div>
          </div>

          {/* Texto em 1ª Pessoa humanizado (Centralizado para Mobile) */}
          <div className="space-y-4 text-sm text-[#45484D] leading-relaxed font-light text-center">
            <p>
              Para mim, a odontologia vai muito além de tratar dentes: trata-se de devolver a autoestima e a liberdade de sorrir de verdade. No meu consultório em Araras, você não é apenas mais um horário ou procedimento na agenda. 
            </p>
            
            <p>
              Prezo por planejar e conduzir cada etapa pessoalmente, oferecendo um diagnóstico sincero e explicando cada detalhe de maneira simples e clara. Sem termos técnicos complicados. Apenas amor pelo que faço e integridade absoluta com você.
            </p>
          </div>

          {/* Bullets diferenciais (Centralizados) */}
          <div className="mt-6 bg-[#F2EDE2]/50 p-5 rounded-xl border border-[#E3DCD1] text-center">
            <h4 className="text-xs font-bold text-[#6D5E4D] uppercase tracking-widest mb-4 flex items-center justify-center gap-1.5">
              <Award className="w-4 h-4 text-[#B59466]" /> Compromisso no seu Atendimento:
            </h4>
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex flex-col items-center gap-1">
                <Check className="w-4 h-4 text-[#B59466]" />
                <p className="text-xs text-[#525559] max-w-xs"><strong className="text-[#3A3C3E] block">Consultas sem pressa</strong>Tempo reservado exclusivamente para você.</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Check className="w-4 h-4 text-[#B59466]" />
                <p className="text-xs text-[#525559] max-w-xs"><strong className="text-[#3A3C3E] block">Ortodontia Avançada</strong>Aparelhos modernos focados em conforto e agilidade.</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Check className="w-4 h-4 text-[#B59466]" />
                <p className="text-xs text-[#525559] max-w-xs"><strong className="text-[#3A3C3E] block">Avaliação honesta</strong>Indicação exclusiva de tratamentos de real benefício.</p>
              </div>
            </div>
          </div>
        </section>


        {/* 3. BLOCO "RESULTADOS REAIS" (Galeria Premium de Antes & Depois) */}
        <section className="py-12 border-t border-[#EBE8E2] text-center flex flex-col items-center w-full">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-widest text-[#B59466] font-extrabold block mb-1">Estudos de Caso Clínico</span>
            <h2 className="text-2xl font-bold text-[#1A1C1E]">Resultados que Inspiram</h2>
            <p className="text-xs font-light text-[#7A7E84] mt-1.5 max-w-xs mx-auto">
              Clique nas imagens para visualizá-las em tela cheia de alta definição e ver os detalhes.
            </p>
          </div>

          {/* Galeria Grid Inteligente para mobile */}
          <div className="grid grid-cols-2 gap-3.5">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#ECE9E2] bg-white aspect-[4/5] shadow-xs hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                  <span className="text-[9px] text-white/90 font-medium tracking-wide truncate block w-full">{img.title}</span>
                </div>
                <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-[2px] rounded-full p-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-gray-500 italic mt-4 px-4 bg-gray-100/60 py-2.5 rounded-lg border border-gray-200/50">
            *Aviso discreto: Resultados de tratamentos são particulares e mudam de acordo com as respostas biológicas de cada organismo.
          </p>
        </section>


        {/* 4. BLOCO "POR QUE CONFIAR EM MIM?" (Grids de Valores / Cards) */}
        <section className="py-12 border-t border-[#EBE8E2] text-center flex flex-col items-center w-full">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#B59466] font-extrabold block mb-1">Garantia de Confiança</span>
            <h2 className="text-2xl font-bold text-[#1A1C1E]">Por Que Escolher a Dra. Bianca?</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full">
            {DIFFERENTIALS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-xl border border-[#ECE9E2] shadow-sm flex flex-col items-center text-center gap-3.5 transition-all duration-300 hover:border-[#C5A880]/40 hover:shadow-md"
              >
                <div className="bg-[#FAF9F6] p-2.5 rounded-lg h-fit w-fit border border-[#D5CFC3]/20">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#1A1C1E]">{item.title}</h3>
                  <p className="text-xs font-light leading-relaxed text-[#5F636A] max-w-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 5. CTA INTERMEDIÁRIO (Quebra de Acerto e Pressão Limpa) */}
        <section className="py-10 px-6 my-4 bg-gradient-to-br from-[#ECE9E2] to-[#FAF9F6] rounded-2xl border border-[#D6CEC1] text-center space-y-6">
          <Smile className="w-10 h-10 text-[#8E724E] mx-auto" />
          
          <div className="space-y-2">
            <h3 className="font-premium-serif text-xl italic font-semibold text-[#3C3224]">Sem Medo, Sem Burocracia</h3>
            <p className="text-xs font-light text-[#5C5549] leading-relaxed max-w-xs mx-auto">
              Perdi as contas de quantos pacientes me confessaram que decidiram voltar a cuidar do sorriso depois de me conhecerem. Minha meta é que você se sinta respeitado(a) e seguro(a) em toda etapa.
            </p>
          </div>

          <div className="space-y-2.5">
            <a 
              href={EXPERT.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#1FAF51] text-white py-3.5 px-6 rounded-xl text-sm font-bold tracking-wider hover:bg-[#1A9F4A] active:scale-[0.98] transition-all shadow-md shadow-emerald-700/10"
            >
              <MessageSquare className="w-4.5 h-4.5" />
              Agendar Avaliação pelo WhatsApp
            </a>
            <p className="text-[10px] text-[#847B6F] font-medium uppercase tracking-wider">Apenas 1 minuto para agendar • Rápido e Simples</p>
          </div>
        </section>


        {/* 6. BLOCO "COMO FUNCIONA A PRIMEIRA CONSULTA" */}
        <section className="py-12 border-t border-[#EBE8E2]">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#B59466] font-extrabold block mb-1">Fluxo Simples</span>
            <h2 className="text-2xl font-bold text-[#1A1C1E]">Como Funciona o Primeiro Passo?</h2>
            <p className="text-xs font-light text-[#7A7E84] mt-1.5 max-w-xs mx-auto text-center">Três etapas rápidas para iniciar seu atendimento personalizado:</p>
          </div>

          {/* Timeline Center Stack Layout */}
          <div className="space-y-8 max-w-xs mx-auto text-center">
            {/* Passo 1 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#B59466] text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs mb-2">
                1
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#8E724E]">Conversa Inicial</h4>
                <p className="text-sm font-semibold text-[#1A1C1E]">Toque e Envie uma Mensagem</p>
                <p className="text-xs font-light text-[#525559] max-w-xs leading-relaxed">Você será instruído(a) pela minha equipe para escolher o melhor dia e horário na agenda.</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#B59466] text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs mb-2">
                2
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#8E724E]">A Visita</h4>
                <p className="text-sm font-semibold text-[#1A1C1E]">Chegada ao Meu Consultório</p>
                <p className="text-xs font-light text-[#525559] max-w-xs leading-relaxed">Um espaço preparado com acolhimento, sem cheiro forte de clínica e com privacidade absoluta para você.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#B59466] text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs mb-2">
                3
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#8E724E]">Diagnóstico</h4>
                <p className="text-sm font-semibold text-[#1A1C1E]">Avaliação & Transparência</p>
                <p className="text-xs font-light text-[#525559] max-w-xs leading-relaxed">Analiso detalhadamente seu caso. Forneço fotos macro, tiro suas dúvidas e crio o plano ideal sob medida.</p>
              </div>
            </div>
          </div>
        </section>


        {/* 7. BLOCO "MAIS PROVAS" (Imagens do Consultório e Bastidores com Legendas Centralizadas) */}
        <section className="py-12 border-t border-[#EBE8E2]">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-widest text-[#B59466] font-extrabold block mb-1">Nos Bastidores</span>
            <h2 className="text-2xl font-bold text-[#1A1C1E]">Ambiente & Cuidado Clinico</h2>
          </div>

          <div className="space-y-5">
            {/* Foto Bastidores 1 */}
            <div className="bg-white p-3 rounded-2xl border border-[#ECE9E2] shadow-xs text-center flex flex-col items-center">
              <img 
                src={EXPERT.bioImage}
                alt="Ambiente do Consultório - Dra Bianca Colombo" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-video object-cover rounded-xl"
              />
              <div className="flex flex-col items-center gap-1.5 mt-3 text-xs font-medium text-[#7A7E84] px-1 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59466]"></span>
                <span className="max-w-xs">Atendimento humanizado e focado em acolher você com calma</span>
              </div>
            </div>

            {/* Foto Bastidores 2 - Hero de novo para reforçar */}
            <div className="bg-white p-3 rounded-2xl border border-[#ECE9E2] shadow-xs text-center flex flex-col items-center">
              <img 
                src={EXPERT.heroImage}
                alt="Dra Bianca Colombo sorrindo e atendendo com atenção" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-video object-cover object-top rounded-xl"
              />
              <div className="flex flex-col items-center gap-1.5 mt-3 text-xs font-medium text-[#7A7E84] px-1 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59466]"></span>
                <span className="max-w-xs">Investimento constante em aparelhos ortodônticos modernos</span>
              </div>
            </div>
          </div>
        </section>


        {/* SEÇÃO EXTRA DE PERGUNTAS FREQUENTES (Melhora conversion score e autoridade) */}
        <section className="py-12 border-t border-[#EBE8E2]">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#B59466] font-extrabold block mb-1">Esclareça suas Dúvidas</span>
            <h2 className="text-2xl font-bold text-[#1A1C1E]">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-3.5 px-1">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-[#ECE9E2] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 flex flex-col items-center justify-center bg-[#FAF9F6]/50 hover:bg-white text-center transition-colors duration-150 gap-2"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#1A1C1E]">{faq.question}</span>
                  <span className="text-[#B59466] font-semibold text-xs border border-[#C5A880]/40 rounded-full px-2.5 py-1 bg-white">
                    {activeFaq === idx ? 'Ver menos ↑' : 'Ver resposta ↓'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="p-4 pt-2 border-t border-[#FAF9F6] text-xs font-light leading-relaxed text-[#5F636A] bg-white animate-fade-in text-center max-w-sm mx-auto">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* 8. CTA FINAL (Decisão / Injeção Mental de Urgência Natural) */}
        <section className="py-16 border-t border-[#EBE8E2] text-center space-y-8">
          <div className="relative bg-white pt-10 pb-8 px-5 rounded-3xl border border-[#DCD9D1] shadow-xl space-y-6">
            
            {/* Elemento de Selo de Garantia visual sofisticado */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B59466] text-white text-[10px] font-extrabold tracking-widest uppercase px-5 py-2.5 rounded-full border-4 border-[#FAF9F6] shadow-md flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> AGENDAMENTO PRIVADO
            </div>

            <div className="space-y-3 mt-4">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1C1E]">
                Pronto(a) para sorrir com mais <span className="font-premium-serif italic font-normal text-[#8E724E] block">segurança e orgulho?</span>
              </h2>
              <p className="text-xs font-light text-[#5A5E64] leading-relaxed max-w-[285px] mx-auto">
                Não prolongue o desejo de renovar o seu sorriso por receio ou falta de tempo. Agende sua primeira avaliação direto no meu WhatsApp e faremos um diagnóstico sob medida.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <a 
                href={EXPERT.whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#1FAF51] text-white py-4 px-6 rounded-2xl font-extrabold tracking-wide hover:bg-[#1A9F4A] active:scale-[0.98] transition-all shadow-lg shadow-emerald-700/20"
              >
                <MessageSquare className="w-5.5 h-5.5" />
                <span>Iniciar Agendamento</span>
              </a>

              <p className="text-[10px] text-emerald-800 font-semibold tracking-wider flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Horários disponíveis para esta semana
              </p>
            </div>
          </div>
        </section>


        {/* LOCALIZAÇÃO RAPIDA DO CONSULTÓRIO (Para quebrar barreiras físicas) */}
        <section className="py-8 bg-[#F3F1EC] rounded-2xl border border-[#E3DEC9]/50 text-center space-y-3">
          <MapPin className="w-6 h-6 text-[#B59466] mx-auto" />
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#5C5549]">Onde Encontrar a Dra. Bianca</h4>
          <p className="text-xs font-semibold text-[#1A1C1E]">Araras, SP • Consultório Particular</p>
          <div className="pt-1.5">
            <button 
              onClick={copyAddress}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#8E724E] hover:text-[#745B3A] underline uppercase tracking-wider focus:outline-none"
            >
              {copiedText ? "Copiado!" : "Copiar endereço para o GPS"}
            </button>
          </div>
        </section>

      </main>

      {/* 9. RODAPÉ SIMPLES */}
      <footer className="mt-16 border-t border-[#EBE8E2] pt-12 pb-8 px-4 bg-[#FAF9F6]">
        <div className="max-w-md mx-auto text-center space-y-6">
          
          {/* Logo rodapé */}
          <div className="space-y-1">
            <h3 className="font-premium-serif text-base tracking-widest font-bold text-[#1A1C1E]">
              DRA. BIANCA COLOMBO
            </h3>
            <p className="text-[10px] text-[#A58F75] tracking-widest uppercase font-medium">{EXPERT.profession}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5">
            <a 
              href={EXPERT.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs text-[#5C6067] hover:text-[#8E724E] bg-white border border-[#EBE8E2] px-4 py-2.5 rounded-full shadow-2xs hover:shadow-xs transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>@dentistabiancacolombo</span>
            </a>
          </div>

          {/* Informações legais e cidade */}
          <div className="space-y-2 text-[10px] text-[#7E8289] font-light leading-relaxed">
            <p>Araras, SP • Atendimento Presencial Privado</p>
            <p className="max-w-xs mx-auto text-[9px] text-[#9A9EA4]">
              Este site é focado na divulgação personalizada de saúde bucal e prestação de serviços odontológicos em Araras, SP conduzidos em conformidade com o Código de Ética do CRO/SP.
            </p>
            <p className="pt-2 text-[9px]">
              &copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL SIMPLE - PARA AVALIAÇÃO EM TELA CHEIA */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50 animate-fade-in p-4 cursor-zoom-out"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Botão de Fechar */}
          <button 
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full p-2.5 border border-white/20 transition-all cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Container da Imagem */}
          <div 
            className="relative max-w-lg w-full flex flex-col items-center justify-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagem em alta resolução com referrer check */}
            <img 
              src={GALLERY_IMAGES[activePhotoIndex].url}
              alt={GALLERY_IMAGES[activePhotoIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] max-w-full rounded-2xl object-contain border border-white/10 shadow-2xl"
            />

            {/* Titulo / Subtítulo */}
            <div className="text-center mt-4 space-y-1">
              <h4 className="text-white text-sm font-semibold tracking-wide">
                {GALLERY_IMAGES[activePhotoIndex].title}
              </h4>
              <p className="text-[#A58F75] text-[10px] uppercase tracking-widest font-bold">
                Imagem {activePhotoIndex + 1} de {GALLERY_IMAGES.length}
              </p>
            </div>

            {/* Setas de Navegação */}
            <div className="flex gap-4 mt-6">
              <button 
                onClick={handlePrevPhoto}
                className="bg-white/15 hover:bg-white/25 active:scale-95 text-white rounded-xl py-2 px-4 border border-white/15 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <button 
                onClick={handleNextPhoto}
                className="bg-white/15 hover:bg-white/25 active:scale-95 text-white rounded-xl py-2 px-4 border border-white/15 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                Próxima <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Botão de conversão rápida de dentro do Lightbox */}
            <a 
              href={EXPERT.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-[#1FAF51] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:bg-[#1C9E49] transition-all"
            >
              <MessageSquare className="w-4.5 h-4.5" />
              Quero um resultado como esse no meu sorriso
            </a>
          </div>
        </div>
      )}

      {/* FLOAT ACTION BUTTON PARA O WHATSAPP (Apenas visível depois de scrollar) */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
          showFloatingCta ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <a 
          href={EXPERT.whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1FAF51] hover:bg-[#1A9F4A] text-white py-3 px-4.5 rounded-full font-bold text-xs shadow-xl active:scale-[0.98] transition-all duration-200 border border-white/10 group"
          title="Falar no WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5 -mr-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-white text-[#1FAF51]" />
          <span>Falar com a Dra. Bianca</span>
        </a>
      </div>

    </div>
  );
}
