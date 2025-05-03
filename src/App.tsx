import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './App.css'

function App() {
  const helloRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (helloRef.current) {
      // 初期状態を設定
      gsap.set(helloRef.current, {
        opacity: 0,
        y: -100
      })

      // アニメーションを実行
      gsap.to(helloRef.current, {
        duration: 2,
        y: 0,
        opacity: 1,
        rotation: 360,
        ease: "bounce.out",
        onComplete: () => {
          console.log('アニメーション完了！')
        }
      })
    }
  }, [])

  return (
    <div className="app">
      <div ref={helloRef} className="hello-world">
        Hello World
      </div>
    </div>
  )
}

export default App
