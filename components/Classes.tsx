import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const classOfferings = [
  {
    title: "Beginner's Wheel Throwing",
    description: "Learn the basics of centering, pulling, and shaping clay on the potter's wheel.",
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    title: "Hand-Building Techniques",
    description: "Explore various hand-building methods including pinch pots, coil building, and slab construction.",
    duration: "4 weeks",
    level: "All levels"
  },
  {
    title: "Glaze Chemistry",
    description: "Dive into the science of glazes and learn to create your own unique finishes.",
    duration: "3 weeks",
    level: "Intermediate"
  }
]

export default function Classes() {
  return (
    <section id="classes" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-font mb-8 text-center">Our Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classOfferings.map((offering, index) => (
            <Card key={index} className="bg-accent p-6 rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="text-font">{offering.title}</CardTitle>
                <CardDescription className="text-accent-foreground">{offering.level} - {offering.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-font">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
