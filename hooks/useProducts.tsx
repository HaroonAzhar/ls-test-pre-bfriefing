import { Product } from '@/lib/types/product';
import { useState, useCallback, useMemo } from 'react';



export function useProducts() {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = useCallback((item: Product) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return { items, addItem, removeItem, total };
}