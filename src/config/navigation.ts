import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Download, MessagesSquare, Scale, Wrench } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "tools", path: "/tools", icon: Wrench, isContentType: true },
  { key: "features", path: "/features", icon: Boxes, isContentType: true },
  { key: "downloads", path: "/downloads", icon: Download, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "comparisons", path: "/comparisons", icon: Scale, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
