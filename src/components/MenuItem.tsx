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
      <CardContent className="p-3 flex items-center gap-4">
        {image && (
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {name}
            </h4>
            <span className="font-semibold text-primary whitespace-nowrap">
              ₹{price}
            </span>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
