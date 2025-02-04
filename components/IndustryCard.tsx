interface IndustryCardProps {
  title: string
  items: string[]
}

export function IndustryCard({ title, items }: IndustryCardProps) {
  return (
    <div className="relative w-full max-w-[335px] h-[320px] rounded-3xl p-2 shadow-lg overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/50 border border-black/45 text-center" />

      {/* Header with gradient */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-br from-orange-600 via-button to-button">
        <h3 className="text-secondary text-xl p-3 text-center">{title}</h3>
      </div>

      {/* Content */}
      <div className="pt-16 px-6">
        <ul className="space-y-2 text-[#32180A] drop-shadow">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

