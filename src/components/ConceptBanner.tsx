interface ConceptBannerProps {
  locale?: string;
}

export default function ConceptBanner({ locale = "es" }: ConceptBannerProps) {
  const isSpanish = locale === "es";

  return (
    <div
      role="note"
      aria-label={isSpanish ? "Aviso de proyecto conceptual" : "Concept project notice"}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-[60] rounded-lg border border-amber-600/40 bg-amber-400/95 text-stone-900 px-4 py-3 text-xs sm:text-sm font-medium leading-snug shadow-lg backdrop-blur-sm pointer-events-none"
    >
      {isSpanish ? (
        <>
          <strong>Proyecto de portfolio</strong> — Rediseño conceptual por Luis Lozoya.
          No afiliado ni respaldado por NEVA Estudio.
        </>
      ) : (
        <>
          <strong>Portfolio Project</strong> — Concept redesign by Luis Lozoya.
          Not affiliated with or endorsed by NEVA Estudio.
        </>
      )}
    </div>
  );
}
