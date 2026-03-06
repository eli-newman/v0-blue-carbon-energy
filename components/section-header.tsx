interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground text-balance max-w-2xl">{subtitle}</p>}
    </div>
  )
}
