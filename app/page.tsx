"use client"

import { useState } from "react"
import { Instagram, Phone, MapPin, Clock, Home, ChevronDown, Calendar, Users, Send } from 'lucide-react'

const translations = {
  es: {
    inicio: "Inicio",
    quienesSomos: "¿Quiénes somos?",
    carta: "Carta",
    ubicacion: "Ubicación",
    reserva: "Reserva",
    reservarOnline: "Reservar Online",
    autenticaPizzeria: "Auténtica Pizzería Napolitana en Barcelona",
    verCarta: "Ver Nuestra Carta",
    reservarMesa: "Reservar Mesa",
    tradicionNapolitana: "Tradición Napolitana",
    nuestraCarta: "Nuestra Carta",
    saboresNapoles: "Auténticos sabores de Nápoles",
    platos: "platos",
    masianelloTitle: "Masaniello",
    historiaHeroe: "La Historia de un Héroe",
    aboutText1: "Tommaso Aniello, conocido como Masaniello, fue un pescador napolitano que en 1647 lideró una histórica revuelta popular contra el dominio español en Nápoles. Su valentía y liderazgo lo convirtieron en un símbolo de libertad y resistencia.",
    aboutText2: "En nuestro restaurante honramos su espíritu rebelde y su amor por Nápoles, ofreciendo la auténtica cocina napolitana con la pasión y el carácter que él representaba.",
    heroeNapoles: "Héroe de Nápoles",
    direccion: "Dirección",
    horarios: "Horarios",
    contacto: "Contacto",
    lunesViernes: "Lunes - Domingo",
    nombre: "Nombre",
    telefono: "Teléfono",
    email: "Correo Electrónico",
    fecha: "Fecha",
    hora: "Hora",
    personas: "Personas",
    comentarios: "Comentarios",
    enviarReserva: "Enviar Reserva",
    enviando: "Enviando...",
    reservaEnviada: "¡Reserva enviada! Nos pondremos en contacto contigo pronto.",
    errorReserva: "Hubo un error al enviar la reserva. Por favor, inténtalo de nuevo más tarde.",
    camposRequeridos: "Por favor, complete todos los campos obligatorios.",
    autenticaCocina: "Auténtica cocina napolitana en Barcelona, honrando la tradición y el espíritu rebelde de Masaniello.",
    derechosReservados: "© 2024 Masaniello Barcelona. Todos los derechos reservados."
  },
  en: {
    inicio: "Home",
    quienesSomos: "About Us",
    carta: "Menu",
    ubicacion: "Location",
    reserva: "Reserve",
    reservarOnline: "Book Online",
    autenticaPizzeria: "Authentic Neapolitan Pizzeria in Barcelona",
    verCarta: "View Our Menu",
    reservarMesa: "Reserve Table",
    tradicionNapolitana: "Neapolitan Tradition",
    nuestraCarta: "Our Menu",
    saboresNapoles: "Authentic flavors from Naples",
    platos: "dishes",
    masianelloTitle: "Masaniello",
    historiaHeroe: "The Story of a Hero",
    aboutText1: "Tommaso Aniello, known as Masaniello, was a Neapolitan fisherman who in 1647 led a historic popular revolt against Spanish rule in Naples. His courage and leadership made him a symbol of freedom and resistance.",
    aboutText2: "In our restaurant we honor his rebellious spirit and his love for Naples, offering authentic Neapolitan cuisine with the passion and character he represented.",
    heroeNapoles: "Hero of Naples",
    direccion: "Address",
    horarios: "Hours",
    contacto: "Contact",
    lunesViernes: "Monday - Sunday",
    nombre: "Name",
    telefono: "Phone",
    email: "Email",
    fecha: "Date",
    hora: "Time",
    personas: "People",
    comentarios: "Comments",
    enviarReserva: "Send Reservation",
    enviando: "Sending...",
    reservaEnviada: "Reservation sent! We will contact you soon.",
    errorReserva: "There was an error sending the reservation. Please try again later.",
    camposRequeridos: "Please fill in all required fields.",
    autenticaCocina: "Authentic Neapolitan cuisine in Barcelona, honoring the tradition and rebellious spirit of Masaniello.",
    derechosReservados: "© 2024 Masaniello Barcelona. All rights reserved."
  }
}

