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
  <div className="hidden md:flex gap-6 text-white px-20 items-center">
    <Link to="/about" className="hover:text-black">About</Link>
    <Link to="/product" className="hover:text-black">Products</Link>
    <Link to="/pricing" className="hover:text-black">Pricing</Link>
    <Link to="/support" className="hover:text-black">Support</Link>
    {/* <Link to="/signup" className="hover:text-black">Signup</Link> */}
    {/* <Link to="/dashboard" className="hover:text-black">Dashboard</Link> */}
    <Link to="/login" className="hover:text-black"><Button variant="ghost" className=" bg-white rounded-md w-28 text-black">Login</Button></Link>
  </div>

  {/* Right Section: Mobile Menu */ }
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild>
      <Button variant="ghost" className="md:hidden rounded-md w-12 text-zinc-300">
        <Menu size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-1/2 bg-zinc-900 shadow-md text-zinc-400">
      <div className="flex flex-col gap-4 text-lg items-center  ">
        <a href="#" onClick={() => setOpen(false)} className="hover:text-zinc-200">About</a>
        <a href="#" onClick={() => setOpen(false)} className="hover:text-zinc-200">Products</a>
        <a href="#" onClick={() => setOpen(false)} className="hover:text-zinc-200">Pricing</a>
        <a href="#" onClick={() => setOpen(false)} className="hover:text-zinc-200">Support</a>
      </div>
    </SheetContent>
  </Sheet>
    </nav >

  )
}

export default Navbar