import { Metadata } from 'next'
import { StarryBackground } from '@/components/starry-background'
import { CelestialHeader } from '@/components/celestial-header'
import { DreamProductGrid } from '@/components/dream-product-grid'

export const metadata: Metadata = {
  title: '夢境市集 | Dream Market',
  description: '在夢境中尋找您心愛的寶物，體驗超現實的購物之旅',
  keywords: '夢境, 購物, 電商, 超現實, 藝術',
  openGraph: {
    title: '夢境市集 - 超現實購物體驗',
    description: '在夢境中尋找您心愛的寶物，體驗超現實的購物之旅',
    type: 'website',
  }
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Starry Background */}
      <StarryBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Celestial Header */}
        <CelestialHeader />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 
              className="text-5xl md:text-7xl font-light text-slate-100 mb-6"
              style={{
                textShadow: '0 0 30px rgba(248, 248, 255, 0.8)'
              }}
            >
              夢境市集
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              歡迎來到超現實的購物空間，每一件商品都漂浮在夢境的雲朵上，
              等待與您在星空中相遇
            </p>
            
            {/* Floating elements */}
            <div className="relative">
              <div 
                className="absolute -top-10 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                style={{
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.8)',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute -top-6 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
                  animation: 'float 8s ease-in-out infinite 2s'
                }}
              />
              <div 
                className="absolute -bottom-8 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"
                style={{
                  boxShadow: '0 0 12px rgba(244, 114, 182, 0.8)',
                  animation: 'float 7s ease-in-out infinite 1s'
                }}
              />
            </div>
          </div>
        </section>
        
        {/* Product Grid */}
        <DreamProductGrid />
        
        {/* Dream Footer */}
        <footer className="relative py-16 px-4">
          <div className="container mx-auto">
            {/* Horizon gradient */}
            <div 
              className="h-px mb-8"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(248, 248, 255, 0.3) 20%, rgba(147, 51, 234, 0.5) 50%, rgba(78, 205, 196, 0.5) 80%, transparent 100%)'
              }}
            />
            
            {/* Footer Content */}
            <div className="text-center space-y-6">
              <div className="flex justify-center space-x-8 flex-wrap">
                {[
                  { name: '關於夢境', href: '/about' },
                  { name: '聯絡我們', href: '/contact' },
                  { name: '夢境指南', href: '/guide' },
                  { name: '隱私政策', href: '/privacy' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-400 hover:text-slate-200 font-light transition-all duration-300"
                    style={{
                      textShadow: '0 0 10px rgba(248, 248, 255, 0.3)'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Social Media Stars */}
              <div className="flex justify-center space-x-6">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center border border-slate-600/50 hover:border-slate-400/50 transition-all duration-300 cursor-pointer"
                    style={{
                      boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)'
                    }}
                  >
                    <div className="w-2 h-2 bg-slate-300 rounded-full" />
                  </div>
                ))}
              </div>
              
              {/* Copyright with stardust font */}
              <p 
                className="text-slate-500 font-light text-sm"
                style={{
                  textShadow: '0 0 8px rgba(248, 248, 255, 0.2)'
                }}
              >
                © 2024 夢境市集 Dream Market. 在夢境中創造美好回憶
              </p>
            </div>
          </div>
        </footer>
      </div>
      
    </div>
  )
}
