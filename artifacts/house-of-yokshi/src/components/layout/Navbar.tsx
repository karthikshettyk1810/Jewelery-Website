import React, { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import logoPng from "@assets/7CF8B355-954C-4ECF-A39D-224B035880FC_1783258234647.PNG";
import { useShop } from "@/hooks/use-shop";

export function Navbar() {
  const { cart, setIsCartOpen, setIsSearchOpen } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          <Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">Shop</span></Link>
          <Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">Collections</span></Link>
          <Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">Our Story</span></Link>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <img src={logoPng} alt="House of Yokshi" className="h-12 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-muted-foreground">
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-primary transition-colors hidden sm:block">
            <Heart size={20} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="hover:text-primary transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4">
          <Link href="/"><span className="block py-2 uppercase tracking-widest text-sm text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Shop</span></Link>
          <Link href="/"><span className="block py-2 uppercase tracking-widest text-sm text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Collections</span></Link>
          <Link href="/"><span className="block py-2 uppercase tracking-widest text-sm text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Our Story</span></Link>
        </div>
      )}
    </header>
  );
}
