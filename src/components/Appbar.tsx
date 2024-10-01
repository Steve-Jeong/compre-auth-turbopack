'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
export default function App() {
  const menuItems = [
    { label: "Profile", href: "/profile" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Activity", href: "/activity" },
    { label: "Analytics", href: "/analytics" },
    { label: "System", href: "/system" },
    { label: "Deployments", href: "/deployments" },
    { label: "My Settings", href: "/my-settings" },
    { label: "Team Settings", href: "/team-settings" },
    { label: "Help & Feedback", href: "/help-feedback" },
    { label: "Log Out", href: "/logout" },
  ];
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/features">
            Features 
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/customers" aria-current="page" color="warning">
            Customers 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/integrations">
            Integrations 
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/api/auth/signin">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="/api/auth/signup"
            variant="flat"
          >
            Sign Up 
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
