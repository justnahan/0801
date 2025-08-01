'use client'

import { useEffect, useState } from 'react'
import { CloudProductCard } from './cloud-product-card'
import { Product } from '@/types/product'

export function DreamProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError('Failed to load products')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Loading animation - spinning galaxy */}
          <div className="relative w-16 h-16">
            <div 
              className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin"
              style={{ borderTopColor: '#8b5cf6' }}
            />
            <div 
              className="absolute inset-2 border-2 border-cyan-400/50 rounded-full animate-spin"
              style={{ 
                borderTopColor: '#22d3ee',
                animationDirection: 'reverse',
                animationDuration: '1.5s'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <p className="text-slate-300 font-light text-lg">
            正在穿越夢境...
          </p>
          
          {/* Loading stardust */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
              <span className="text-red-400 text-2xl">✦</span>
            </div>
          </div>
          <p className="text-red-400 font-light text-lg mb-2">夢境連接失敗</p>
          <p className="text-slate-400 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-4xl font-light text-slate-100 mb-4"
          style={{
            textShadow: '0 0 20px rgba(248, 248, 255, 0.6)'
          }}
        >
          夢境寶物
        </h2>
        <p className="text-slate-300 font-light text-lg max-w-2xl mx-auto">
          每一件商品都飄浮在夢境的雲朵上，等待與您相遇
        </p>
        
        {/* Decorative stars */}
        <div className="flex justify-center space-x-8 mt-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-slate-300 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                boxShadow: '0 0 8px rgba(248, 248, 255, 0.8)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="justify-self-center w-full max-w-sm"
            style={{
              transform: `translateY(${(index % 3) * 20}px)`, // Irregular cloud heights
            }}
          >
            <CloudProductCard 
              product={product} 
              delay={index * 0.5} // Stagger the floating animation
            />
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-4 text-slate-400 font-light">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-400" />
          <span>更多夢境寶物即將到來</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-400" />
        </div>
      </div>
    </div>
  )
}