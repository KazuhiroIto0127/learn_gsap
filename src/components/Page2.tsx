import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Page2 = () => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "bounce.out"
      })
    }
  }, []);

  return (
    <div ref={container} className="w-full h-full flex items-center justify-center">
      <div ref={textRef} className="text-4xl font-bold text-gray-800">
        Page 2 Content
      </div>
    </div>
  )
}

export default Page2
