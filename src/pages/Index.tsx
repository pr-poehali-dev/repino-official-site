import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Услуги для граждан",
      description: "Получение справок, регистрация, социальные услуги",
      icon: "Users",
    },
    {
      title: "ЖКХ и благоустройство",
      description: "Вопросы коммунальных услуг и содержания территории",
      icon: "Home",
    },
    {
      title: "Общественный транспорт",
      description: "Маршруты, расписание, транспортная доступность",
      icon: "Bus",
    },
  ];

  const news = [
    {
      date: "25 мая 2025",
      title: "Благоустройство детской площадки на ул. Приморской",
      category: "Благоустройство",
    },
    {
      date: "23 мая 2025",
      title: "График работы администрации в праздничные дни",
      category: "Объявления",
    },
    {
      date: "20 мая 2025",
      title: "Субботник в парке им. И.Е. Репина",
      category: "Мероприятия",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 border-b border-purple-200 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-white">МО Репино</h1>
                <p className="text-xs text-purple-100">Санкт-Петербург</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-white hover:text-yellow-300 font-medium transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-purple-100 hover:text-yellow-300 font-medium transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-purple-100 hover:text-yellow-300 font-medium transition-colors"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-purple-100 hover:text-yellow-300 font-medium transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Добро пожаловать в поселок Репино
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
              Внутригородское муниципальное образование города федерального
              значения Санкт-Петербурга. Живописный уголок на берегу Финского
              залива с богатой историей и развитой инфраструктурой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg"
              >
                <Icon name="FileText" size={20} />
                Услуги для граждан
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Icon name="MapPin" size={20} />
                Контакты и адреса
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Основные услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем полный спектр муниципальных услуг для жителей
              поселка Репино
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Новости и объявления
              </h2>
              <p className="text-gray-600">
                Актуальная информация о жизни поселка
              </p>
            </div>
            <Button variant="outline">
              Все новости
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-blue-600"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <p className="font-medium">Адрес администрации</p>
                    <p className="text-gray-600">
                      197738, Санкт-Петербург, пос. Репино, Приморское шоссе, д.
                      422
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 (812) 432-84-49</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">admin@mo-repino.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-gray-600">
                      Пн-Чт: 9:00-18:00, Пт: 9:00-17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <Icon name="FileText" size={16} />
                  <span>Электронные услуги</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <Icon name="Calendar" size={16} />
                  <span>Мероприятия</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <Icon name="Users" size={16} />
                  <span>Общественные организации</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <Icon name="Briefcase" size={16} />
                  <span>Предпринимательство</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-medium">МО Репино</p>
                <p className="text-sm text-gray-400">Санкт-Петербург</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2025 Внутригородское муниципальное образование поселок Репино
              </p>
              <p className="text-sm text-gray-400">Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
