import { Card, CardContent } from "./ui/card"

export default function CaseStudies() {
  const cases = [
    {
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
      company: "SAMSUNG",
      description: "Advertising Tracking Research",
    },
    {
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
      company: "Seagram's",
      description: "Fuel Vodka Packaging Research",
    },
    {
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
      company: "ITC Limited",
      description: "Shop Census for Bingo",
    },
    {
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
      company: "SDL",
      description: "Research for the TV Programme",
    },
  ]

  return (
    <div className="p-6 bg-[#FDF6EC]">
      <h2 className="text-[#8B4513] text-3xl md:text-4xl font-heading mb-8 text-center">Case Studies</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto font-subheading">
        {cases.map((caseStudy, index) => (
          <Card
            key={index}
            className="relative h-[200px] lg:h-[280px] overflow-hidden group border-4 border-[#e6d7c4] rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#d7c8b5]"
            style={{
              backgroundImage: `url(${caseStudy.logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5e6d3] via-[#f5e6d3]/80 to-transparent opacity-90" />
            <CardContent className="h-full flex flex-col justify-end p-4 relative">
              <div className="text-center space-y-2">
                <h3 className="font-medium text-[#8B4513] text-sm lg:text-base">{caseStudy.company}</h3>
                <p className="text-xs lg:text-sm text-[#8B4513]/80 leading-snug">{caseStudy.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

