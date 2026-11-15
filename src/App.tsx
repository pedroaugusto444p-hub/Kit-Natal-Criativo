import { useEffect, useState, type ReactNode } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Flame, Gift, Heart, Layers, MessageCircleHeart, Palette, Printer, ShoppingBag, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const goPlans = () => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });

function Cta({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "light" }) {
  const cls = variant === "light" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground";
  return (
    <button onClick={goPlans} className={`${cls} shadow-warm inline-block rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide transition hover:-translate-y-0.5 hover:brightness-110 md:text-lg`}>
      {children}
    </button>
  );
}

function H2({ children, light }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`font-display text-3xl font-bold leading-tight md:text-5xl ${light ? "text-secondary-foreground" : "text-secondary"}`}>{children}</h2>;
}

const Check = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3"><span className="font-bold text-secondary">✓</span><span>{children}</span></li>
);

const categories = [
  ["🎄", "Caixinhas Natalinas", "Modelos de caixinhas decorativas para pequenos presentes, doces e lembrancinhas."],
  ["🍫", "Embalagens para Chocolates e Doces", "Embalagens natalinas para personalizar chocolates, bombons e pequenas guloseimas."],
  ["🎁", "Sacolinhas e Lembrancinhas", "Sacolinhas e moldes para preparar lembranças de Natal para diferentes ocasiões."],
  ["🏷️", "Tags e Etiquetas", "Etiquetas decorativas para identificar presentes e personalizar suas embalagens."],
  ["💌", "Cartões de Natal", "Cartões ilustrados com mensagens natalinas para acompanhar presentes e lembrancinhas."],
];

const modules = [
  [
    "Caixinhas Natalinas",
    "Crie caixinhas para complementar presentes e preparar pequenas lembrancinhas.",
    "Modelos com desenhos e elementos natalinos para imprimir e montar.",
    "/assets/aistudio/Caixinhas_Natalinas_em_Destaque-1_20782edc.png",
  ],
  [
    "Embalagens para Chocolates e Doces",
    "Transforme a apresentação de chocolates e doces com embalagens temáticas de Natal.",
    "Uma opção para presentear amigos, familiares, alunos e outras pessoas especiais.",
    "/assets/aistudio/Embalagens_Natalinas_para_Chocolates-2_edddb8af.png",
  ],
  [
    "Sacolinhas e Lembrancinhas",
    "Tenha modelos de sacolinhas e lembrancinhas para diferentes ocasiões natalinas.",
    "Prepare pequenos presentes personalizados para confraternizações, encontros e comemorações.",
    "/assets/aistudio/Sacolinhas_e_Lembrancinhas_de_Natal-3_caacf235.png",
  ],
  [
    "Tags e Etiquetas",
    "Dê um toque especial às suas embalagens com tags e etiquetas decorativas.",
    "Utilize os modelos para identificar presentes e complementar suas lembrancinhas.",
    "/assets/aistudio/Tags_e_Etiquetas_de_Natal-4_90342308.png",
  ],
  [
    "Cartões de Natal",
    "Compartilhe mensagens de carinho através de cartões natalinos ilustrados.",
    "Uma maneira de acompanhar seus presentes com palavras especiais.",
    "/assets/aistudio/Cart_es_de_Natal_Ilustrados_em_Destaque-5_8816dba2.png",
  ],
];

