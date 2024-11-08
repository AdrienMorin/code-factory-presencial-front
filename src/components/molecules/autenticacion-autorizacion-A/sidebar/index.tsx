import React from "react";
import Link from "next/link";
import { Plane, Wallet, Package2, TicketsPlane, LogOut } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { useSession } from 'next-auth/react';

export default function Index() {
  //const { data: session } = useSession();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">SITAS</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/vuelos"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Plane className="h-5 w-5" />
              Vuelos
            </Link>
            <Link
              href="/reservas"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <TicketsPlane className="h-5 w-5" />
              Reservas
            </Link>
            <Link
              href="/pagos"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Wallet className="h-5 w-5" />
              Pagos
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4 flex flex-row gap-5 justify-center items-center">
              <Avatar>
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
              </Avatar>
              <div>
                <CardTitle>Jonh Doe</CardTitle>
                <CardContent className="px-4 py-2 md:pt-0">
                  USER
                </CardContent>
              </div>
              <Link href="./login">
                <Button variant={"ghost"} className="px-4 py-2 text-sm font-medium">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
