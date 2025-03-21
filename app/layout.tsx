import { Toaster } from 'sonner';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import { LayoutDashboard, Search, MessageSquare, Bot } from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/sidebar';

import './globals.css';

export const metadata: Metadata = {
  title: 'AI-Reasoning',
  description:
    'Trainnect-AI-Reasoning.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen">
        <Toaster position="top-center" />
        <div className="flex">
          <Sidebar>
            <SidebarBody>
              <div className="flex flex-col gap-2">
                <SidebarLink
                  link={{
                    label: "Dashboard",
                    href: "/",
                    icon: <LayoutDashboard size={20} />,
                  }}
                />
                <SidebarLink
                  link={{
                    label: "AI Search",
                    href: "/tavily-ai-search",
                    icon: <Search size={20} />,
                  }}
                />
                <SidebarLink
                  link={{
                    label: "AI Agents",
                    href: "/ai-agents",
                    icon: <Bot size={20} />,
                  }}
                />
                <SidebarLink
                  link={{
                    label: "AI Chat",
                    href: "/",
                    icon: <MessageSquare size={20} />,
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
