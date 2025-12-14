import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="Briefcase" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              JobSpace
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <Button variant="ghost" className="font-medium">
              <Icon name="Home" className="mr-2" size={18} />
              Главная
            </Button>
            <Button variant="ghost" className="font-medium">
              <Icon name="Building2" className="mr-2" size={18} />
              Компании
            </Button>
            <Button variant="ghost" className="font-medium">
              <Icon name="Heart" className="mr-2" size={18} />
              Избранное
            </Button>
            <Button className="gradient-primary text-white hover-scale">
              <Icon name="User" className="mr-2" size={18} />
              Профиль
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
