import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import SplitText from 'gsap/SplitText'
const Page5 = () => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.registerPlugin(SplitText);
      const split = new SplitText(textRef.current, { type: 'words, chars, lines' });

      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  return (
    <div ref={container} className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1
          ref={textRef}
          className="text-9xl font-dela-gothic"
        >
          テストだよ これはGSAPのテストだよ
          こんにちは〜世界の皆さん！！！！！
          Hello World yeah 🧜
        </h1>
      </div>
    </div>
  )
}

export default Page5
