import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-sandBeige shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-clayBrown">Clay Creations</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="text-charcoal hover:text-accent transition-colors">About</Link></li>
          <li><Link href="#classes" className="text-charcoal hover:text-accent transition-colors">Classes</Link></li>
          <li><Link href="#instructor" className="text-charcoal hover:text-accent transition-colors">Instructor</Link></li>
          <li><Link href="#contact" className="text-charcoal hover:text-accent transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