const menuSections = {
  es: {
    PIZZE: [
      { name: "FOCACCIA", price: "5€", description: "" },
      { name: "MARINARA", price: "7€", description: "Tomate, ajo, orégano y albahaca" },
      { name: "MARGHERITA", price: "7€", description: "Tomate, mozzarella y albahaca" },
      { name: "FILETTO", price: "9€", description: "Tomatitos, mozzarella y albahaca" },
      { name: "BUFALA", price: "10€", description: "Tomate, mozzarella de búfala y albahaca" },
      { name: "DIAVOLA", price: "10€", description: "Tomate, mozzarella, salami picante" },
      { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomate, mozzarella, jamón cocido y champiñones" },
      { name: "SICILIANA", price: "10€", description: "Tomate, mozzarella, anchoas y berenjena" },
      { name: "NAPOLI", price: "10€", description: "Tomate, mozzarella, anchoas, alcaparras y aceitunas negras" },
      { name: "ORTOLANA", price: "10€", description: "Tomate, mozzarella, variedad de verduras" },
      { name: "CAPRICCIOSA", price: "10€", description: "Tomate, mozzarella, jamón cocido, alcachofa, champiñones y olivas" },
      { name: "CALZONE", price: "12.50€", description: "Tomate, mozzarella, ricotta, jamón cocido" },
      { name: "TROPEA", price: "12.50€", description: "Tomate, mozzarella, atún, cebolla roja de Tropea y olivas" },
      { name: "FLOTADOR", price: "12.50€", description: "Borde relleno de ricotta, tomate y mozzarella de búfala" },
      { name: "CATALANA", price: "13€", description: "Tomate, mozzarella, jamón cocido, huevo y champiñones" },
      { name: "CROCCHÉ", price: "12.50€", description: "Jamón cocido, provola y croquetas de patata" },
      { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Butifarra, grelos y provola" },
      { name: "CONTADINA", price: "12.50€", description: "Tomate, butifarra, champiñones, cebolla y mozzarella" },
      { name: "4 FORMAGGI", price: "12.50€", description: "Tomate, mozzarella, gorgonzola, provola y parmesano" },
      { name: "SOFIA", price: "10€", description: "Frankfurt, patatas fritas y mozzarella" },
      { name: "MARIA", price: "10€", description: "Pollo, patatas fritas y mozzarella" },
      { name: "EMIGRANTE", price: "12€", description: "Tomate, mozzarella, jamón de parma, rúcula y láminas de parmesano" },
      { name: "PARMIGIANA", price: "11€", description: "Tomate, pastel de berenjena, provola y albahaca" },
      { name: "MORTADELLA", price: "12€", description: "Tomate, mozzarella de búfala, mortadela, burrata y pistacho" },
      { name: "VESUVIO", price: "13€", description: "Pizza en forma de volcán con tomate, ricotta, salami y mozzarella" },
      { name: "ARICCIA", price: "12€", description: "Porchetta (cerdo asado), provola y berenjena" },
      { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, jamón cocido, mozzarella y tomate" },
      { name: "PIZZA MASSANIELLO", price: "12€", description: "Tomatitos, burrata y granela de pistacho" },
      { name: "MIMOSA", price: "12€", description: "Nata, jamón cocido, maíz y mozzarella" },
    ],
    ANTIPASTI: [
      { name: "Insalata Burrata", price: "12€", description: "Burrata, rúcula, tomatito bresaola y láminas de grana" },
      { name: "Insalata Massaniello", price: "11€", description: "Ensalata mezclum, alcachofa, atún, olivas verdes, mozzarella y grana" },
      { name: "Bruschetta", price: "6€", description: "Pan con tomate, ajo y aceite del chef" },
      { name: "Parmigiana", price: "10€", description: "Berenjena, salsa de tomate, mozzarella y orégano" },
      { name: "Polpette al Sugo", price: "12€", description: "Albóndigas de ternera con ragú de tomate" },
    ],
    "PRIMI PIATTI": [
      { name: "Lasagna di carne", price: "12€", description: "Lasaña casera de carne" },
      { name: "Spaghetti carbonara", price: "11€", description: "Espaguetis con guanciale, huevos y parmesano" },
      { name: "Rigatoni bolognese", price: "11€", description: "Pasta con tomate, carne picada, albahaca y parmesano" },
      { name: "Spaghetti pomodoro fresco", price: "10€", description: "Espaguetis con tomate fresco y albahaca" },
      { name: "Spaghetti alle vongole", price: "16€", description: "Espaguetis con almejas" },
    ]
  },
  en: {
    PIZZE: [
      { name: "FOCACCIA", price: "5€", description: "" },
      { name: "MARINARA", price: "7€", description: "Tomato, garlic, oregano and basil" },
      { name: "MARGHERITA", price: "7€", description: "Tomato, mozzarella and basil" },
      { name: "FILETTO", price: "9€", description: "Cherry tomatoes, mozzarella and basil" },
      { name: "BUFALA", price: "10€", description: "Tomato, buffalo mozzarella and basil" },
      { name: "DIAVOLA", price: "10€", description: "Tomato, mozzarella, spicy salami" },
      { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomato, mozzarella, cooked ham and mushrooms" },
      { name: "SICILIANA", price: "10€", description: "Tomato, mozzarella, anchovies and eggplant" },
      { name: "NAPOLI", price: "10€", description: "Tomato, mozzarella, anchovies, capers and black olives" },
      { name: "ORTOLANA", price: "10€", description: "Tomato, mozzarella, variety of vegetables" },
      { name: "CAPRICCIOSA", price: "10€", description: "Tomato, mozzarella, cooked ham, artichoke, mushrooms and olives" },
      { name: "CALZONE", price: "12.50€", description: "Tomato, mozzarella, ricotta, cooked ham" },
      { name: "TROPEA", price: "12.50€", description: "Tomato, mozzarella, tuna, Tropea red onion and olives" },
      { name: "FLOTADOR", price: "12.50€", description: "Stuffed crust with ricotta, tomato and buffalo mozzarella" },
      { name: "CATALANA", price: "13€", description: "Tomato, mozzarella, cooked ham, egg and mushrooms" },
      { name: "CROCCHÉ", price: "12.50€", description: "Cooked ham, provola and potato croquettes" },
      { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Sausage, broccoli greens and provola" },
      { name: "CONTADINA", price: "12.50€", description: "Tomato, sausage, mushrooms, onion and mozzarella" },
      { name: "4 FORMAGGI", price: "12.50€", description: "Tomato, mozzarella, gorgonzola, provola and parmesan" },
      { name: "SOFIA", price: "10€", description: "Frankfurt, French fries and mozzarella" },
      { name: "MARIA", price: "10€", description: "Chicken, French fries and mozzarella" },
      { name: "EMIGRANTE", price: "12€", description: "Tomato, mozzarella, Parma ham, arugula and parmesan shavings" },
      { name: "PARMIGIANA", price: "11€", description: "Tomato, eggplant cake, provola and basil" },
      { name: "MORTADELLA", price: "12€", description: "Tomato, buffalo mozzarella, mortadella, burrata and pistachio" },
      { name: "VESUVIO", price: "13€", description: "Volcano-shaped pizza with tomato, ricotta, salami and mozzarella" },
      { name: "ARICCIA", price: "12€", description: "Porchetta (roast pork), provola and eggplant" },
      { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, cooked ham, mozzarella and tomato" },
      { name: "PIZZA MASSANIELLO", price: "12€", description: "Cherry tomatoes, burrata and pistachio granules" },
      { name: "MIMOSA", price: "12€", description: "Cream, cooked ham, corn and mozzarella" },
    ],
    ANTIPASTI: [
      { name: "Insalata Burrata", price: "12€", description: "Burrata, arugula, cherry tomato bresaola and grana shavings" },
      { name: "Insalata Massaniello", price: "11€", description: "Mixed salad, artichoke, tuna, green olives, mozzarella and grana" },
      { name: "Bruschetta", price: "6€", description: "Bread with tomato, garlic and chef's oil" },
      { name: "Parmigiana", price: "10€", description: "Eggplant, tomato sauce, mozzarella and oregano" },
      { name: "Polpette al Sugo", price: "12€", description: "Beef meatballs with tomato ragù" },
    ],
    "PRIMI PIATTI": [
      { name: "Lasagna di carne", price: "12€", description: "Homemade meat lasagna" },
      { name: "Spaghetti carbonara", price: "11€", description: "Spaghetti with guanciale, eggs and parmesan" },
      { name: "Rigatoni bolognese", price: "11€", description: "Pasta with tomato, ground meat, basil and parmesan" },
      { name: "Spaghetti pomodoro fresco", price: "10€", description: "Spaghetti with fresh tomato and basil" },
      { name: "Spaghetti alle vongole", price: "16€", description: "Spaghetti with clams" },
    ]
  }
}

const flags = {
  es: "🇪🇸",
  en: "🇬🇧"
}

export default function MasianelloRestaurant() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en'>('es')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    people: "",
    comments: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = translations[currentLanguage]
  const currentMenuSections = menuSections[currentLanguage]

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const changeLanguage = (lang: 'es' | 'en') => {
    setCurrentLanguage(lang)
    setShowLanguageDropdown(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.people) {
      alert(t.camposRequeridos)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          people: "",
          comments: ""
        })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20masianello.jpg-PoeJis7naMvldQQ1afu6O6i6CLFhwq.jpeg"
                alt="Masaniello Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-red-600">Masaniello</h1>
                <p className="text-sm text-gray-600">Pizzería Napolitana</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  <span className="text-lg">{flags[currentLanguage]}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px]">
                    {Object.entries(flags).map(([lang, flag]) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang as 'es' | 'en')}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-red-50 transition-colors"
                      >
                        <span className="text-lg">{flag}</span>
                        <span className="text-sm font-medium">{lang.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.quienesSomos}
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.carta}
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.ubicacion}
              </button>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/masaniellobcn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <button
                  onClick={() => scrollToSection("reservation")}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium text-sm">{t.reservarOnline}</span>
                </button>
                <a
                  href="tel:931244912"
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">{t.reserva}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizza2.jpg-UPcZ9izXd4El36ZF4w5cs5Xuof67Dp.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20masianello.jpg-PoeJis7naMvldQQ1afu6O6i6CLFhwq.jpeg"
                alt="Logo Masaniello"
                className="w-36 h-36 rounded-full border-4 border-red-600 shadow-xl"
              />
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/masianello.jpg-it7wy4BILI2ObOcG8gWNDE7VWHzd74.jpeg"
                  alt="Masaniello Historical Portrait"
                  className="w-36 h-40 rounded-lg border-4 border-red-600 shadow-xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  1647
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-16 text-white font-light italic">
              {t.autenticaPizzeria}
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => scrollToSection("menu")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {t.verCarta}
              </button>
              <button
                onClick={() => scrollToSection("reservation")}
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {t.reservarMesa}
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
                <Home className="w-4 h-4 text-red-600" />
                <span className="font-medium">{t.tradicionNapolitana}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="font-medium">13:00 - 16:00 | 19:00 - 24:00</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="font-medium">C/ de Galileu, 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-4">{t.nuestraCarta}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">{t.saboresNapoles}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(currentMenuSections).map(([sectionName, items]) => {
                const images = {
                  PIZZE: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizze-section-lVmB2GXXs0WZnLCAPjgtQTR15pGBMF.png",
                  ANTIPASTI: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antipasti-section-u57Yi1jo0O8Wogll8MXWyojzkWwQZZ.png",
                  "PRIMI PIATTI": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primi-piatti-section-NWZLbEzsadxHhiJUnepqn7Lii4LbfK.png",
                }

                return (
                  <button
                    key={sectionName}
                    onClick={() => toggleSection(sectionName)}
                    className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={images[sectionName as keyof typeof images] || "/placeholder.svg?height=64&width=64"}
                        alt={sectionName}
                        className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-white"
                      />
                      <h3 className="text-xl font-bold uppercase tracking-wide">{sectionName}</h3>
                      <p className="text-red-100 text-sm mt-1">{items.length} {t.platos}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {activeSection && (
              <div className="border border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h3 className="text-2xl font-bold uppercase tracking-wide">{activeSection}</h3>
                </div>
                <div className="bg-white p-6">
                  <div className="grid gap-3">
                    {currentMenuSections[activeSection as keyof typeof currentMenuSections].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start p-3 border-b border-red-100 last:border-b-0 hover:bg-red-50 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <h4 className="font-bold text-red-600 text-base">{item.name}</h4>
                          {item.description && (
                            <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                          )}
                        </div>
                        <div className="ml-4 text-right">
                          <span className="text-lg font-bold text-red-600">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">{t.masianelloTitle}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-red-600">{t.historiaHeroe}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t.aboutText1}
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t.aboutText2}
                </p>
              </div>

              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-red-600 to-red-800 rounded-lg transform rotate-3 shadow-2xl">
                  <div className="absolute inset-4 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/masianello.jpg-it7wy4BILI2ObOcG8gWNDE7VWHzd74.jpeg"
                        alt="Masaniello"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-xl font-bold text-red-600">{t.masianelloTitle}</h4>
                      <p className="text-gray-600 mt-2">1620 - 1647</p>
                      <p className="text-sm text-gray-500 mt-1">{t.heroeNapoles}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-4">{t.ubicacion}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4">{t.direccion}</h3>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>Carrer de Galileu, 1, Barcelona</span>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4">{t.horarios}</h3>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock className="w-5 h-5 text-red-600" />
                    <div>
                      <p>{t.lunesViernes}</p>
                      <p>13:00 - 16:00 | 19:00 - 24:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4">{t.contacto}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="w-5 h-5 text-red-600" />
                      <span>931 244 912</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Instagram className="w-5 h-5 text-red-600" />
                      <span>@masaniellobcn</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden h-80 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0234567890123!2d2.1234567890123456!3d41.38879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b8b8b8b8%3A0x1234567890123456!2sCarrer%20de%20Galileu%2C%201%2C%2008001%20Barcelona%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Masaniello - Carrer de Galileu, 1, Barcelona"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-4">{t.reservarMesa}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">Completa el formulario y nos pondremos en contacto contigo</p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.nombre} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.telefono} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {t.fecha} *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {t.hora} *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">--:--</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                      <option value="23:30">23:30</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      {t.personas} *
                    </label>
                    <select
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Seleccionar</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.comentarios}
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Alergias, preferencias de mesa, etc."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {t.reservaEnviada}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {t.errorReserva}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? t.enviando : t.enviarReserva}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Masaniello</h3>
              <p className="text-red-100 text-sm">
                {t.autenticaCocina}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">{t.contacto}</h4>
              <div className="space-y-2 text-red-100 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Carrer de Galileu, 1, Barcelona</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>931 244 912</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@masaniellobcn</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">{t.horarios}</h4>
              <div className="space-y-1 text-red-100 text-sm">
                <p>{t.lunesViernes}</p>
                <p>13:00 - 16:00</p>
                <p>19:00 - 24:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-6 pt-6 text-center text-red-100 text-sm">
            <p>{t.derechosReservados}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
