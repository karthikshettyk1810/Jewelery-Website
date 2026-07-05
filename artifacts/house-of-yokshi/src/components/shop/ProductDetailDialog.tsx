import React from "react";
import { useShop, Product } from "@/hooks/use-shop";
import { X, Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailDialogProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailDialog({ product, isOpen, onClose }: ProductDetailDialogProps) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [quantity, setQuantity] = React.useState(1);

  if (!isOpen || !product) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-card shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200 rounded-sm border border-border max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-secondary relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
            {product.category}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {product.name}
          </h2>
          <div className="font-sans text-2xl text-primary mb-6">
            ${product.price.toLocaleString()}
          </div>
          
          <div className="prose prose-sm dark:prose-invert text-muted-foreground font-sans mb-8">
            <p>{product.description}</p>
            <p className="mt-4">
              Our pieces are crafted to order. Expected delivery within 2-3 business days.
            </p>
          </div>

          <div className="mt-auto space-y-6">
            <div className="flex items-center gap-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Quantity</span>
              <div className="flex items-center border border-border rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-sans">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  addToCart(product, quantity);
                  onClose();
                }}
                className="flex-grow bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest text-sm"
              >
                Add to Bag
              </Button>
              <Button 
                variant="outline"
                onClick={() => toggleWishlist(product.id)}
                className={`w-14 h-14 rounded-none border-border hover:bg-secondary ${wishlist.includes(product.id) ? 'text-primary' : 'text-foreground'}`}
              >
                <Heart size={20} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
