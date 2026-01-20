"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, LogOut, User } from "lucide-react"
import Link from "next/link"
import { signOut } from "next-auth/react"

interface HeaderProps {
    user: {
        name?: string | null
        email?: string | null
        role?: string | null
        image?: string | null
    }
}

export function Header({ user }: HeaderProps) {
    // Get initials for avatar fallback
    const initials = user.name
        ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
        : "U"

    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-end border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 px-6 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-2">
                    <span className="text-sm font-semibold leading-none tracking-tight">{user.name}</span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mt-1 bg-secondary/50 px-2 py-0.5 rounded-full">{user.role}</span>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-transparent focus-visible:ring-1 focus-visible:ring-offset-1">
                            <Avatar className="h-9 w-9 border-2 border-background ring-2 ring-border/50 transition-all hover:ring-primary/20">
                                <AvatarImage src={user.image || ""} alt={user.name || ""} className="object-cover" />
                                <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-bold text-xs">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 p-2" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1 p-2 bg-muted/30 rounded-md mb-2">
                                <p className="text-sm font-semibold leading-none">{user.name}</p>
                                <p className="text-xs leading-none text-muted-foreground mt-1.5 break-all">
                                    {user.email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="my-1" />
                        <DropdownMenuItem asChild className="p-2 cursor-pointer focus:bg-primary/5 focus:text-primary rounded-md transition-colors">
                            <Link href="/settings" className="flex items-center w-full">
                                <div className="p-1.5 bg-primary/10 rounded-md mr-2.5 text-primary">
                                    <Settings className="h-4 w-4" />
                                </div>
                                <span className="font-medium">Settings</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1" />
                        <DropdownMenuItem
                            className="p-2 text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer rounded-md transition-colors"
                            onClick={() => signOut({ callbackUrl: "/login" })}
                        >
                            <div className="p-1.5 bg-destructive/10 rounded-md mr-2.5">
                                <LogOut className="h-4 w-4" />
                            </div>
                            <span className="font-medium">Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
