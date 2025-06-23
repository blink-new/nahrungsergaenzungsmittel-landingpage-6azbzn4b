import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Zap, Shield, Heart, Star, Users, Truck, Award } from 'lucide-react'

function App() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const benefits = [
    'Hochdosierte Vitamine & Mineralien',
    'Optimierte Aminosäuren-Formel',
    'Fruchtiger Orange-Geschmack',
    'Laborgeprüfte Qualität',
    'Made in Germany',
    'Für alle Altersgruppen geeignet'
  ]

  const features = [
    {
      icon: Zap,
      title: 'Sofortige Energie',
      description: 'Schnelle Aufnahme für maximale Wirkung'
    },
    {
      icon: Shield,
      title: 'Immun-Boost',
      description: 'Stärkt natürliche Abwehrkräfte'
    },
    {
      icon: Heart,
      title: 'Herzgesundheit',
      description: 'Unterstützt Herz-Kreislauf-System'
    }
  ]

  const testimonials = [
    {
      name: 'Maria K.',
      rating: 5,
      text: 'Seit ich Vita Complete PLUS+ nehme, fühle ich mich energiegeladener und vitaler!'
    },
    {
      name: 'Thomas R.',
      rating: 5,
      text: 'Endlich ein Nahrungsergänzungsmittel, das hält was es verspricht. Top Qualität!'
    },
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Der Geschmack ist fantastisch und die Wirkung spüre ich bereits nach wenigen Tagen.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">VitaLife</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Vorteile</a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">Bewertungen</a>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Jetzt bestellen
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                ✨ Neue Formel verfügbar
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Vita Complete
                <span className="text-green-600"> PLUS+</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Das ultimative Nahrungsergänzungsmittel mit hochdosierten Vitaminen, 
                Mineralien und Aminosäuren für maximale Vitalität und Wohlbefinden.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                Jetzt testen - 30% Rabatt
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6">
                Mehr erfahren
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Truck className="w-4 h-4" />
                <span>Kostenloser Versand</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>30 Tage Geld-zurück</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>Made in Germany</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-3xl p-8 backdrop-blur-sm">
              <img 
                src="/vita-complete-plus.png" 
                alt="Vita Complete PLUS+ Nahrungsergänzungsmittel"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                NEU
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum Vita Complete PLUS+?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine einzigartige Formel, die Ihren Körper mit allem versorgt, was er für optimale Leistung braucht.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Card className="h-full border-green-100 hover:border-green-200 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors ${
                      hoveredFeature === index ? 'bg-green-600' : 'bg-green-100'
                    }`}>
                      <feature.icon className={`w-8 h-8 transition-colors ${
                        hoveredFeature === index ? 'text-white' : 'text-green-600'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gradient-to-br from-green-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Das sagen unsere Kunden
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5</span>
            </div>
            <p className="text-gray-600">Über 10.000 zufriedene Kunden</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-semibold text-gray-800">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Starten Sie noch heute in ein vitaleres Leben
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Nutzen Sie unseren exklusiven Launch-Rabatt und erleben Sie die Kraft von 
              Vita Complete PLUS+ am eigenen Körper.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">€29,90</div>
                <div className="text-green-200 line-through text-lg">€42,90</div>
                <Badge className="bg-yellow-400 text-yellow-900 mt-2">
                  30% LAUNCH-RABATT
                </Badge>
              </div>
              
              <Button size="lg" className="w-full bg-white text-green-600 hover:bg-green-50 text-lg py-6 font-semibold">
                Jetzt bestellen & 30% sparen
              </Button>
              
              <p className="text-green-100 text-sm mt-4">
                ✅ Kostenloser Versand • ✅ 30 Tage Geld-zurück-Garantie
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">VitaLife</span>
              </div>
              <p className="text-gray-400">
                Ihr Partner für hochwertige Nahrungsergänzung und optimale Gesundheit.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Inhaltsstoffe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Anwendung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Qualität</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Versand</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rückgabe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VitaLife. Alle Rechte vorbehalten. Made with ❤️ in Germany</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App