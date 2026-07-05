import React, { useEffect, useState } from "react";
import { products } from "@/data/products";
import { useShop, Product } from "@/hooks/use-shop";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { CheckoutDialog } from "@/components/shop/CheckoutDialog";
import { SearchDrawer } from "@/components/shop/SearchDrawer";
import { ProductDetailDialog } from "@/components/shop/ProductDetailDialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "The Lumière Diamond Ring is breathtaking. It feels substantial and looks incredibly high-end. I wear it every single day.",
      author: "Eleanor V."
    },
    {
      id: 2,
      quote: "Finally found a brand that understands understated luxury. The gold doesn't tarnish, and the packaging was an experience in itself.",
      author: "Sarah M."
    },
    {
      id: 3,
      quote: "I've received so many compliments on my Zenith Cuff. It's the perfect statement piece without being overwhelming.",
      author: "Chloe T."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={products[0]?.image} 
            alt="Hero Jewelry" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <span className="uppercase tracking-[0.3em] text-primary text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">The New Collection</span>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both drop-shadow-lg">
            Curated for Your Everyday Style
          </h1>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 h-14 uppercase tracking-widest text-sm animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both"
            onClick={() => {
              document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-primary">Accessible Luxury</h3>
            <p className="text-muted-foreground font-sans text-sm max-w-xs mx-auto">Boutique quality without the traditional retail markup. Fine materials designed for everyone.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-primary">Ethically Sourced</h3>
            <p className="text-muted-foreground font-sans text-sm max-w-xs mx-auto">Committed to conflict-free gemstones and recycled gold for a sustainable future.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-primary">Lifetime Care</h3>
            <p className="text-muted-foreground font-sans text-sm max-w-xs mx-auto">Every piece includes complimentary cleaning and maintenance to last generations.</p>
          </div>
        </div>
      </section>

      {/* Shop Grid */}
      <section id="shop" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-foreground mb-4">The Atelier Collection</h2>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">Discover our curated selection of signature pieces, designed to be stacked, layered, and lived in.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col"
              >
                <div 
                  className="relative aspect-[3/4] bg-secondary mb-6 overflow-hidden rounded-sm cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] uppercase tracking-wider px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Wishlist Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                    className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={wishlist.includes(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </button>

                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Quick Add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      className="w-full bg-background/95 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest text-xs h-12"
                      onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    >
                      Add to Bag
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow text-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 
                    className="font-serif text-lg text-foreground mb-2 flex-grow cursor-pointer hover:text-primary transition-colors"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <div className="font-sans text-primary">${product.price.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-foreground">Words from the Atelier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="p-8 border border-border bg-card flex flex-col justify-between">
                <p className="font-serif text-lg text-foreground leading-relaxed italic mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-px bg-primary w-8"></div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-secondary border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={products[5]?.image} alt="Background texture" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Join the Atelier</h2>
          <p className="text-muted-foreground font-sans mb-10 text-lg">Subscribe to receive exclusive access to new collections, private sales, and jewelry styling tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-background border border-border px-4 py-3 font-sans outline-none focus:border-primary transition-colors text-foreground"
              required
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-3 uppercase tracking-widest text-xs">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <CartDrawer />
      <CheckoutDialog />
      <SearchDrawer />
      <ProductDetailDialog 
        product={selectedProduct} 
        isOpen={selectedProduct !== null} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  );
}
