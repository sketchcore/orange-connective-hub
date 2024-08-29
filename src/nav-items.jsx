import { LayoutDashboard, BarChart2 } from "lucide-react";
import Index from "./pages/Index.jsx";
import Analytics from "./pages/Analytics.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <Analytics />,
  },
];
