import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Bot" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI SOLUTIONS</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Решения</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Тарифы</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Получить консультацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  <Icon name="Zap" size={16} className="mr-2" />
                  ИИ-автоматизация для бизнеса
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Автоматизируем ваш салон красоты с помощью <span className="text-blue-600">ИИ</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Внедряем решения на базе искусственного интеллекта для автоматизации записи клиентов и управления расписанием. От 4999₽ в месяц.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Начать автоматизацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Настройка за 1 день</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-green-500" />
                  <span>Гарантия результата</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/1641878d-ca67-44fb-83c5-f02c4515b3d0.jpg" 
                  alt="AI Technology"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gray-100 text-gray-800">Наши решения</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              ИИ-решения для автоматизации
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Внедряем современные технологии искусственного интеллекта для оптимизации работы вашего бизнеса
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Bot" size={40} className="text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">AI-Администратор салона</CardTitle>
                <CardDescription className="text-lg">
                  Умный помощник для полной автоматизации записи клиентов и управления расписанием
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">24/7 работа</h4>
                        <p className="text-sm text-gray-600">Без выходных и перерывов</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="TrendingUp" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Рост конверсии в запись на 20%+</h4>
                        <p className="text-sm text-gray-600">Автоматическая запись и напоминания</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Database" size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Интеграция с CRM для записи</h4>
                        <p className="text-sm text-gray-600">Простой обмен данными</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="UserMinus" size={20} className="text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Снижение нагрузки</h4>
                        <p className="text-sm text-gray-600">Перенос рутины на AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Результаты внедрения ИИ
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Работа без перерывов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">20%+</div>
                    <div className="text-sm text-gray-600">Рост конверсии в запись</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">CRM интеграция</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                    <div className="text-sm text-gray-600">Пропущенных звонков</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/img/15b57cc7-7c7e-47fa-8bba-1beb62a5c2e4.jpg" 
                  alt="Beauty salon automation"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Тарифы</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Выберите подходящий план
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Гибкие тарифные планы для бизнеса любого размера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Базовый</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  4 999₽ <span className="text-lg font-normal text-gray-500">/мес</span>
                </div>
                <CardDescription>Для небольших салонов красоты</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>ИИ-администратор</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>До 3 мастеров</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Основные функции</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Поддержка в чате</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Начать с базового
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 shadow-xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-6 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Профессиональный</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  9 999₽ <span className="text-lg font-normal text-gray-500">/мес</span>
                </div>
                <CardDescription>Для растущих салонов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>ИИ-администратор + CRM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>До 10 мастеров</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Расширенные функции</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Интеграции с сайтом</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Выбрать профессиональный
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Корпоративный</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  19 999₽ <span className="text-lg font-normal text-gray-500">/мес</span>
                </div>
                <CardDescription>Для сетей салонов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Полный ИИ-комплекс</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Неограниченно мастеров</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Все функции</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Кастомизация под бизнес</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gray-100 text-gray-800">Контакты</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Готовы начать автоматизацию?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите персональную консультацию и узнайте, как ИИ может изменить ваш бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@ai-solutions.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telegram</div>
                    <div className="text-gray-600">@ai_solutions_bot</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Бесплатная консультация</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Проанализируем ваш бизнес и предложим оптимальное решение для автоматизации
                </p>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <Icon name="Clock" size={16} />
                  <span>Ответ в течение 30 минут</span>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Тип бизнеса</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Салон красоты</option>
                    <option>Парикмахерская</option>
                    <option>Медицинская клиника</option>
                    <option>Другое</option>
                  </select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Bot" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">AI SOLUTIONS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Внедряем ИИ-решения для автоматизации бизнеса
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Решения</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI-Администратор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматизация записи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM-интеграция</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@ai-solutions.ru</li>
                <li>@ai_solutions_bot</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 AI Solutions. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;