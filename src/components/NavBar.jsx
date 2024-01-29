import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { userAuth } from "@/Provider/AuthProvider";
import { Button, buttonVariants } from "@/components/ui/button";


const NavBar = () => {

  const { user, logOut } = useContext(userAuth)

  const handleLogout = () => {
    logOut()
  }

  return (
    <nav className="bg-blue-600 p-4 ">

      <div className="max-w-screen-xl mx-auto flex gap-8 items-center justify-between t ">
        <div>
          <Drawer>

            <DrawerTrigger className="text-white">
              <AiOutlineMenu></AiOutlineMenu>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <div className="grid grid-cols-1 gap-4 text-sm font-Quicksand">

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "underline" : ""}>
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "underline" : ""}>
                      About
                    </NavLink>
                    <NavLink
                      to="/explore"
                      className={({ isActive }) =>
                        isActive ? "underline" : ""}>
                      Explore
                    </NavLink>
                    <NavLink
                      to="/task"
                      className={({ isActive }) =>
                        isActive ? "underline" : ""}>
                      Task
                    </NavLink>

                  </div>
                </DrawerTitle>

              </DrawerHeader>
              <DrawerFooter>

                {/* <DrawerClose>
                  <h2 className="text-black border p-2 rounded inline-block absolute right-8 top-8"><AiOutlineClose /></h2>
                </DrawerClose> */}

              </DrawerFooter>
            </DrawerContent>
          </Drawer>

        </div>

        <div>
          <a href="/"><img className="w-12" src="/white-logo.png" alt="" /></a>
        </div>

        <div>
          {
            user ?

              <>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={user?.photoURL} />
                      <AvatarFallback> <AiOutlineUser /></AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem><h2 onClick={handleLogout}>Logout</h2></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </> : <div className="text-white font-Quicksand text-xs">
                <Link to='/registration' className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
              </div>
          }
        </div>

      </div>

    </nav>
  );
};

export default NavBar;
