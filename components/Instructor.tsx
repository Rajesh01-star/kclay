import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Instructor() {
  return (
    <section id="instructor" className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-clayBrown mb-8 text-center">Meet Your Instructor</h2>
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Emma Thompson" />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
          <h3 className="text-2xl font-semibold text-clayBrown mb-2">Emma Thompson</h3>
          <p className="text-charcoal text-center max-w-2xl">
            Emma has been working with clay for over 15 years and has a passion for teaching. With a background in fine arts and a specialization in ceramics, she brings a wealth of knowledge and creativity to every class. Emma's patient and encouraging teaching style makes her classes enjoyable for students of all skill levels.
          </p>
        </div>
      </div>
    </section>
  )
}
