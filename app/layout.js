'use client'
import "./globals.css";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { ActivityIcon, GlobeIcon, HomeIcon, LayoutGridIcon, MenuIcon, MountainIcon, Search, UsersIcon } from "lucide-react"
// import { BreadcrumbDemo } from "./Breadcrumb"
// import ToggleMode from "./ToggleMode"
import { MdMovie } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";



export default function RootLayout({ children }) {
  const pathname = usePathname()

  const isActive = (href) => {
    return pathname === href
  }

  const linkClass = (href) => {
    return `link flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${isActive(href)
      ? 'bg-primary text-primary-foreground'
      : 'hover:bg-secondary-foreground/10'
      }`
  }

  const mobileLinkClass = (href) => {
    return `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium link ${isActive(href)
      ? 'bg-primary text-primary-foreground'
      : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50'
      }`
  }

  return (
    <html lang="en">
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
                    <FaMasksTheater className="h-6 w-6 mr-3" />
                    K drama
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
                <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
                  <MountainIcon className="h-6 w-6" />
                  <span className="text-lg">Movies App</span>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MenuIcon className="h-6 w-6" />
                      <span className="sr-only">Toggle navigation</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64">
                    <div className="flex h-full flex-col justify-between py-6 px-4">
                      <div className="space-y-6">
                        <nav className="space-y-1">
                          <Link
                            href="/"
                            className={mobileLinkClass("/")}
                            prefetch={false}
                          >
                            <HomeIcon className="h-6 w-6 mr-3" />
                            Home
                          </Link>
                          <Link
                            href="/products"
                            className={mobileLinkClass("/products")}
                            prefetch={false}
                          >
                            <LayoutGridIcon className="h-6 w-6 mr-3" />
                            Products
                          </Link>
                          <Link
                            href="/customers"
                            className={mobileLinkClass("/customers")}
                            prefetch={false}
                          >
                            <UsersIcon className="h-6 w-6 mr-3" />
                            Customers
                          </Link>
                          <Link
                            href="/analytics"
                            className={mobileLinkClass("/analytics")}
                            prefetch={false}
                          >
                            <ActivityIcon className="h-6 w-6 mr-3" />
                            Analytics
                          </Link>
                        </nav>
                      </div>
                      <div className="space-y-4">
                        <Button variant="outline" size="sm" className="w-full">
                          Upgrade to Pro
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <GlobeIcon className="h-6 w-6 mr-3" />
                          <span>English</span>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            <div className="p-4 lg:p-8 max-h-screen overflow-scroll">
              {/* <BreadcrumbDemo /> */}
              {children}
              {/* <ToggleMode /> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
