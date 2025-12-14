import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JobCard from '@/components/JobCard';
import CompanyCard from '@/components/CompanyCard';

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  tags: string[];
  description: string;
  isFavorite: boolean;
}

interface Company {
  id: number;
  name: string;
  logo: string;
  vacancies: number;
  description: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('vacancies');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDirection, setSelectedDirection] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const [selectedType, setSelectedType] = useState('all');

  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Frontend разработчик',
      company: 'Яндекс',
      logo: '🟡',
      location: 'Великий Новгород',
      type: 'Стажировка',
      experience: 'Без опыта',
      salary: '60 000 - 80 000 ₽',
      tags: ['React', 'TypeScript', 'CSS'],
      description: 'Разработка интерфейсов для веб-сервисов',
      isFavorite: false
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'ВКонтакте',
      logo: '🔵',
      location: 'Великий Новгород',
      type: 'Практика',
      experience: 'До 1 года',
      salary: '50 000 - 70 000 ₽',
      tags: ['Figma', 'Prototyping', 'Design Systems'],
      description: 'Создание интерфейсов социальных продуктов',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Сбер',
      logo: '🟢',
      location: 'Великий Новгород',
      type: 'Стажировка',
      experience: 'Без опыта',
      salary: '70 000 - 90 000 ₽',
      tags: ['Python', 'SQL', 'Analytics'],
      description: 'Анализ данных и построение отчётов',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Backend разработчик',
      company: 'Ozon',
      logo: '🔵',
      location: 'Великий Новгород',
      type: 'Стажировка',
      experience: 'До 1 года',
      salary: '65 000 - 85 000 ₽',
      tags: ['Python', 'Django', 'PostgreSQL'],
      description: 'Разработка серверных приложений',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Mobile Developer',
      company: 'Тинькoff',
      logo: '🟡',
      location: 'Великий Новгород',
      type: 'Практика',
      experience: 'Без опыта',
      salary: '55 000 - 75 000 ₽',
      tags: ['React Native', 'iOS', 'Android'],
      description: 'Создание мобильных приложений',
      isFavorite: false
    },
    {
      id: 6,
      title: 'Marketing Analyst',
      company: 'Авито',
      logo: '🟢',
      location: 'Великий Новгород',
      type: 'Стажировка',
      experience: 'Без опыта',
      salary: '45 000 - 60 000 ₽',
      tags: ['Analytics', 'Marketing', 'Excel'],
      description: 'Анализ маркетинговых кампаний',
      isFavorite: false
    }
  ]);

  const companies: Company[] = [
    { id: 1, name: 'Яндекс', logo: '🟡', vacancies: 15, description: 'Технологическая компания' },
    { id: 2, name: 'ВКонтакте', logo: '🔵', vacancies: 8, description: 'Социальная сеть' },
    { id: 3, name: 'Сбер', logo: '🟢', vacancies: 22, description: 'Финансовые технологии' },
    { id: 4, name: 'Ozon', logo: '🔵', vacancies: 12, description: 'E-commerce платформа' },
    { id: 5, name: 'Тинькoff', logo: '🟡', vacancies: 10, description: 'Цифровой банк' },
    { id: 6, name: 'Авито', logo: '🟢', vacancies: 7, description: 'Доска объявлений' }
  ];

  const toggleFavorite = (jobId: number) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, isFavorite: !job.isFavorite } : job
    ));
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDirection = selectedDirection === 'all' || job.tags.some(tag => 
      tag.toLowerCase().includes(selectedDirection.toLowerCase())
    );
    const matchesExperience = selectedExperience === 'all' || job.experience === selectedExperience;

    const matchesType = selectedType === 'all' || job.type === selectedType;

    return matchesSearch && matchesDirection && matchesExperience && matchesType;
  });

  const favoriteJobs = jobs.filter(job => job.isFavorite);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="inline-flex h-12 items-center justify-center rounded-xl bg-white p-1 shadow-md">
            <TabsTrigger value="vacancies" className="rounded-lg px-6 data-[state=active]:gradient-primary data-[state=active]:text-white">
              <Icon name="Briefcase" className="mr-2" size={18} />
              Вакансии
            </TabsTrigger>
            <TabsTrigger value="companies" className="rounded-lg px-6 data-[state=active]:gradient-primary data-[state=active]:text-white">
              <Icon name="Building2" className="mr-2" size={18} />
              Компании
            </TabsTrigger>
            <TabsTrigger value="favorites" className="rounded-lg px-6 data-[state=active]:gradient-primary data-[state=active]:text-white">
              <Icon name="Heart" className="mr-2" size={18} />
              Избранное ({favoriteJobs.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vacancies" className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Filter" size={20} />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select value={selectedDirection} onValueChange={setSelectedDirection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Направление" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все направления</SelectItem>
                    <SelectItem value="react">Frontend</SelectItem>
                    <SelectItem value="python">Backend</SelectItem>
                    <SelectItem value="figma">Design</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Опыт" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любой опыт</SelectItem>
                    <SelectItem value="Без опыта">Без опыта</SelectItem>
                    <SelectItem value="До 1 года">До 1 года</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Тип практики" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Стажировка">Стажировка</SelectItem>
                    <SelectItem value="Практика">Практика</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onToggleFavorite={toggleFavorite} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-bold mb-2">Вакансии не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры фильтрации</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            {favoriteJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteJobs.map((job) => (
                  <JobCard key={job.id} job={job} onToggleFavorite={toggleFavorite} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="HeartCrack" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-bold mb-2">Избранных вакансий пока нет</h3>
                <p className="text-muted-foreground mb-6">Добавьте интересные вакансии в избранное, нажав на ❤️</p>
                <Button onClick={() => setActiveTab('vacancies')} className="gradient-primary text-white">
                  Перейти к вакансиям
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon name="Briefcase" size={24} />
                </div>
                <h3 className="text-xl font-bold">JobSpace</h3>
              </div>
              <p className="text-purple-200">Платформа для поиска стажировок и практик</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для студентов</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Поиск вакансий</li>
                <li>Компании-партнеры</li>
                <li>Мой профиль</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для работодателей</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Разместить вакансию</li>
                <li>База кандидатов</li>
                <li>Партнерская программа</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-purple-200">
                <li>info@jobspace.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-purple-200">
            <p>© 2024 JobSpace. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;