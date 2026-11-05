interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
}) => {
  return (

    <>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-border" />
        <h2 className="text-xl font-medium uppercase tracking-[0.35em] text-muted-foreground">
          {title}
        </h2>
      </div>

    </>
  )
}

