import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? title + "- Amazon" : "Amazon"}</title>
        <meta name="description" content="ECommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex  min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex items-center px-4 h-12 justify-between shadow-md">
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">amazon</a>
            </Link>
            <div>
              <Link legacyBehavior href="/card" className="p-2">
              <a className="p-2">
                  Cart
                  {cartItemsCount  > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/Login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <b>Copyright @ {new Date().getFullYear()}</b>
        </footer>
      </div>
    </>
  );
}
