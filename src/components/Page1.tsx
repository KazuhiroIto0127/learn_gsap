import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Page1 = () => {
  const container = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (box.current && circle.current) {
        gsap.to(box.current, { rotation: "+=360", duration: 3 });
        gsap.to(circle.current, { rotation: "-=360", duration: 3 });
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full h-full pt-5 px-6">
      <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl"
           ref={box}>
        selector
      </div>
      <div className='m-4'></div>
      <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-b rounded-full from-yellow-400 to-red-500"
           ref={circle}>
        Circle
      </div>
    </div>
  )
}

export default Page1
