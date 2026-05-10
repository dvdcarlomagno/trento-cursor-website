import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import './globals.css';

export const metadata: Metadata = {
	title: `${siteConfig.communityName} | Cursor Ambassador Community`,
	description: `Official community hub for Cursor events and recaps in ${siteConfig.city}.`,
	openGraph: {
		title: siteConfig.communityName,
		description: `Official community hub for Cursor events and recaps in ${siteConfig.city}.`,
		url: siteConfig.siteUrl,
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang={siteConfig.defaultLocale}>
			<body className="antialiased">
				<I18nProvider>{children}</I18nProvider>
				<Analytics />
			</body>
		</html>
	);
}
