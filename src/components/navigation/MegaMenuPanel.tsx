import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavItem } from "@/lib/navigation-data";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  active?: boolean;
  children?: React.ReactNode;
  href?: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, active, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={href || "#"}
            className={cn(
              "block select-none rounded-md p-2 leading-tight no-underline outline-none transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
              "text-white text-sm",
              active && "text-primary font-medium",
              className
            )}
            {...props}
          >
            <div className="font-medium">{title}</div>
            {children && (
              <p className="line-clamp-2 text-xs text-muted-foreground mt-1">
                {children}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

interface MegaMenuPanelProps {
  items: NavItem[];
  locationPathname: string;
}

const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({ items, locationPathname }) => {
  return (
    <div className="w-full p-4 text-white bg-black">
      <ul className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mx-auto max-w-7xl">
        {items.map((columnItem) => (
          <li key={columnItem.title} className="space-y-1">
            <NavigationMenuLink asChild>
              <Link
                to={columnItem.href || "#"}
                className={cn(
                  "block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-center",
                  locationPathname === columnItem.href && "text-primary font-medium bg-gray-900"
                )}
              >
                <div className="text-base font-semibold text-white">
                  {columnItem.title}
                </div>
              </Link>
            </NavigationMenuLink>
            {columnItem.children && columnItem.children.length > 0 && (
              <ul className="space-y-1">
                {columnItem.children.map((subItem) => (
                  <ListItem
                    key={subItem.title}
                    title={subItem.title}
                    href={subItem.href}
                    active={locationPathname === subItem.href}
                    className="p-2 text-sm text-white/90 hover:text-white hover:bg-gray-800"
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenuPanel;