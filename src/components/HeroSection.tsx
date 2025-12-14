import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  return (
    <section className="mb-16 animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">
            Найди свою первую работу мечты
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Тысячи стажировок и практик от ведущих компаний России
          </p>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Поиск по вакансиям или компаниям..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200 backdrop-blur-sm"
            />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Icon name="Search" className="mr-2" size={20} />
              Найти
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute right-32 bottom-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
