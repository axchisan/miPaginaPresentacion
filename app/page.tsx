"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Smartphone,
  Globe,
  Zap,
  Gamepad2,
  Music,
  Phone,
  MessageCircle,
  Instagram,
  ChevronDown,
  Sparkles,
  Rocket,
  Brain,
  Heart,
} from "lucide-react"

export default function Portfolio() {
  const [currentService, setCurrentService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Páginas Web",
      description: "Desarrollo de sitios web modernos y responsivos",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Multiplataforma",
      description: "Aplicaciones móviles para iOS y Android",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización",
      description: "Servicios de automatización para negocios",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Software Personalizado",
      description: "Soluciones de software a medida",
    },
  ]

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Flutter",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Git",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Logo/Brand */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-slate-400 via-gray-300 to-slate-500 bg-clip-text text-transparent animate-pulse">
              axchi
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Duvan Yair Arciniegas</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">Desarrollador de Software</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-slate-500 text-slate-400 hover:bg-purple-500/10">
                <Sparkles className="w-4 h-4 mr-1" />
                Estudiante SENA
              </Badge>
              <Badge variant="outline" className="border-gray-500 text-gray-400 hover:bg-cyan-500/10">
                <Brain className="w-4 h-4 mr-1" />
                Innovador
              </Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-500 hover:bg-pink-500/10">
                <Heart className="w-4 h-4 mr-1" />
                Apasionado
              </Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-800 hover:to-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contáctame
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 hover:border-purple-500 text-white hover:bg-purple-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Ver Servicios
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-400 to-gray-300 bg-clip-text text-transparent">
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un apasionado desarrollador de software, actualmente estudiante en el SENA. Me encanta la
                programación y creo soluciones tecnológicas innovadoras para diferentes negocios.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                En mis tiempos libres disfruto creando juegos y soy un gran apasionado por la música. Trabajo bajo el
                apodo <span className="text-slate-400 font-semibold">axchi</span>, mi marca personal que representa
                innovación y creatividad en el desarrollo de software.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-800 hover:bg-slate-600/20 border border-gray-700 hover:border-slate-500 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="/images/profile.jpg"
                    alt="Duvan Yair Arciniegas - axchi"
                    className="w-64 h-64 object-cover rounded-2xl mx-auto border border-gray-700 shadow-2xl"
                  />
                </div>
              </div>

              <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700 backdrop-blur-sm mt-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Gamepad2 className="w-5 h-5 text-slate-400" />
                      <span className="text-sm">Desarrollo de Juegos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">Apasionado por la Música</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-slate-500" />
                      <span className="text-sm">Programación Creativa</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-400 to-gray-300 bg-clip-text text-transparent">
            Mis Servicios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-purple-500/50 cursor-pointer ${
                  currentService === index ? "ring-2 ring-purple-500/50 bg-purple-500/20 border-purple-400" : ""
                }`}
                onClick={() => setCurrentService(index)}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentService === index
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border-purple-500/50 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{services[currentService].title}</h3>
                <p className="text-gray-100 text-lg">{services[currentService].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-gray-400 to-slate-300 bg-clip-text text-transparent">
            Conectemos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-400 mb-4">Conversemos sobre tu proyecto</p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open("https://w.app/3gmlcp", "_blank")}
                >
                  Chatear
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-400 mb-4">3183038190</p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open("tel:3183038190", "_blank")}
                >
                  Llamar
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="bg-gradient-to-br from-pink-900/20 to-purple-800/20 border-pink-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-gray-400 mb-4">@axchisan</p>
                <Button
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                  onClick={() => window.open("https://instagram.com/axchisan", "_blank")}
                >
                  Seguir
                </Button>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card className="bg-gradient-to-br from-gray-900/40 to-black/40 border-gray-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">GitHub</h3>
                <p className="text-gray-300 mb-4">@axchisan</p>
                <Button
                  className="bg-gray-700 hover:bg-gray-800 text-white border border-gray-600"
                  onClick={() => window.open("https://github.com/axchisan", "_blank")}
                >
                  Ver Código
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">¿Listo para crear algo increíble?</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Transformemos tus ideas en realidad digital. Contacta conmigo y hagamos que tu proyecto cobre vida.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-800 hover:to-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://w.app/3gmlcp", "_blank")}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Empezar Proyecto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            axchi
          </div>
          <p className="text-gray-400">
            © 2024 Duvan Yair Arciniegas Gerena. Desarrollando el futuro, una línea de código a la vez.
          </p>
        </div>
      </footer>
    </div>
  )
}
