import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Page3 = () => {
  const container = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (itemsRef.current) {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.2,
            ease: "power2.out"
          })
        }
      })
    }
  }, []);

  return (
    <div ref={container} className="w-full h-full flex flex-col items-center justify-center space-y-4">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div
          key={item}
          ref={el => itemsRef.current[index] = el}
          className="w-64 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold"
        >
          Item {item}
        </div>
      ))}
    </div>
  )
}

export default Page3
