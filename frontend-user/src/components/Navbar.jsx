import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  Github,
  Heart,
  Linkedin,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  Sun,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="center flex-col border-b-1 border-zinc-300 px-5 pb-5 md:pb-0 ">
      <div className="hidden md:flex w-full justify-between mt-2 border-b-1 border-zinc-300 text-[11px] text-zinc-500">
        {/* left top */}
        <div className="center gap-3">
          <span className="center">
            <MapPin size={11} /> Deliver to : Location 829111
            <button className="cursor-pointer">
              <ChevronDown size={12} />
            </button>
          </span>

          <span>Customer Service: +1 (555) 123-4567</span>
        </div>

        {/* right top */}
        <div className="flex center gap-3">
          <Link to="/track-order">Track Order</Link>
          <Link to="/help">Help</Link>

          <a
            className="text-purple-600"
            title="GitHub"
            href="https://github.com/prakash-ydv"
            target="_blank"
          >
            <Github size={12} />
          </a>
          <a
            className="text-blue-600"
            title="LinkedIn"
            href="https://www.linkedin.com/in/prakash-kumar-jh09/"
            target="_blank"
          >
            <Linkedin size={12} />
          </a>
        </div>
      </div>
      <div className="flex h-18 items-center justify-between w-full  bg-white/18 backdrop:blur-sm ">
        <div className="flex gap-6 center w-full ">
          <button className="md:hidden" onClick={() => toggleMenu()}>
            <Menu size={18} />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            QuickKart
          </h1>

          <div className="flex w-full text-sm">
            <form className="hidden mx-auto w-[55vw] items-center justify-between h-10 gap-2 overflow-hidden rounded-lg border-1 border-zinc-300 md:flex">
              <button className="w-58 h-full bg-gray-300/30 center gap-1">
                All Categories <ChevronDown size={18} />
              </button>
              <Search className="text-zinc-500" size={25} />
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Search products, brands and categories..."
              />
              <input
                type="submit"
                className="bg-purple-300 h-full w-30 font-semibold"
                value={"Search"}
              />
            </form>
          </div>
        </div>

        {/* icons */}
        <div className="pl-4 flex gap-6 md:gap-4">
          <button className="btn-icon">
            <Sun size={18} />
          </button>
          <button className="hidden btn-icon md:block">
            <Bell size={18} />
          </button>
          <button className="hidden btn-icon md:block">
            <Heart size={18} />
          </button>
          <button className="hidden btn-icon md:block">
            <User size={18} />
          </button>
          <button className="btn-icon">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      <form className="flex w-full items-center h-10 gap-2 p-1 rounded-lg border-1 border-zinc-300 md:hidden">
        <Search className="h-5" />
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Search products..."
        />
        <input type="submit" value={" "} />
      </form>

      <AnimatePresence className="md:hidden">
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.2 }}
            className="w-full flex flex-col p-6 gap-4 bg-white shadow-md rounded-lg md:hidden"
          >
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/deals">Deals</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/account">Account</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/help">Help</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