const faqs = [
  ["Como vou receber o material?", "Você receberá as informações para acessar os arquivos pelo e-mail informado na compra, após a confirmação do pagamento."],
  ["O material é físico ou digital?", "O produto é totalmente digital. Você receberá arquivos para imprimir, recortar e montar. Nenhuma lembrancinha física será enviada."],
  ["Quantos modelos estão incluídos?", "A coleção completa está sendo preparada com uma meta inicial de 150 modelos. A quantidade final será confirmada antes da disponibilização da oferta."],
  ["Preciso ter experiência com papelaria?", "Não é necessário ter experiência profissional. O guia incluído no plano completo apresenta orientações para impressão, recorte e montagem. Alguns projetos podem exigir mais cuidado e prática."],
  ["Posso imprimir em casa?", "Sim, desde que tenha uma impressora compatível com os arquivos e o papel utilizado. Você também poderá realizar a impressão em uma gráfica."],
  ["Qual papel devo utilizar?", "Isso depende do material escolhido. Para peças que precisam de firmeza, papéis de maior gramatura costumam ser mais adequados."],
  ["Os dois bônus estão incluídos?", "Sim. A Coleção de Natal Cristão e o Guia de Impressão, Corte e Montagem estão incluídos no Plano Completo."],
  ["Posso vender as lembrancinhas que produzir?", "As condições de uso comercial ainda serão definidas. Antes da compra, consulte a licença de uso disponibilizada junto à oferta."],
  ["Existe alguma garantia?", "Sim. A oferta conta com garantia de 7 dias, conforme as condições de compra."],
];

const carouselImages = [
  "https://i.ibb.co/Tx0XnBFQ/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-43-36-4.png",
  "https://i.ibb.co/qF76bG6W/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-43-37-5.png",
  "https://i.ibb.co/fYvDXrXj/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-43-35-3.png",
  "https://i.ibb.co/LzpwFs1h/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-43-34-2.png",
  "https://i.ibb.co/RG5M48BJ/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-43-34-1.png",
  "https://i.ibb.co/JWybxNgL/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-45-45-5.png",
  "https://i.ibb.co/0jx3GXXL/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-45-43-3.png",
  "https://i.ibb.co/DHj6QbFc/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-45-44-4.png",
  "https://i.ibb.co/C51tPC2T/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-45-43-2.png",
  "https://i.ibb.co/b5RJC5GQ/Imagem-do-Chat-GPT-14-de-nov-de-2026-09-45-42-1.png",
  "https://i.ibb.co/0RwHn4WG/Captura-de-Tela-56.png",
  "https://i.ibb.co/fYy6nmSD/Captura-de-Tela-55.png",
  "https://i.ibb.co/4wp1YxkG/Imagem-do-Chat-GPT-14-de-nov-de-2026-17-37-35.png",
  "https://i.ibb.co/WWjCz6xJ/Imagem-do-Chat-GPT-14-de-nov-de-2026-17-37-27.png",
  "https://i.ibb.co/23zbxnFy/Imagem-do-Chat-GPT-14-de-nov-de-2026-15-50-15.png",
  "https://i.ibb.co/0v7TJdD/Imagem-do-Chat-GPT-14-de-nov-de-2026-15-50-05.png",
  "https://i.ibb.co/wZjL0f6Z/Imagem-do-Chat-GPT-14-de-nov-de-2026-15-49-36.png",
  "https://i.ibb.co/c56C7bY/Captura-de-Tela-58.png",
  "https://i.ibb.co/RkSqK9bQ/Captura-de-Tela-57.png",
];

function CreationCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = carouselImages.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 2500);
    return () => clearInterval(timer);
  }, [current, total]);

  return (
    <div
      className="select-none"
      onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchStartX === null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchStartX;
        const diff = touchStartX - endX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) next();
          else prev();
        }
        setTouchStartX(null);
      }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-card shadow-warm">
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {carouselImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Modelo de lembrancinha natalina ${i + 1}`}
              className="h-full w-full shrink-0 object-contain"
            />
          ))}
        </motion.div>

        <button
          type="button"
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-secondary shadow-md transition hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-secondary shadow-md transition hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 right-3 rounded-full bg-foreground/75 px-3 py-1 text-xs font-bold text-background">
          {current + 1} / {total}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
        {carouselImages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-5 bg-primary" : "w-2 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const testimonialImages = [
  "https://i.ibb.co/qYBsp1ts/Conversa-de-Natal-no-Whats-App-2.png",
  "https://i.ibb.co/23BWFrMr/Conversa-natalina-com-Larissa-1.png",
  "https://i.ibb.co/Xxg51QSb/Depoimento-sobre-Natal-Criativo-para-Imprimir-2.png",
  "https://i.ibb.co/cc9hHhLx/Depoimento-Natal-Criativo-no-Whats-App-1.png",
];

function TestimonialsCarousel() {
  const slides = [...testimonialImages, ...testimonialImages];
  return (
    <div className="relative mt-10 overflow-hidden py-2">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {slides.map((src, i) => (
          <div key={`${src}-${i}`} className="shrink-0 pr-6">
            <div className="w-[250px] overflow-hidden rounded-3xl border-4 border-accent bg-card shadow-2xl sm:w-[272px]">
              <img
                src={src}
                loading="lazy"
                alt={`Depoimento de cliente ${(i % testimonialImages.length) + 1}`}
                className="aspect-[9/16] w-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SpecialOfferPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative w-full max-w-sm rounded-2xl bg-white p-5 text-center shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar oferta"
          className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center justify-center gap-2">
          <h3 className="font-display text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
            OFERTA ESPECIAL
          </h3>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-500">
            <Flame className="h-4 w-4 fill-amber-500" aria-hidden="true" />
          </span>
        </div>

        <p className="mt-2.5 text-sm leading-snug text-slate-600">
          Leve o Pacote Completo por{" "}
          <strong className="font-bold text-emerald-500">R$ 14,90</strong>
          <br />
          com todos os bônus inclusos
        </p>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/80 p-3.5 text-left">
          <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-500">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>BÔNUS EXCLUSIVOS INCLUSOS:</span>
          </p>
          <ul className="mt-2.5 space-y-2 text-xs font-medium text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
              <span>Todos os 5 Módulos de Natal (tamanho A4)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
              <span>Bônus 01 — Coleção de Natal Cristão</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
              <span>Bônus 02 — Guia de Impressão, Corte e Montagem</span>
            </li>
          </ul>
        </div>

        <a
          href="https://pay.wiapy.com/2SLwrzbj1FBG"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-4 block w-full rounded-xl bg-emerald-500 px-4 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-emerald-600"
        >
          QUERO O PACOTE COMPLETO
        </a>

        <a
          href="https://pay.wiapy.com/53mxRaualT5b"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-3 block w-full text-center text-[11px] font-bold uppercase tracking-wider text-slate-500 transition hover:text-slate-700"
        >
          QUERO A OFERTA DE 10
        </a>
      </motion.div>
    </div>
  );
}

const purchaseSamples = [
  { name: "Mariana Silva", city: "Campinas, SP", plan: "Plano Completo", time: "há 2 min" },
  { name: "Juliana Costa", city: "Belo Horizonte, MG", plan: "Plano Completo", time: "há 4 min" },
  { name: "Patrícia Oliveira", city: "Curitiba, PR", plan: "Plano Básico", time: "há 6 min" },
  { name: "Camila Santos", city: "Salvador, BA", plan: "Plano Completo", time: "há 9 min" },
  { name: "Fernanda Lima", city: "Porto Alegre, RS", plan: "Plano Completo", time: "há 11 min" },
  { name: "Ana Paula Rocha", city: "Goiânia, GO", plan: "Plano Completo", time: "há 14 min" },
  { name: "Larissa Mendes", city: "Recife, PE", plan: "Plano Completo", time: "há 17 min" },
  { name: "Beatriz Almeida", city: "Florianópolis, SC", plan: "Plano Básico", time: "há 20 min" },
];

function PurchaseNotifications() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const initialDelay = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || !visible) return;
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4500);
    return () => clearTimeout(hideTimer);
  }, [dismissed, visible, index]);

  useEffect(() => {
    if (dismissed || visible) return;
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % purchaseSamples.length);
      setVisible(true);
    }, 3000);
    return () => clearTimeout(nextTimer);
  }, [dismissed, visible]);

  if (dismissed) return null;
  const item = purchaseSamples[index]!;

  return (
    <div className="pointer-events-none fixed bottom-20 left-3 z-40 w-[calc(100%-1.5rem)] max-w-[260px] sm:bottom-6 sm:left-4 sm:max-w-[275px]">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={`${item.name}-${index}`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto relative flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-white/95 p-2.5 pr-7 shadow-lg backdrop-blur-sm"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="min-w-0 text-left leading-tight">
              <p className="truncate text-[11px] font-bold text-slate-900">
                {item.name} <span className="font-normal text-slate-500">• {item.city}</span>
              </p>
              <p className="mt-0.5 truncate text-[11px] text-slate-700">
                Adquiriu o <strong className="font-bold text-emerald-600">{item.plan}</strong>
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400">Compra confirmada {item.time}</p>
            </div>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Fechar notificação"
              className="absolute right-1.5 top-1.5 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [faq, setFaq] = useState<number | null>(0);
  const [offerPopupOpen, setOfferPopupOpen] = useState(false);
  return (
    <main className="font-sans text-foreground">
      {/* HERO */}
      <section className="bg-festive text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="font-display text-xl font-bold text-accent">🎄 KIT DE LEMBRANCINHAS DE NATAL</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Lindas Lembrancinhas de Natal Prontas para Imprimir, Recortar e Montar!</h1>
            <p className="mt-5 text-lg opacity-90">Tenha acesso a uma coleção de caixinhas, embalagens para doces, sacolinhas, tags e cartões de Natal, sem precisar criar os modelos do zero.</p>
            <div className="mt-8"><Cta variant="light">Acessar meu Kit de Natal</Cta></div>
            <p className="mt-5 text-sm font-semibold opacity-90"><span className="text-accent">✓</span> 5 módulos + 2 bônus especiais • Produto digital</p>
          </div>
          <img src="https://i.ibb.co/b5XWHPcJ/Natal-Criativo-Kit-de-Moldes-de-Natal.png" alt="Natal Criativo Kit de Moldes de Natal" className="w-full rounded-3xl border-4 border-accent shadow-2xl" />
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <H2>✂️ Veja como é simples: do papel à lembrancinha pronta!</H2>
        <p className="mt-4 text-muted-foreground">Com os arquivos da coleção, você poderá preparar suas próprias lembrancinhas seguindo quatro etapas.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[["Imprimir", "Escolha o modelo desejado e imprima no papel recomendado."], ["Recortar", "Recorte as peças seguindo os contornos do molde."], ["Dobrar", "Faça as dobras nas marcações para dar forma às peças."], ["Montar", "Cole ou encaixe as partes seguindo as orientações de montagem."]].map(([t, d], i) => (
            <div key={t} className="rounded-3xl border-2 border-dashed border-primary/40 bg-card p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-2xl font-extrabold text-primary-foreground">{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-secondary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-bold text-primary">Escolha, imprima, recorte e dê vida às suas ideias de Natal!</p>
      </section>

      {/* CREATE */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <H2>🎁 Veja o que você poderá criar neste Natal!</H2>
            <p className="mt-4 text-muted-foreground">Uma coleção de materiais para deixar seus presentes ainda mais especiais.</p>
          </div>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
            <CreationCarousel />
            <div className="space-y-4">
              {categories.map(([e, t, d]) => (
                <div key={t} className="flex gap-4 rounded-2xl bg-card p-4">
                  <span className="text-3xl">{e}</span>
                  <div><h3 className="font-extrabold text-secondary">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center"><Cta>Ver a coleção de Natal</Cta></div>
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <H2>🎅 Conheça os 5 módulos da sua coleção!</H2>
          <p className="mt-4 text-muted-foreground">Os materiais são organizados por categoria, facilitando a escolha do que você deseja produzir.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([t, a, b, img], i) => (
            <div key={t} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-warm transition duration-300 hover:-translate-y-1">
              <img src={img} loading="lazy" alt={t} className="aspect-square w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Módulo 0{i + 1}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-secondary">{t}</h3>
                <p className="mt-3 text-sm">{a}</p>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center rounded-3xl bg-festive p-8 text-center text-secondary-foreground shadow-warm">
            <span className="text-4xl">🎄</span>
            <p className="mt-4 font-display text-2xl font-bold leading-snug">Cinco categorias para explorar diferentes possibilidades de criação neste Natal!</p>
            <p className="mt-3 text-sm opacity-85">Tudo organizado por módulo para você escolher, imprimir e montar com facilidade.</p>
            <div className="mt-6"><Cta variant="light">Ver planos disponíveis</Cta></div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-festive py-20 text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <H2 light>
              <Heart className="mr-3 inline-block h-8 w-8 align-[-0.12em] text-accent md:h-10 md:w-10" aria-hidden="true" />
              Para quem é esta coleção?
            </H2>
            <p className="mt-4 opacity-90">O Natal Criativo para Imprimir é uma opção para quem gosta de preparar presentes com criatividade e carinho.</p>
            <ul className="mt-6 space-y-3">
              {[["Para famílias:", "que desejam preparar lembranças personalizadas para pessoas queridas."], ["Para professores:", "que procuram materiais natalinos para presentear alunos ou colegas."], ["Para igrejas e comunidades:", "que desejam criar lembrancinhas para celebrações de Natal."], ["Para empresas:", "que querem preparar presentes e embalagens personalizadas para sua equipe ou clientes."], ["Para quem ama artesanato:", "e gosta de transformar papel em projetos criativos."]].map(([a, b]) => (
                <li key={a} className="rounded-2xl bg-secondary-foreground/10 p-4"><strong className="text-accent">{a}</strong> {b}</li>
              ))}
            </ul>
          </div>
          <img src="https://i.ibb.co/Df4cR4p0/Mockup-de-Artesanato-Natalino-Imprim-vel.png" loading="lazy" alt="Mockup de artesanato natalino imprimível" className="w-full rounded-3xl border-4 border-accent" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <H2>
          <Sparkles className="mr-3 inline-block h-8 w-8 align-[-0.12em] text-primary md:h-10 md:w-10" aria-hidden="true" />
          Mais criatividade para seus presentes de Natal!
        </H2>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
          {[
            [Printer, "Modelos preparados para impressão", "Escolha o material desejado e utilize os arquivos, sem precisar criar os desenhos do zero."],
            [Layers, "Diferentes categorias em uma coleção", "Explore caixinhas, embalagens, sacolinhas, tags e cartões."],
            [Palette, "Possibilidades de personalização", "Combine materiais, cores e acabamentos para deixar cada lembrancinha com um toque especial."],
            [Gift, "Materiais para diferentes ocasiões", "Prepare lembrancinhas para reuniões familiares, escolas, igrejas e confraternizações."],
          ].map(([Icon, t, d]) => {
            const CardIcon = Icon as typeof Printer;
            const title = t as string;
            const desc = d as string;
            return (
              <div key={title} className="rounded-3xl bg-card p-6 shadow-warm">
                <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-primary">
                  <CardIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{title}</span>
                </h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <H2>🎁 E você ainda recebe 2 bônus especiais!</H2>
            <p className="mt-4 text-muted-foreground">Além dos cinco módulos principais, a coleção completa inclui dois materiais complementares.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card shadow-warm">
              <img src="https://i.ibb.co/Xrcw7Cvq/Cole-o-de-Natal-Crist-o-em-B-nus.png" loading="lazy" alt="Coleção de Natal Cristão em Bônus" className="aspect-square w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Bônus 01</p>
                <h3 className="font-display text-2xl font-bold text-secondary">Coleção de Natal Cristão</h3>
                <p className="mt-2 font-bold">Celebre o verdadeiro significado do Natal!</p>
                <p className="mt-2 text-sm text-muted-foreground">Uma coleção com desenhos e mensagens cristãs que valorizam o nascimento de Jesus.</p>
                <p className="mt-2 text-sm text-muted-foreground">Materiais com presépios, estrela de Belém e mensagens de fé, amor, paz e esperança.</p>
                <p className="mt-2 text-sm text-muted-foreground">Ideal para acompanhar presentes e lembrancinhas de celebrações cristãs.</p>
                <span className="mt-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-extrabold">INCLUÍDO NO PLANO COMPLETO</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-card shadow-warm">
              <img src="https://i.ibb.co/6JbbjpJj/Guia-Natalino-de-Impress-o-e-Montagem.png" loading="lazy" alt="Guia Natalino de Impressão e Montagem" className="aspect-square w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Bônus 02</p>
                <h3 className="font-display text-2xl font-bold text-secondary">Guia de Impressão, Corte e Montagem</h3>
                <p className="mt-2 font-bold">Orientações para preparar suas lembrancinhas!</p>
                <p className="mt-2 text-sm text-muted-foreground">Um guia com informações sobre:</p>
                <ul className="mt-3 space-y-2">
                  {["Escolha do papel.", "Configurações de impressão.", "Linhas de recorte.", "Marcações de dobra.", "Abas para colagem.", "Dicas de montagem e acabamento."].map((t) => <Check key={t}>{t}</Check>)}
                </ul>
                <span className="mt-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-extrabold">INCLUÍDO NO PLANO COMPLETO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-festive py-20 text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <H2 light>
            <MessageCircleHeart className="mr-3 inline-block h-8 w-8 align-[-0.12em] text-accent md:h-10 md:w-10" aria-hidden="true" />
            Veja quem já garantiu e aprovou!
          </H2>
          <p className="mt-4 opacity-90">Confira mensagens recebidas pelo WhatsApp sobre os materiais de Natal.</p>
        </div>
        <div className="mx-auto max-w-6xl px-5">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="mx-auto max-w-5xl scroll-mt-6 px-5 py-20">
        <div className="text-center">
          <H2>🎄 Escolha seu plano e comece a criar!</H2>
          <p className="mt-4 text-muted-foreground">Pagamento único. Material digital entregue por e-mail após a confirmação da compra.</p>
        </div>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-border bg-card p-8">
            <img
              src="https://i.ibb.co/WvtxtVDN/Kit-Criativo-Natalino-em-Papelaria-Festiva-1.png"
              loading="lazy"
              alt="Kit Criativo Natalino em Papelaria Festiva"
              className="mb-6 aspect-[3/2] w-full rounded-2xl object-cover"
            />
            <h3 className="font-display text-2xl font-bold text-secondary">PLANO BÁSICO</h3>
            <p className="mt-2 text-sm text-muted-foreground">Uma opção de entrada para começar a criar suas lembrancinhas.</p>
            <p className="mt-6 font-display text-5xl font-bold">R$ 10,00</p>
            <p className="text-sm text-muted-foreground">Pagamento único.</p>
            <p className="mt-4 text-sm">Uma seleção de modelos natalinos para começar.</p>
            <ul className="mt-4 space-y-2">
              <Check>Arquivos digitais prontos para imprimir (tamanho A4).</Check>
              <Check>Entrega via WhatsApp e e-mail.</Check>
            </ul>
            <button
              type="button"
              onClick={() => setOfferPopupOpen(true)}
              className="mt-8 w-full rounded-full bg-green-500 px-6 py-4 font-extrabold uppercase text-white shadow-md transition hover:bg-green-400"
            >
              Quero o plano básico
            </button>
          </div>
          <div className="relative rounded-3xl border-4 border-accent bg-card p-8 shadow-warm">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-extrabold text-black">⭐ MAIS COMPLETO</span>
            <img
              src="https://i.ibb.co/XffLyRNj/Kit-natalino-de-artes-imprim-veis-2.png"
              loading="lazy"
              alt="Kit natalino de artes imprimíveis"
              className="mb-6 aspect-[3/2] w-full rounded-2xl object-cover"
            />
            <h3 className="font-display text-2xl font-bold text-black">PLANO COMPLETO</h3>
            <p className="mt-2 text-sm text-muted-foreground">A coleção para explorar todas as categorias de materiais natalinos!</p>
            <p className="mt-6 font-display text-5xl font-bold text-black">R$ 29,90</p>
            <p className="text-sm text-muted-foreground">Pagamento único.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <Check>Coleção de modelos natalinos para imprimir (tamanho A4).</Check>
              {modules.map(([t], i) => <Check key={t}>Módulo 0{i + 1} — {t}.</Check>)}
              <li>🎁 Bônus 01 — Coleção de Natal Cristão.</li>
              <li>🎁 Bônus 02 — Guia de Impressão, Corte e Montagem.</li>
              <Check>Entrega via WhatsApp e e-mail após confirmação da compra.</Check>
            </ul>
            <p className="mt-6 font-bold text-secondary">Tenha todos os módulos e bônus em uma única coleção!</p>
            <a
              href="https://pay.wiapy.com/2EvUd0q8iJKX"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-cta-pulse mt-4 block w-full rounded-full bg-green-500 px-6 py-4 text-center font-extrabold uppercase text-white shadow-lg transition hover:bg-green-400"
            >
              Quero a coleção completa
            </a>
            <p className="mt-3 text-center text-xs italic text-muted-foreground">Produto digital • Pagamento único • Sem envio físico</p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-3xl border-2 border-dashed border-secondary bg-card p-8 text-center">
          <div className="text-5xl">🔒</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-secondary">Sua compra com 7 dias de garantia</h2>
          <p className="mt-4">Você terá <strong>7 dias de garantia</strong> para solicitar o reembolso, conforme as condições informadas no momento da compra.</p>
          <p className="mt-2 text-muted-foreground">Assim, poderá adquirir seu material com mais tranquilidade.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center"><H2>❓ Perguntas frequentes</H2></div>
          <div className="mt-10 space-y-3">
            {faqs.map(([q, a], i) => (
              <div key={q} className="rounded-2xl bg-card">
                <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-secondary">
                  {q}<span className="text-2xl text-primary">{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="px-5 pb-5 text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-festive py-20 text-center text-secondary-foreground">
        <div className="mx-auto max-w-3xl px-5">
          <H2 light>🎄 Faça deste Natal uma época ainda mais especial!</H2>
          <div className="mt-6 space-y-1 text-lg opacity-90">
            <p>Uma caixinha preparada com carinho.</p>
            <p>Uma embalagem decorada para acompanhar um chocolate.</p>
            <p>Um cartão com uma mensagem especial.</p>
            <p>Uma sacolinha personalizada para presentear alguém querido.</p>
          </div>
          <p className="mt-6 italic">Às vezes, pequenos detalhes tornam um presente inesquecível.</p>
          <p className="mt-4 font-display text-2xl font-bold text-accent">Crie, personalize e compartilhe o carinho do Natal!</p>
          <p className="mt-2">🎁 Cinco módulos e dois bônus especiais para suas criações.</p>
          <div className="mt-8"><Cta variant="light">Garantir meu Natal Criativo para Imprimir</Cta></div>
        </div>
      </section>

      <footer className="bg-foreground py-10 text-center text-sm text-background">
        <p className="font-display text-lg font-bold">Natal Criativo para Imprimir</p>
        <p className="mt-1 opacity-80">Materiais digitais para imprimir, recortar e montar.</p>
        <p className="opacity-80">Produto digital. Não há envio de produtos físicos.</p>
        <p className="mt-4 opacity-70"><a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a> | <a href="#">Suporte</a></p>
      </footer>
      <SpecialOfferPopup open={offerPopupOpen} onClose={() => setOfferPopupOpen(false)} />
      <PurchaseNotifications />
    </main>
  );
}
