'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Component() {
  const [activeSection, setActiveSection] = useState('')
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const sections = [
    { id: 'hero', title: 'ホーム' },
    { id: 'empathy', title: '共感' },
    { id: 'misconception', title: '先入観' },
    { id: 'rebuttal', title: '反論' },
    { id: 'explanation', title: '説明' },
    { id: 'profile', title: 'プロフィール' },
    { id: 'service', title: 'サービス' },
    { id: 'offer', title: 'オファー' },
    { id: 'faq', title: 'FAQ' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      let current = ''

      sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const sectionTop = element.offsetTop - 100
          const sectionBottom = sectionTop + element.offsetHeight
          if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
            current = section.id
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 bg-opacity-80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-300 ${
                    activeSection === section.id ? 'text-blue-300' : 'text-white'
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      />

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold mb-6">AI革命を、あなたの会社の現実に</h1>
            <p className="text-xl mb-8">変革の波に乗り遅れていませんか？AIの力を解き放ち、ビジネスの未来を創造する。</p>
            <a
              href="#offer"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <section id="empathy" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-blue-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">多くの経営者の方々が、AIの導入に悩んでいます</h2>
            <p className="text-xl mb-4">「従業員が全然使ってくれない」「どう始めればいいかわからない」そんな声をよく耳にします。</p>
          </div>
        </section>

        <section id="misconception" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-indigo-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">「AIは難しい」「うちの会社には合わない」</h2>
            <p className="text-xl">そう思っていませんか？</p>
          </div>
        </section>

        <section id="rebuttal" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-blue-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">しかし、それは誤解です</h2>
            <p className="text-xl">AIは、正しい導入方法さえ知れば、どんな企業にも革命をもたらす力を秘めています。</p>
          </div>
        </section>

        <section id="explanation" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-indigo-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">AIの導入に成功している企業には、共通点があります</h2>
            <p className="text-xl">それは、経営層と現場を繋ぐ「架け橋」の存在です。我々はその架け橋となり、あなたの会社にAIによる変革をもたらします。</p>
          </div>
        </section>

        <section id="profile" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-blue-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">私たちについて</h2>
            <p className="text-xl">私たちは、AI技術と経営コンサルティングの両方に精通したプロフェッショナル集団です。大手IT企業でのAI開発経験と、多数の企業へのコンサルティング実績を持つメンバーが、あなたの会社のAI導入を成功に導きます。</p>
          </div>
        </section>

        <section id="service" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-indigo-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">CAIO（Chief AI Officer）アドバイザリーサービス</h2>
            <p className="text-xl mb-6">あなたの会社専属のCAIOとして、AI戦略の立案から導入、社内教育まで一貫してサポートします。</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-6 w-6 text-green-400 flex-shrink-0" />
                <span>AIによる業務効率化で、生産性が平均30%向上</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-6 w-6 text-green-400 flex-shrink-0" />
                <span>従業員のAIリテラシー向上により、イノベーション創出力が強化</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-6 w-6 text-green-400 flex-shrink-0" />
                <span>データ駆動型意思決定の実現で、経営判断のスピードと精度が向上</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-6 w-6 text-green-400 flex-shrink-0" />
                <span>競合他社との差別化要因の創出</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="offer" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-blue-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">サービス詳細</h2>
            <p className="text-xl mb-4">月額100万円〜（契約期間：6ヶ月〜）</p>
            <p className="text-sm mb-6">※企業規模、プロジェクト内容により変動します</p>
            <div className="bg-white text-blue-900 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">保証</h3>
              <p>3ヶ月以内にAI導入による具体的な成果が出ない場合、全額返金いたします。</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">特典</h3>
              <ul className="list-disc list-inside">
                <li>無料AI戦略診断（通常50万円相当）</li>
                <li>AI活用事例集（非公開事例含む）進呈</li>
                <li>経営陣向けAI勉強会（月1回）</li>
              </ul>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <section id="faq" className="min-h-screen flex items-center justify-center bg-opacity-80 bg-indigo-800 px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">よくある質問</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Q: AIの知識がまったくないのですが大丈夫でしょうか？</h3>
                <p>A: はい、問題ありません。むしろ、白紙の状態からのほうが、最適なAI戦略を構築しやすいです。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: 導入にはどのくらいの期間がかかりますか？</h3>
                <p>A: 通常、最初の成果が出るまで3〜6ヶ月程度です。ただし、企業規模や目標により変動します。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: 他のAIコンサルティングサービスとの違いは？</h3>
                <p>A: 私たちは単なるアドバイスで終わりません。実際に社内に入り、従業員と共にAIを活用する文化を創り上げます。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center bg-opacity-80 bg-blue-900 px-4">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">AIによる真の変革を実現しませんか？</h2>
            <p className="text-xl mb-8">今すぐ無料相談をお申し込みください。あなたの会社の未来が、ここから始まります。</p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 text-xl font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}