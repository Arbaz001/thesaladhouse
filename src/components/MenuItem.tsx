import { Card, CardContent } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  description?: string;
  price: number;
  image?: string;
}

const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  return (
    <Card className="group hover:shadow-md transition-shadow duration-300 border-border/50 overflow-hidden">
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardContent className={`p-4 flex justify-between items-start gap-4 ${image ? 'pt-4' : ''}`}>
        <div className="flex-1">
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <span className="font-semibold text-primary whitespace-nowrap">
          ₹{price}
        </span>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
