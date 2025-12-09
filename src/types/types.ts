import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HomeIcon from '@mui/icons-material/Home';

export interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const NavBarLinks: NavItem[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: AccountCircleIcon },
    { name: "Projects", href: "/projects", icon: LightbulbIcon },
    { name: "Experiences", href: "/experiences", icon: WorkIcon },
];

export default NavBarLinks;