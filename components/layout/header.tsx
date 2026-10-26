"use client";
import {useState , useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Download, Menu, X} from "lucide-react";
import Link from "next/link";


const Header = () => {

  const menuItems = [
    {label: "About", href: "#about"},
    {label: "Skills", href: "#skills"},
    {label: "Project", href:"#Projects"},
    {label: "Testimonials", href:"#testimonials"},
    {label: "Contact", href:"#contact"},

  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href= {"/"} className="text-xl font-bold text-primary">
            Shshank Singla
          </Link>
          
          {/* Desktop Menu*/}
          <nav className="hidden md:flex items-center gap-8">
            {
            menuItems.map((item)=>(
              <a 
              href = {item.href} 
              key = {item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))
          }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header