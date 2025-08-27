"use client"
import { Product } from '@/sanity.types';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import useStore from '@/store';

interface Props {
    product: Product;
    className?: String;
}

const AddToCartButton = ({ product, className }: Props) => {

    const { addItem, getItemCount } = useStore();
    const itemCount = getItemCount(product?._id);
    const isOutOfStock = product?.stock === 0;

    const handleAddToCart = () => {
        window.alert("Added to Cart");
    }

    return (
        <div className='w-full'>
            <Button onClick={handleAddToCart} disabled={isOutOfStock} className={cn("w-full bg-shop_dark_green/80 text-shop_light_bg rounded-sm shadow-none border border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect", className)}>
                <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </div>
    )
}

export default AddToCartButton
