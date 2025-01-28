interface IndustryCardProps {
  title: string
  items: string[]
}

export function IndustryCard({ title, items }: IndustryCardProps) {
  return (
    <div className="relative w-full max-w-[335px] h-[286px] rounded-3xl p-2 shadow-lg overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/50 border border-black/45" />

      {/* Header with gradient */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-br from-gray-200 to-[#B68D40]">
        <h3 className="text-[#632F00] text-xl font-semibold p-4">{title}</h3>
      </div>

      {/* Content */}
      <div className="pt-20 px-6">
        <ul className="space-y-2 text-[#32180A] drop-shadow">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

