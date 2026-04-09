interface ConceptBannerProps {
  locale?: string;
}

export default function ConceptBanner({ locale = "es" }: ConceptBannerProps) {
  const isSpanish = locale === "es";

  return (
    <div
      role="note"
      aria-label={isSpanish ? "Aviso de proyecto conceptual" : "Concept project notice"}
      className="bg-amber-400 text-stone-900 text-center py-2 px-4 text-xs sm:text-sm font-medium leading-snug"
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
