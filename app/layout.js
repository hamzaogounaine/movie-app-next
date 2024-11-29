"use client";
import "../styles/globals.css";
import "../styles/embla.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  ActivityIcon,
  GlobeIcon,
  HomeIcon,
  LayoutGridIcon,
  MenuIcon,
  MountainIcon,
  Play,
  Search,
  UsersIcon,
} from "lucide-react";
// import { BreadcrumbDemo } from "./Breadcrumb"
// import ToggleMode from "./ToggleMode"
import { MdMovie } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import MoviesProvider from "@/context/moviesContext";
import { BreadcrumbDemo } from "@/components/breadcrumb/breadcrumb";
import { ThemeProvider } from "@/components/theme-provier";
import ToggleMode from "@/components/toggleMode/ToggleMode";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  const linkClass = (href) => {
    return `link flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
      isActive(href)
        ? "bg-primary text-primary-foreground"
        : "hover:bg-secondary-foreground/10"
    }`;
  };

  const mobileLinkClass = (href) => {
    return `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium link ${
      isActive(href)
        ? "bg-primary text-primary-foreground"
        : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
    }`;
  };

  return (
    <html lang="en">
      <MoviesProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className="bg-background">
            <div className="flex h-screen w-full">
              <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r lg:bg-background">
                <div className="flex h-full flex-col  justify-between py-2 px-2">
                  <div className="space-y-2 ">
                    <div className="space-y-2 p-3 bg-secondary rounded-xl">
                      <Link
                        href="/"
                        className={linkClass("/")}
                        prefetch={false}
                      >
                        <HomeIcon className="h-6 w-6 mr-3" />
                        Home
                      </Link>
                      <Link
                        href="/search"
                        className={linkClass("/search")}
                        prefetch={false}
                      >
                        <Search className="h-6 w-6 mr-3" />
                        Search
                      </Link>
                    </div>
                    <div className="space-y-2 p-3 bg-secondary rounded-xl">
                      <Link
                        href="/movies"
                        className={linkClass("/movies")}
                        prefetch={false}
                      >
                        <MdMovie className="h-6 w-6 mr-3" />
                        Movies
                      </Link>
                      <Link
                        href="/analytics"
                        className={linkClass("/tvshows")}
                        prefetch={true}
                      >
                        <IoTv className="h-6 w-6 mr-3" />
                        TV shows
                      </Link>
                      <Link
                        href="/analytics"
                        className={linkClass("/kdrama")}
                        prefetch={true}
                      >
                        <FaMasksTheater className="h-6 w-6 mr-3" />K drama
                      </Link>
                      <Link
                        href="/analytics"
                        className={linkClass("/soon")}
                        prefetch={true}
                      >
                        <MdDateRange className="h-6 w-6 mr-3" />
                        Coming soon
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 p-3 bg-secondary rounded-xl">
                    <Link
                      href="/watchlist"
                      className={linkClass("/watchlist")}
                      prefetch={true}
                    >
                      <FaRegHeart className="h-6 w-6 mr-3" />
                      WatchList
                    </Link>
                    <Link
                      href="/account"
                      className={linkClass("/account")}
                      prefetch={true}
                    >
                      <FaUserAlt className="h-6 w-6 mr-3" />
                      Account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-bold"
                      prefetch={false}
                    >
                      <Play className="h-8 w-8" />
                      <span className="logo font-bold ">Movies App</span>
                    </Link>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                          <MenuIcon className="h-6 w-6" />
                          <span className="sr-only">Toggle navigation</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-72">
                        <div className="flex h-full flex-col  justify-between">
                          <div className="space-y-2 mt-4">
                            <div className="space-y-2 p-3 bg-secondary rounded-xl">
                              <Link
                                href="/"
                                className={linkClass("/")}
                                prefetch={false}
                              >
                                <HomeIcon className="h-6 w-6 mr-3" />
                                Home
                              </Link>
                              <Link
                                href="/search"
                                className={linkClass("/search")}
                                prefetch={false}
                              >
                                <Search className="h-6 w-6 mr-3" />
                                Search
                              </Link>
                            </div>
                            <div className="space-y-2 p-3 bg-secondary rounded-xl">
                              <Link
                                href="/movies"
                                className={linkClass("/movies")}
                                prefetch={false}
                              >
                                <MdMovie className="h-6 w-6 mr-3" />
                                Movies
                              </Link>
                              <Link
                                href="/analytics"
                                className={linkClass("/tvshows")}
                                prefetch={true}
                              >
                                <IoTv className="h-6 w-6 mr-3" />
                                TV shows
                              </Link>
                              <Link
                                href="/analytics"
                                className={linkClass("/kdrama")}
                                prefetch={true}
                              >
                                <FaMasksTheater className="h-6 w-6 mr-3" />K
                                drama
                              </Link>
                              <Link
                                href="/analytics"
                                className={linkClass("/soon")}
                                prefetch={true}
                              >
                                <MdDateRange className="h-6 w-6 mr-3" />
                                Coming soon
                              </Link>
                            </div>
                          </div>
                          <div className="space-y-2 p-3 bg-secondary rounded-xl">
                            <Link
                              href="/watchlist"
                              className={linkClass("/watchlist")}
                              prefetch={true}
                            >
                              <FaRegHeart className="h-6 w-6 mr-3" />
                              WatchList
                            </Link>
                            <Link
                              href="/account"
                              className={linkClass("/account")}
                              prefetch={true}
                            >
                              <FaUserAlt className="h-6 w-6 mr-3" />
                              Account
                            </Link>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </header>
                <div className="p-4 lg:p-8 max-h-screen overflow-scroll">
                  <BreadcrumbDemo />
                  {children}
                  <ToggleMode />
                </div>
              </div>
            </div>
          </body>
        </ThemeProvider>
      </MoviesProvider>
    </html>
  );
}
