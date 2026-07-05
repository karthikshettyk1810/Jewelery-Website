import React, { useState } from "react";
import { useShop, Product } from "@/hooks/use-shop";
import { X, Search } from "lucide-react";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";

export function SearchDrawer() {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState("");

  if (!isSearchOpen) return null;

  const results = query.length > 1 
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />
      <div className="fixed top-0 left-0 w-full bg-card border-b border-border shadow-2xl z-50 animate-in slide-in-from-top duration-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-primary">Search</h2>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for rings, necklaces, or collections..." 
              className="w-full bg-background border-border h-14 pl-12 rounded-none font-sans text-lg focus-visible:ring-primary"
              autoFocus
            />
          </div>

          {query.length > 1 && (
            <div className="max-h-[50vh] overflow-y-auto">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Results ({results.length})</h3>
              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {results.map(product => (
                    <div key={product.id} className="flex items-center gap-4 cursor-pointer group" onClick={() => setIsSearchOpen(false)}>
                      <div className="w-16 h-16 bg-secondary overflow-hidden rounded-sm flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-foreground group-hover:text-primary transition-colors">{product.name}</h4>
                        <p className="text-sm font-sans text-muted-foreground">${product.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground font-sans">No products found matching "{query}".</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
