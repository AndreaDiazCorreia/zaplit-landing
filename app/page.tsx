"use client";
import Image from 'next/image';
import { Github, Twitter, Smartphone, Zap, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Definimos la URL del formulario Tally como una constante para mejor mantenibilidad
  const TALLY_FORM_URL = 'https://tally.so/r/mRVb6v';
  
  // Esta función maneja la redirección al formulario de Tally
  // Usamos window.open con '_blank' para abrir en una nueva pestaña, 
  // proporcionando una mejor experiencia de usuario al mantener la landing page accesible
  const handleTallyRedirect = () => {
    window.open(TALLY_FORM_URL, '_blank');
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 relative">
        {/* Header */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <Image 
              src="/zaplit-logo.png" 
              alt="Zaplit" 
              height={100} 
              width={100} 
              className="object-contain"
            />
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/lacrypta/zaplit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Split Expenses with Lightning
            </h1>
            <p className="text-xl text-gray-400 mb-8">
            Split bills with friends and settle instantly through Bitcoin Lightning. Connect your Nostr wallet and experience seamless group payments.
            </p>

            {/* Botón para el formulario de Tally con diseño mejorado */}
            <Button 
              onClick={handleTallyRedirect}
              className="w-full bg-blue-500 hover:bg-blue-600 mb-8 py-6 text-lg font-medium transition-all duration-200 ease-in-out hover:shadow-lg"
            >
              Join our waitlist
            </Button>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Instant payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Simple splitting</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Nostr Wallet Connect</span>
              </div>
            </div>
          </div>

          {/* Larger Phone Mockup */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-full max-w-lg">
              <Image
                src="/cel-mock.png"
                alt="Zaplit App Screenshot"
                width={400}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );}