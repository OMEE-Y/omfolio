import { Icon } from "@phosphor-icons/react";

interface NavItemProps {
  icon: Icon;
  href: string;
  external?: boolean;
}

export const NavItem = ({ icon: Icon, href, external = true }: NavItemProps) => (
  <a 
    href={href} 
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : ""}
    className="p-2.5 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-xl transition-all duration-200 text-zinc-500 hover:text-black dark:hover:text-white group"
  >
    <Icon size={20} weight="duotone" className="transition-transform group-hover:scale-110" />
  </a>
);