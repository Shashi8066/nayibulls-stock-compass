
import { Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface StockSearchCardProps {
  title: string;
  description: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const StockSearchCard = ({ title, description, placeholder, value, onChange }: StockSearchCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-nayibulls-navy">
          <Search className="h-5 w-5 mr-2" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
        />
      </CardContent>
    </Card>
  );
};

export default StockSearchCard;
