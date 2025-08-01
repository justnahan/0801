'use client'

import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleDelay: number
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 5,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top, #1e1b4b 0%, #0f0c29 50%, #24153d 100%),
            linear-gradient(135deg, #2d1b69 0%, #0f0c29 50%, #1a1a2e 100%)
          `
        }}
      />

      {/* Aurora effects */}
      <div className="absolute inset-0">
        {/* Aurora 1 - Pink-Purple */}
        <div 
          className="absolute w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 30%, 
                rgba(255, 107, 107, 0.3) 0%, 
                rgba(255, 182, 193, 0.2) 30%, 
                transparent 70%)
            `,
            animation: 'aurora1 8s ease-in-out infinite alternate'
          }}
        />

        {/* Aurora 2 - Cyan-Green */}
        <div 
          className="absolute w-full h-full opacity-25"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 80% 60%, 
                rgba(78, 205, 196, 0.4) 0%, 
                rgba(168, 230, 207, 0.2) 40%, 
                transparent 70%)
            `,
            animation: 'aurora2 10s ease-in-out infinite alternate-reverse'
          }}
        />

        {/* Aurora 3 - Purple-Blue */}
        <div 
          className="absolute w-full h-full opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 700px 350px at 50% 80%, 
                rgba(147, 51, 234, 0.3) 0%, 
                rgba(79, 70, 229, 0.2) 50%, 
                transparent 70%)
            `,
            animation: 'aurora3 12s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-slate-100"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle 3s ease-in-out infinite ${star.twinkleDelay}s`,
              boxShadow: `
                0 0 ${star.size * 2}px rgba(248, 248, 255, 0.5),
                0 0 ${star.size * 4}px rgba(248, 248, 255, 0.2)
              `
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-1 h-1 bg-slate-100 rounded-full opacity-0"
          style={{
            top: '20%',
            left: '-5%',
            animation: 'shootingStar 8s linear infinite',
            boxShadow: '0 0 6px 2px rgba(248, 248, 255, 0.8)'
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-slate-100 rounded-full opacity-0"
          style={{
            top: '60%',
            left: '-5%',
            animation: 'shootingStar 12s linear infinite 4s',
            boxShadow: '0 0 6px 2px rgba(248, 248, 255, 0.8)'
          }}
        />
      </div>

      {/* Nebula clouds */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            top: '10%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full"
          style={{
            bottom: '20%',
            left: '5%',
            background: 'radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes aurora1 {
          0% { transform: translateX(-10%) translateY(-5%) rotate(-2deg); opacity: 0.3; }
          100% { transform: translateX(10%) translateY(5%) rotate(2deg); opacity: 0.5; }
        }

        @keyframes aurora2 {
          0% { transform: translateX(10%) translateY(5%) rotate(1deg); opacity: 0.25; }
          100% { transform: translateX(-5%) translateY(-10%) rotate(-1deg); opacity: 0.4; }
        }

        @keyframes aurora3 {
          0% { transform: translateX(-5%) translateY(10%) rotate(-1deg); opacity: 0.2; }
          100% { transform: translateX(5%) translateY(-5%) rotate(1deg); opacity: 0.35; }
        }

        @keyframes shootingStar {
          0% { 
            opacity: 0; 
            transform: translateX(0) translateY(0) rotate(45deg); 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            opacity: 0; 
            transform: translateX(120vw) translateY(60vh) rotate(45deg); 
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}