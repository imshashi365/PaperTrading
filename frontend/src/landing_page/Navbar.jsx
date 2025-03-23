import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (

    <nav className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      {/* Left Section: Logo */}
      <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
        <Link to="/">
          <span>
            <img src="/images/MindTradeLogo.png" alt="Logo" className="w-1/2 h-full" />
          </span>
          </Link>
      </div>

      {/* Middle Section: Links (Hidden on Small Screens) */ }
  <div className="hidden md:flex gap-6 text-white px-20">
    <Link to="/signup" className="hover:text-black">Signup</Link>
    <Link to="/about" className="hover:text-black">About</Link>
    <Link to="/product" className="hover:text-black">Products</Link>
    <Link to="/pricing" className="hover:text-black">Pricing</Link>
    <Link to="/support" className="hover:text-black">Support</Link>
  </div>

  {/* Right Section: Mobile Menu */ }
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild>
      <Button variant="ghost" className="md:hidden">
        <Menu size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <div className="flex flex-col gap-4 text-lg">
        <a href="#" onClick={() => setOpen(false)}>Signup</a>
        <a href="#" onClick={() => setOpen(false)}>About</a>
        <a href="#" onClick={() => setOpen(false)}>Products</a>
        <a href="#" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#" onClick={() => setOpen(false)}>Support</a>
      </div>
    </SheetContent>
  </Sheet>
    </nav >

  )
}

export default Navbar