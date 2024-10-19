'use client';

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { ListIcon } from 'lucide-react';

const sidebarNavItems = [
    {
        title: "Task",
        href: "/",
        icon: ListIcon,
    },
    
    
    
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex h-full max-h-screen flex-col gap-2 bg-muted/20 border-r w-60 bg-white ">
            <div className="flex h-[60px] items-center px-8">
                <Link className="flex items-center gap-2 font-semibold text-lg" href="/dashboard">
                   
                    <span className="font-bold uppercase">Task App</span>
                </Link>
            </div>
            <aside className="grid items-start px-4 text-sm font-medium gap-1 relative">
                {sidebarNavItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={index}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                isActive
                                    ? "bg-primary/15 text-primary hover:bg-primary hover:text-white after:w-1 after:h-10 after:rounded-l-xl after:bg-primary after:absolute after:right-0"
                                    : "hover:bg-primary hover:text-white",
                                "justify-start py-5 "
                            )}
                            href={item.href}
                        >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.title}
                        </Link>
                    );
                })}
            </aside>
        </div>
    );
};

export default Sidebar;