"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            toastOptions={{
                classNames: {
                    toast: "h-auto w-full p-4 bg-background rounded-md border group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border shadow-lg flex items-center relative",
                    description:
                        "group-[.toast]:text-muted-foreground ml-2 font-sans",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground py-1 px-2 shadow-md bg-background border-border border-2 ml-auto h-fit min-w-fit",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-foreground py-1 px-2 shadow-md bg-background border-border border-2 ml-auto h-fit min-w-fit",
                    title: "ml-2 font-sans",
                    closeButton:
                        "absolute bg-background shadow-md -top-1 -left-1 rounded-full p-0.5",
                },
                unstyled: true,
            }}
            {...props}
        />
    );
};

export { Toaster };
