import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

interface JobCardProps {
  job: Job;
  onToggleFavorite: (jobId: number) => void;
}

export default function JobCard({ job, onToggleFavorite }: JobCardProps) {
  return (
    <Card className="hover-scale border-none shadow-lg overflow-hidden group">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl">
              {job.logo}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                {job.title}
              </CardTitle>
              <CardDescription>{job.company}</CardDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-110 transition-transform"
            onClick={() => onToggleFavorite(job.id)}
          >
            <Icon
              name="Heart"
              className={job.isFavorite ? 'fill-red-500 text-red-500' : ''}
              size={20}
            />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{job.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="MapPin" size={16} />
            {job.location}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Clock" size={16} />
            {job.type} • {job.experience}
          </div>
          <div className="flex items-center gap-2 font-semibold text-purple-600">
            <Icon name="Wallet" size={16} />
            {job.salary}
          </div>
        </div>

        <Button className="w-full gradient-primary text-white hover-scale">
          Откликнуться
        </Button>
      </CardContent>
    </Card>
  );
}
