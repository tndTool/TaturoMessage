'use client';

import MobileItem from './MobileItem';

import useRoutes from '@/app/hooks/useRoutes';
import useConversation from '@/app/hooks/useConversation';

const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen) {
        return null;
    }
    return (
        <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
            {routes.map((route) => (
                <MobileItem
                    key={route.href}
                    href={route.href}
                    active={route.active}
                    icon={route.icon}
                    onCLick={route.onClick}
                />
            ))}
        </div>
    );
};

export default MobileFooter;
