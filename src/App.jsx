import { Shield, Users, Target, Trophy, Zap, Globe, ChevronRight, Menu, X, Star, TrendingUp, Video, Calendar, Youtube, Twitter, Facebook } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-red-900/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-red-600" />
            <span className="text-3xl font-black text-white tracking-tight">DOTA 2</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('heroes')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              Герои
            </button>
            <button onClick={() => scrollToSection('gameplay')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              Геймплей
            </button>
            <button onClick={() => scrollToSection('esports')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              Киберспорт
            </button>
            <button onClick={() => scrollToSection('community')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              Сообщество
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50">
              Играть бесплатно
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-900/30">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('heroes')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-left">
                Герои
              </button>
              <button onClick={() => scrollToSection('gameplay')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-left">
                Геймплей
              </button>
              <button onClick={() => scrollToSection('esports')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-left">
                Киберспорт
              </button>
              <button onClick={() => scrollToSection('community')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-left">
                Сообщество
              </button>
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold">
                Играть бесплатно
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="Dota 2 Battle" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        <div className="relative z-10 container mx-auto text-center py-20">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            АРЕНА <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">ЛЕГЕНД</span>
          </h1>
          <p className="text-2xl md:text-4xl text-red-500 mb-8 font-bold tracking-tight">
            Сражайся за славу в самой популярной MOBA
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Присоединяйся к миллионам игроков по всему миру. Выбирай из 120+ уникальных героев, развивай стратегию и докажи своё мастерство на полях сражений.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-red-600/50">
              Начать играть
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-sm border-2 border-white/30 hover:border-white/50">
              Смотреть трейлер
            </button>
          </div>
        </div>
      </section>

      {/* HEROES SECTION */}
      <section id="heroes" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Выбери своего <span className="text-red-500">героя</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Более 120 уникальных героев с различными способностями и стилями игры
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Hero Card 1 - Carry */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-red-900/30 hover:border-red-600/70 transition-all transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                  <Target className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Carry</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Герои, которые становятся невероятно сильными к концу игры. Фармят ресурсы и доминируют в поздней игре.
                </p>
                <div className="flex gap-2">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">Урон</span>
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">Поздняя игра</span>
                </div>
              </div>
            </div>

            {/* Hero Card 2 - Support */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-red-900/30 hover:border-red-600/70 transition-all transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                  <Shield className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Support</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Помогают команде контролем, лечением и защитой. Обеспечивают победу своим союзникам даже без большого количества золота.
                </p>
                <div className="flex gap-2">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">Контроль</span>
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">Утилити</span>
                </div>
              </div>
            </div>

            {/* Hero Card 3 - Nuker */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-red-900/30 hover:border-red-600/70 transition-all transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                  <Zap className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Nuker</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Специалисты по взрывному урону способностями. Уничтожают врагов мощными магическими заклинаниями.
                </p>
                <div className="flex gap-2">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">Магия</span>
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">Взрыв</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMEPLAY FEATURES */}
      <section id="gameplay" className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Почему <span className="text-red-500">Dota 2?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Глубокий геймплей, бесконечные стратегии и честная конкуренция
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all">
              <Star className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">100% Бесплатно</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Все герои доступны сразу. Никаких преимуществ за деньги.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Командная игра</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                5 на 5 - настоящая командная работа и координация.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all">
              <TrendingUp className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Рейтинговая система</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Соревнуйся с игроками своего уровня и поднимайся выше.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all">
              <Globe className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Мировое сообщество</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Миллионы игроков онлайн в любое время суток.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESPORTS */}
      <section id="esports" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Киберспорт <span className="text-red-500">мирового уровня</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                The International - крупнейший турнир в истории киберспорта с призовым фондом более $40 миллионов. Наблюдай за лучшими командами мира или стань профессионалом сам.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gradient-to-r from-red-900/20 to-transparent p-4 rounded-lg border-l-4 border-red-600">
                  <Trophy className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">The International</h4>
                    <p className="text-gray-400 text-sm">Ежегодный чемпионат мира</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-red-900/20 to-transparent p-4 rounded-lg border-l-4 border-red-600">
                  <Calendar className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">DPC Tours</h4>
                    <p className="text-gray-400 text-sm">Профессиональные туры круглый год</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-red-900/20 to-transparent p-4 rounded-lg border-l-4 border-red-600">
                  <Video className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Трансляции</h4>
                    <p className="text-gray-400 text-sm">Смотри матчи прямо в клиенте игры</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-red-900/20 to-black rounded-2xl border-2 border-red-900/30 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80" 
                  alt="Esports Arena" 
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-24 px-6 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Присоединяйся к <span className="text-red-500">сообществу</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Общайся с игроками, смотри гайды, участвуй в турнирах и следи за новостями
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black px-8 py-4 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all flex items-center gap-3 group">
              <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold">YouTube</span>
            </a>
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black px-8 py-4 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all flex items-center gap-3 group">
              <Twitter className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold">Twitter</span>
            </a>
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black px-8 py-4 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all flex items-center gap-3 group">
              <Facebook className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-red-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Готов к <span className="text-red-500">битве?</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Скачай Dota 2 бесплатно в Steam и начни своё путешествие к вершине рейтинга
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-16 py-6 rounded-xl text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 flex items-center gap-4 mx-auto">
            Играть бесплатно
            <ChevronRight className="w-7 h-7" />
          </button>
          <p className="text-gray-500 mt-6 text-sm">Доступно на Windows, macOS и Linux</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-red-900/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-black text-white">DOTA 2</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-red-500 transition-colors">О игре</a>
              <a href="#" className="hover:text-red-500 transition-colors">Новости</a>
              <a href="#" className="hover:text-red-500 transition-colors">Обновления</a>
              <a href="#" className="hover:text-red-500 transition-colors">Форум</a>
              <a href="#" className="hover:text-red-500 transition-colors">Поддержка</a>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Valve Corporation. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App