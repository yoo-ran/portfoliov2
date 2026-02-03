import { CONTACT_FAB_ITEMS } from '@/lib/contactFab-data';

export function ContactFabMenu() {
  return (
    <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 xl:bottom-8 xl:right-8 flexCol gap-y-2">
      {CONTACT_FAB_ITEMS.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            className="fab-item border rounded-full p-2 md:p-3 lg:p-4 xl:p-5 bg-black shadow-sm/50 "
          >
            <Icon className=" text-beige w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          </a>
        );
      })}
    </div>
  );
}
