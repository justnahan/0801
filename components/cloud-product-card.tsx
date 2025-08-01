'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ProductCardProps } from '@/types/product'

export function CloudProductCard({ product, delay = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const formatPrice = (priceInCents: number) => {
    return `NT$ ${(priceInCents / 100).toLocaleString()}`
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600))
    setIsAddingToCart(false)
  }

  return (
    <div 
      className="relative group"
      style={{
        animation: `cloudFloat 4s ease-in-out infinite ${delay}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cloud base */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-slate-100/20 to-slate-300/10 rounded-full transform transition-all duration-500",
          isHovered ? "scale-110 shadow-2xl" : "scale-100"
        )}
        style={{
          filter: isHovered 
            ? 'blur(20px) drop-shadow(0 0 30px rgba(248, 248, 255, 0.6))' 
            : 'blur(15px) drop-shadow(0 0 15px rgba(248, 248, 255, 0.3))',
          background: isHovered 
            ? 'radial-gradient(ellipse, rgba(255, 182, 193, 0.3) 0%, rgba(168, 230, 207, 0.2) 50%, rgba(248, 248, 255, 0.1) 100%)'
            : 'radial-gradient(ellipse, rgba(248, 248, 255, 0.2) 0%, rgba(192, 192, 192, 0.1) 100%)'
        }}
      />

      {/* Product card */}
      <Card className={cn(
        "relative z-10 bg-slate-900/40 backdrop-blur-md border-slate-700/50 overflow-hidden transition-all duration-500 transform",
        isHovered ? "scale-105 bg-slate-900/60" : "scale-100"
      )}>
        {/* Rainbow aura on hover */}
        {isHovered && (
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: `
                conic-gradient(from 0deg, 
                  rgba(255, 107, 107, 0.3), 
                  rgba(78, 205, 196, 0.3), 
                  rgba(147, 51, 234, 0.3), 
                  rgba(255, 182, 193, 0.3), 
                  rgba(255, 107, 107, 0.3)
                )
              `,
              animation: 'rainbow 3s linear infinite'
            }}
          />
        )}

        <div className="relative z-20 p-4">
          {/* Product Image */}
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <Image
              src={product.image_url}
              alt={product.name}
              width={300}
              height={300}
              className={cn(
                "w-full h-48 object-cover transition-all duration-500",
                isHovered ? "scale-110 brightness-110" : "scale-100"
              )}
              style={{
                filter: isHovered 
                  ? 'drop-shadow(0 0 20px rgba(248, 248, 255, 0.4))' 
                  : 'none'
              }}
            />
            
            {/* Sparkle effects on hover */}
            {isHovered && (
              <>
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                <div className="absolute top-4 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                <div className="absolute bottom-3 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
              </>
            )}

            {/* Like button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 left-2 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart 
                className={cn(
                  "w-4 h-4 transition-all duration-300",
                  isLiked ? "fill-pink-400 text-pink-400" : "text-slate-300"
                )}
              />
            </Button>
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <h3 
              className="text-slate-100 font-light text-lg leading-tight"
              style={{
                textShadow: isHovered ? '0 0 10px rgba(248, 248, 255, 0.6)' : 'none'
              }}
            >
              {product.name}
            </h3>

            {/* Star rating */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))',
                    animation: isHovered ? `starTwinkle 0.8s ease-in-out infinite ${star * 0.1}s` : 'none'
                  }}
                />
              ))}
            </div>

            {/* Price */}
            <div 
              className="inline-flex items-center px-3 py-1 rounded-full text-slate-100 font-medium"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 182, 193, 0.2))',
                boxShadow: isHovered ? '0 0 15px rgba(255, 215, 0, 0.4)' : '0 0 8px rgba(255, 215, 0, 0.2)',
                textShadow: '0 0 8px rgba(255, 215, 0, 0.8)'
              }}
            >
              {formatPrice(product.price_in_cents)}
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={cn(
                "w-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 border-none text-slate-100 font-light transition-all duration-300",
                isAddingToCart && "opacity-75 cursor-not-allowed"
              )}
              style={{
                boxShadow: isHovered 
                  ? '0 0 20px rgba(147, 51, 234, 0.6), inset 0 0 20px rgba(255, 182, 193, 0.2)' 
                  : '0 0 10px rgba(147, 51, 234, 0.4)',
                textShadow: '0 0 8px rgba(248, 248, 255, 0.8)'
              }}
            >
              {isAddingToCart ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-slate-300 border-t-transparent rounded-full animate-spin" />
                  <span>飛向購物車...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>加入購物車</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Particle effects on click */}
      {isAddingToCart && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                animation: `particleExplode 1s ease-out forwards ${i * 0.1}s`,
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes cloudFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(0.5deg); }
          66% { transform: translateY(4px) rotate(-0.5deg); }
        }

        @keyframes rainbow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes particleExplode {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateX(40px) scale(0);
          }
        }
      `}</style>
    </div>
  )
}