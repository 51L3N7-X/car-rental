"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { ComponentProps } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export function NavBar() {
  const session = useSession();
  const pathname = usePathname();

  const isInDashboard = pathname.startsWith("/dashboard") && session.data?.user;
const navItems = isInDashboard
  ? [
      { name: "Home", href: "/" },
      { name: "Bookings", href: "/dashboard/books" },
    ]
  : [
      { name: "Book", href: "/book" },
      { name: "Car List", href: "/list" },
      ...(session.data?.user ? [{ name: "Dashboard", href: "/dashboard" }] : []),
    ];

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Logo</span>
          </Link>
          <div className="grid gap-2 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}

            {session.data?.user && !isInDashboard && (
              <Link
                href="/dashboard"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Dashboard
              </Link>
            )}

            {session.data?.user ? (
              <Button color="danger" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button size="default">Log In</Button>
              </Link>
            )}

            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Nav */}
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Logo</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}

        {session.data?.user && !isInDashboard && (
          <Link
            href="/dashboard"
            className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            Dashboard
          </Link>
        )}

        {session.data?.user ? (
          <Button color="danger" onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button size="default">Log In</Button>
          </Link>
        )}

        <ModeToggle />
      </nav>
    </header>
  );
}

function MenuIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
