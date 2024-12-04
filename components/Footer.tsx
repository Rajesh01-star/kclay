import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-clayBrown text-offWhite py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Clay Creations</h3>
            <p className="text-sandBeige">Unleash your creativity with clay</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-offWhite hover:text-accent transition-colors"><Facebook /></a>
            <a href="#" className="text-offWhite hover:text-accent transition-colors"><Instagram /></a>
            <a href="#" className="text-offWhite hover:text-accent transition-colors"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sandBeige">
          <p>&copy; 2023 Clay Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
