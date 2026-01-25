import { Card, CardContent } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  description?: string;
  price: number;
}

const MenuItem = ({ name, description, price }: MenuItemProps) => {
  return (
    <Card className="group hover:shadow-md transition-shadow duration-300 border-border/50">
      <CardContent className="p-4 flex justify-between items-start gap-4">
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
