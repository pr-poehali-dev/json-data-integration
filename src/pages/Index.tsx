import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card shadow-sm">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold text-primary tracking-tight">РАЗБЛОК</div>
          <Button size="lg" className="bg-primary hover:bg-secondary text-white">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Разблокируйте счёт<br />
          <span className="text-accent">быстрее на 70%</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          AI-помощник готовит документы по 115-ФЗ за 15 минут вместо недели юристов
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-secondary">
            Начать разблокировку
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
            Посмотреть демо
          </Button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему блокируют счета?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">⏱️</div>
                <CardTitle>Долгий процесс</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Подготовка документов занимает 5-14 дней с привлечением юристов и бухгалтеров
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">💸</div>
                <CardTitle>Дорого</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Услуги юристов — от 50 000₽, внутренние ресурсы — простой бизнеса на миллионы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">📋</div>
                <CardTitle>Сложно</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Требуется собрать десятки документов, написать пояснения, разобраться в законах
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto text-center bg-white shadow-xl">
            <CardContent className="pt-12 pb-12">
              <div className="text-6xl font-bold text-accent mb-4">87%</div>
              <p className="text-lg text-muted-foreground">
                компаний теряют время и деньги из-за блокировки счетов по 115-ФЗ
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Как работает РАЗБЛОК</h2>

        <div className="space-y-16 max-w-4xl mx-auto">
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Расскажите о ситуации</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Опишите причину блокировки в чате — AI задаст уточняющие вопросы
              </p>
              <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="text-sm text-muted-foreground">Вы:</strong>
                    <p className="mt-1">Банк заблокировал счёт из-за подозрительной операции</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg border-l-4 border-primary">
                    <strong className="text-sm text-primary">AI:</strong>
                    <p className="mt-1">Какая была сумма операции? Есть ли договор с контрагентом?</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex gap-8 items-start flex-row-reverse">
            <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold">
              2
            </div>
            <div className="flex-1 text-right">
              <h3 className="text-2xl font-bold mb-4">Загрузите документы</h3>
              <p className="text-lg text-muted-foreground">
                Прикрепите выписки, договоры, счета — AI сам найдёт нужные данные
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Получите готовые документы</h3>
              <p className="text-lg text-muted-foreground">
                AI подготовит пояснения для банка, заявление и чек-лист по 115-ФЗ за 15 минут
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Преимущества</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">
                  <Icon name="Zap" size={48} className="text-primary" />
                </div>
                <CardTitle>Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  15 минут вместо 5-14 дней — AI работает быстрее команды юристов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">
                  <Icon name="DollarSign" size={48} className="text-primary" />
                </div>
                <CardTitle>Экономия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  От 2990₽ вместо 50 000₽ на юристов — доступно даже малому бизнесу
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">
                  <Icon name="CheckCircle" size={48} className="text-primary" />
                </div>
                <CardTitle>Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  AI обучен на актуальной базе 115-ФЗ и практике успешных разблокировок
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">
                  <Icon name="Shield" size={48} className="text-primary" />
                </div>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Данные защищены шифрованием, храним в РФ, соответствуем 152-ФЗ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">
                  <Icon name="Clock" size={48} className="text-primary" />
                </div>
                <CardTitle>24/7 доступ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Работайте с документами когда удобно — AI не спит и не уходит на больничный
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">
                  <Icon name="FileText" size={48} className="text-primary" />
                </div>
                <CardTitle>Готовые шаблоны</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Библиотека проверенных форматов документов для всех типов блокировок
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Тарифы</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-4">Базовый</CardTitle>
              <div className="text-5xl font-bold text-primary mb-2">2 990₽</div>
              <CardDescription>за один кейс</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>1 случай разблокировки</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Генерация документов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Базовые шаблоны</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Email поддержка</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Выбрать</Button>
            </CardContent>
          </Card>

          <Card className="border-4 border-primary shadow-xl scale-105 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
              Популярный
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-4">Профессиональный</CardTitle>
              <div className="text-5xl font-bold text-primary mb-2">9 990₽</div>
              <CardDescription>в месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>До 5 кейсов в месяц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Все возможности базового</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Приоритетная поддержка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Консультация юриста 1 час</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>История документов</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-secondary">Выбрать</Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-4">Бизнес</CardTitle>
              <div className="text-5xl font-bold text-primary mb-2">29 990₽</div>
              <CardDescription>в месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Безлимитные кейсы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Все возможности Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Личный менеджер</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Юридическое сопровождение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>API интеграция</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Связаться</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Разблокируйте счёт уже сегодня</h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Присоединяйтесь к 2000+ компаниям, которые решают проблемы с 115-ФЗ за минуты
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
            Начать бесплатно
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">© 2024 РАЗБЛОК. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
