"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  GraduationCap,
  Calendar,
  User,
  FolderOpen,
  Code,
  Database,
  BarChart3,
  Coffee,
} from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">Vinícius Santos</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("sobre")}>
                <User className="w-4 h-4 mr-2" />
                Sobre
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("ferramentas")}>
                <Code className="w-4 h-4 mr-2" />
                Ferramentas
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("projetos")}>
                <FolderOpen className="w-4 h-4 mr-2" />
                Projetos
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection("contato")}>
                <Mail className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Vinícius Santos
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("contato")}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Sobre Mim
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-green-200 dark:border-green-800 bg-white/50 dark:bg-gray-900/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">Quem sou eu</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  Desenvolvedor apaixonado por tecnologia com foco em desenvolvimento full-stack. Atualmente cursando
                  Ciência da Computação e sempre em busca de novos desafios que me permitam crescer profissionalmente.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-400">Curso</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Ciência da Computação</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">4º Período</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-teal-700 dark:text-teal-400">Idade</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">19 anos</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700 dark:text-blue-400">Localização</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rio de Janeiro, RJ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section
        id="ferramentas"
        className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Ferramentas & Tecnologias
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tecnologias que domino e utilizo em meus projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">JavaScript</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Linguagem principal para desenvolvimento web</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">HTML & CSS</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Estruturação e estilização de interfaces</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">SQL</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gerenciamento e consulta de bancos de dados</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-400">Power BI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Visualização e análise de dados</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">Python</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Desenvolvimento e análise de dados</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Java</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Programação Orientada a Objetos</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Spring Boot</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projetos"
        className="py-20 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Alguns dos meus trabalhos mais recentes e relevantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Computer Vision Project */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 bg-white/70 dark:bg-gray-900/70">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-smDavIdrnWnI4SsY7sZz08mfXJuMnp.png"
                    alt="Projeto de Controle de Gestos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center justify-between text-orange-700 dark:text-orange-400">
                  Controle de Gestos
                  <ExternalLink className="w-5 h-5 text-orange-500 group-hover:text-orange-600 transition-colors" />
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Sistema de reconhecimento de gestos usando visão computacional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Projeto desenvolvido em Python utilizando técnicas de visão computacional para detectar e interpretar
                  gestos das mãos em tempo real. Implementa algoritmos de processamento de imagem para reconhecimento de
                  padrões.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-red-300 text-red-700">
                    OpenCV
                  </Badge>
                  <Badge variant="outline" className="border-pink-300 text-pink-700">
                    Computer Vision
                  </Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    Processamento de Imagem
                  </Badge>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  onClick={() => window.open("https://github.com/Vn212/controle-de-gestos", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver no GitHub
                </Button>
              </CardContent>
            </Card>

            {/* Power BI Dashboard */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white/70 dark:bg-gray-900/70">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ufTsglvtxRYRdY9cif0NUYxwYJBeoQ.png"
                    alt="Dashboard Power BI - Evolução da Inflação"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-400">Dashboard IPCA Brasil</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Análise da evolução da inflação no Brasil e capitais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dashboard interativo desenvolvido no Power BI para análise da evolução do IPCA no Brasil e suas
                  capitais durante 2015. Inclui visualizações geográficas e análises temporais detalhadas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    Power BI
                  </Badge>
                  <Badge variant="outline" className="border-green-300 text-green-700">
                    Análise de Dados
                  </Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    Visualização
                  </Badge>
                  <Badge variant="outline" className="border-teal-300 text-teal-700">
                    IPCA
                  </Badge>
                </div>
                <Button
                  variant="secondary"
                  className="w-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 text-blue-700 dark:text-blue-400"
                  disabled
                >
                  Dashboard Interativo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-teal-950/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Vamos conversar sobre oportunidades e projetos interessantes
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 bg-white/70 dark:bg-gray-900/70 cursor-pointer"
              onClick={() => window.open("https://github.com/Vn212", "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Vn212</p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white/70 dark:bg-gray-900/70 cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/vinicius-de-moraes-dos-santos-a839a233a/", "_blank")
              }
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Vinícius Santos</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">viniciusmsantosrj@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 bg-white/70 dark:bg-gray-900/70">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-teal-700 dark:text-teal-400">WhatsApp</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">(21) 98560-7179</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Vinícius Santos. Desenvolvido com Next.js e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
