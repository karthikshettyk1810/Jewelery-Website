import React, { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import logoPng from "@assets/7CF8B355-954C-4ECF-A39D-224B035880FC_(1)_1783258628670.png";
import { useShop } from "@/hooks/use-shop";

export function Navbar() {
  const { cart, setIsCartOpen, setIsSearchOpen } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/">
          <img
            src={logoPng}
            alt="House of Yokshi"
            className="h-16 md:h-[4.5rem] w-auto cursor-pointer shrink-0 drop-shadow-[0_0_18px_rgba(212,175,120,0.35)] transition-all duration-500 ease-out hover:scale-105 hover:drop-shadow-[0_0_28px_rgba(212,175,120,0.55)] animate-in fade-in slide-in-from-top-4"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground ml-4">
          <Link href="/"><span className="relative group hover:text-primary transition-colors cursor-pointer py-1">
            Shop
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </span></Link>
          <Link href="/"><span className="relative group hover:text-primary transition-colors cursor-pointer py-1">
            Collections
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </span></Link>
          <Link href="/"><span className="relative group hover:text-primary transition-colors cursor-pointer py-1">
            Our Story
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </span></Link>
        </nav>

        <div className="flex-1" />

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-muted-foreground">
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-primary transition-colors hover:scale-110 active:scale-95 duration-200">
            <Search size={20} />
          </button>
          <button className="hover:text-primary transition-colors hidden sm:block hover:scale-110 active:scale-95 duration-200">
            <Heart size={20} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="hover:text-primary transition-colors relative hover:scale-110 active:scale-95 duration-200"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in duration-300">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 z-40 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link href="/"><span className="block py-2 uppercase tracking-widest text-sm text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Shop</span></Link>
          <Link href="/"><span className="block py-2 uppercase tracking-widest text-sm text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Collections</span></Link>
          <Link href="/"><span className="block py-2 uppercase tracking-widest text-sm text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Our Story</span></Link>
        </div>
      )}
    </header>
  );
}
