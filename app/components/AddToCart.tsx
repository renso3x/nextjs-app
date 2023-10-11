"use client";
import React from "react";
import { useRouter } from 'next/navigation'

const AddToCart = () => {
  const router = useRouter()

  return (
    <button className="btn btn-secondary" onClick={() => router.push('/users')}>
      Add To Cart
    </button>
  );
};

export default AddToCart;
