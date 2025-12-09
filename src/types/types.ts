export interface NavItem {
    name: string;
    href: string;
}

const NavBarLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experiences", href: "/experiences" },
];

export default NavBarLinks;