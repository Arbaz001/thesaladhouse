import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

interface MenuItemProps {
  name: string;
  description?: string;
  price: number;
  image?: string;
}

const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  const isMobile = useIsMobile();

  const cardContent = (
    <Card className="group hover:shadow-md transition-shadow duration-300 border-border/50 overflow-hidden cursor-pointer">
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

  const popupContent = (
    <>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h4 className="font-semibold text-foreground text-lg">{name}</h4>
          <span className="font-bold text-primary text-lg whitespace-nowrap">
            ₹{price}
          </span>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </>
  );

  // If there's a description or image, show popup with full details
  if (description || image) {
    // Use Dialog for mobile (tap), HoverCard for desktop (hover)
    if (isMobile) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <div>{cardContent}</div>
          </DialogTrigger>
          <DialogContent className="p-0 overflow-hidden max-w-sm">
            {popupContent}
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div>{cardContent}</div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 overflow-hidden" side="top" align="center">
          {popupContent}
        </HoverCardContent>
      </HoverCard>
    );
  }

  return cardContent;
};

export default MenuItem;
