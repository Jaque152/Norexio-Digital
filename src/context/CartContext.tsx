"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "norexiodigital-cart";

export interface Plan {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  features?: string[];
  description?: string;
}

export interface CartItem extends Plan {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  totalItems: number;
  totalPrice: number;

  addToCart: (product: Plan, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;

  getItemQuantity: (productId: string) => number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({
  children,
}: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Load persisted cart
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    try {
      const storedCart =
        typeof window !== "undefined"
          ? window.localStorage.getItem(STORAGE_KEY)
          : null;

      if (!storedCart) {
        setIsInitialized(true);
        return;
      }

      const parsedCart: unknown = JSON.parse(storedCart);

      if (!Array.isArray(parsedCart)) {
        setItems([]);
        setIsInitialized(true);
        return;
      }

      const validatedItems: CartItem[] = parsedCart.filter(
        (item): item is CartItem =>
          typeof item === "object" &&
          item !== null &&
          typeof item.id === "string" &&
          typeof item.title === "string" &&
          typeof item.category === "string" &&
          typeof item.image === "string" &&
          typeof item.price === "number" &&
          typeof item.quantity === "number"
      );

      setItems(validatedItems);
    } catch (error) {
      console.error("Error loading cart:", error);
      setItems([]);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Persist cart
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!isInitialized) return;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [items, isInitialized]);

  /*
  |--------------------------------------------------------------------------
  | Cart actions
  |--------------------------------------------------------------------------
  */

  const addToCart = useCallback(
    (product: Plan, quantity = 1) => {
      if (quantity <= 0) return;

      setItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item
          );
        }

        return [
          ...prevItems,
          {
            ...product,
            quantity,
          },
        ];
      });

      setIsCartOpen(true);
    },
    []
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity,
              }
            : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | UI actions
  |--------------------------------------------------------------------------
  */

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Helpers
  |--------------------------------------------------------------------------
  */

  const getItemQuantity = useCallback(
    (productId: string) => {
      const item = items.find(
        (item) => item.id === productId
      );

      return item?.quantity ?? 0;
    },
    [items]
  );

  const isInCart = useCallback(
    (productId: string) => {
      return items.some(
        (item) => item.id === productId
      );
    },
    [items]
  );

  /*
  |--------------------------------------------------------------------------
  | Derived values
  |--------------------------------------------------------------------------
  */

  const totalItems = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [items]);

  /*
  |--------------------------------------------------------------------------
  | Context value
  |--------------------------------------------------------------------------
  */

  const value = useMemo<CartContextType>(
    () => ({
      items,
      isCartOpen,
      totalItems,
      totalPrice,

      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,

      openCart,
      closeCart,
      toggleCart,
      setIsCartOpen,

      getItemQuantity,
      isInCart,
    }),
    [
      items,
      isCartOpen,
      totalItems,
      totalPrice,

      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,

      openCart,
      closeCart,
      toggleCart,

      getItemQuantity,
      isInCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }

  return context;
}