import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
    }
  }, [])

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/page1" className="text-gray-700 hover:text-blue-500 transition-colors">Page 1</Link>
          </li>
          <li>
            <Link to="/page2" className="text-gray-700 hover:text-blue-500 transition-colors">Page 2</Link>
          </li>
          <li>
            <Link to="/page3" className="text-gray-700 hover:text-blue-500 transition-colors">Page 3</Link>
          </li>
          <li>
            <Link to="/page4" className="text-gray-700 hover:text-blue-500 transition-colors">Page 4</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
