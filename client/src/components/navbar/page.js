import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/reducerSlice/userSlice";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  const LoggedInDrop = () => {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem onClick={handleLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };

  const AuthButtons = () => {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <Link href="/register">
              <p className="font-semibold">Register</p>
            </Link>
          </DropdownItem>
          <DropdownItem key="profile" className="h-14 gap-2">
            <Link href="/login">
              <p className="font-semibold">Login</p>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">KairosInn</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Room
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {isLoggedIn ? <LoggedInDrop /> : <AuthButtons />}
      </NavbarContent>
    </Navbar>
  );
}
