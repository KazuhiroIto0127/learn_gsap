import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Page4 = () => {
  const container = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
    }
  }, []);

  return (
    <div ref={container} className="w-full h-full flex items-center justify-center">
      <div ref={gridRef} className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Box {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page4
