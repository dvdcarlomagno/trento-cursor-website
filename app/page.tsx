'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroHeader from '@/components/HeroHeader';
import AmbassadorSection from '@/components/AmbassadorSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import UpcomingEvents from '@/components/UpcomingEvents';
import PastEvents from '@/components/PastEvents';
import SponsorsSection from '@/components/SponsorsSection';
import SectionDivider from '@/components/SectionDivider';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/content/site.config';
import { upcomingEvents } from '@/content/events';

function buildHomeJsonLd() {
	const org = {
		'@type': 'Organization',
		name: siteConfig.communityName,
		url: siteConfig.cursorCommunityUrl,
	};

	const eventItems = upcomingEvents.map((event) => ({
		'@type': 'Event',
		name: event.title,
		startDate: event.date,
		location: {
			'@type': 'Place',
			name: event.location,
		},
		organizer: org,
		...(event.lumaUrl ? { url: event.lumaUrl } : {}),
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
	}));

	return {
		'@context': 'https://schema.org',
		'@graph': [org, ...eventItems],
	};
}

const Home: React.FC = () => {
	return (
		<main className="min-h-screen bg-cursor-bg text-cursor-text scroll-smooth">
			<JsonLd data={buildHomeJsonLd()} />
			<Navbar />
			<HeroHeader />

			<div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
				<AmbassadorSection />
				<SectionDivider />
				<FeaturedProjectsSection />
				{upcomingEvents.length > 0 ? (
					<>
						<SectionDivider />
						<UpcomingEvents />
					</>
				) : null}
				<SectionDivider />
				<PastEvents />
				<SectionDivider />
				<SponsorsSection />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
