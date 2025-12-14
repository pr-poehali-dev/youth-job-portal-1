import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Company {
  id: number;
  name: string;
  logo: string;
  vacancies: number;
  description: string;
}

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="hover-scale border-none shadow-lg overflow-hidden group">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-3xl">
            {company.logo}
          </div>
          <div>
            <CardTitle className="group-hover:text-purple-600 transition-colors">
              {company.name}
            </CardTitle>
            <CardDescription>
              {company.vacancies} открытых вакансий
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{company.description}</p>
        <Button className="w-full gradient-accent text-white hover-scale">
          Смотреть вакансии
        </Button>
      </CardContent>
    </Card>
  );
}
