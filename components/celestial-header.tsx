'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Moon, Star, Search, ShoppingCart, User, Menu, X } from 'lucide-react'

export function CelestialHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: '首頁', href: '/', icon: Star },
    { name: '商品', href: '/products', icon: Star },
    { name: '關於我們', href: '/about', icon: Star },
    { name: '購物車', href: '/cart', icon: ShoppingCart },
  ]

  return (
    <header className="relative z-50 w-full">
      {/* Starry background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm" />
      
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Moon Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Moon 
                className="w-10 h-10 text-slate-100 drop-shadow-lg" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(248, 248, 255, 0.6))'
                }}
              />
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-slate-100/10 animate-pulse" />
            </div>
            <span className="text-xl font-light text-slate-100 tracking-wide">
              夢境市集
            </span>
          </div>

          {/* Desktop Navigation - Constellation Style */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center space-x-1 text-slate-200 hover:text-slate-100 transition-all duration-300"
              >
                <item.icon 
                  className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(248, 248, 255, 0.4))'
                  }}
                />
                <span className="text-sm font-light tracking-wide group-hover:text-shadow-glow">
                  {item.name}
                </span>
                {/* Constellation effect on hover */}
                <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 bg-slate-200 rounded-full absolute -top-1 -left-1 animate-pulse" />
                  <div className="w-1 h-1 bg-slate-200 rounded-full absolute -top-1 -right-1 animate-pulse delay-100" />
                  <div className="w-1 h-1 bg-slate-200 rounded-full absolute -bottom-1 -left-1 animate-pulse delay-200" />
                  <div className="w-1 h-1 bg-slate-200 rounded-full absolute -bottom-1 -right-1 animate-pulse delay-300" />
                </div>
              </a>
            ))}
          </nav>

          {/* Telescope Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="探索夢境中的寶物..."
                className="w-64 bg-slate-900/30 border-slate-700/50 text-slate-100 placeholder:text-slate-400 rounded-full pl-10 pr-4 backdrop-blur-sm"
                style={{
                  boxShadow: 'inset 0 0 10px rgba(248, 248, 255, 0.1)'
                }}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              {/* Stardust particles effect */}
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" />
              </div>
            </div>

            {/* User Avatar - Asteroid Belt */}
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full bg-slate-800/30 border border-slate-700/50 hover:bg-slate-700/30 transition-all duration-300"
            >
              <User className="w-5 h-5 text-slate-200" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu - Starry Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Input
                  type="search"
                  placeholder="探索夢境..."
                  className="w-full bg-slate-800/50 border-slate-700/50 text-slate-100 placeholder:text-slate-400 rounded-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 text-slate-200 hover:text-slate-100 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-light">{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Bottom border with aurora effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </header>
  )
}