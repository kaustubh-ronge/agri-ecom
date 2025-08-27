import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    const socialLink = [
        {
            title: "Youtube",
            href: "",
            icon: <Youtube className="w-5 h-5" />,
        },
        {
            title: "Github",
            href: "",
            icon: <Github className="w-5 h-5" />,
        },
        {
            title: "Linkedin",
            href: "",
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            title: "Facebook",
            href: "",
            icon: <Facebook className="w-5 h-5" />,
        },
        {
            title: "Slack",
            href: "",
            icon: <Slack className="w-5 h-5" />,
        },
    ];
    return (

        <TooltipProvider >
            <div className={cn('flex items-center gap-3 px-8.5', className)}>
                {socialLink.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link key={item?.title} href={item?.href}
                                className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}
                                target='_blank'
                                rel='noopener noreferrer'

                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn('bg-white text-darkColor font-semibold border border-shop_light_green', tooltipClassName)}>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )

}

export default SocialMedia
