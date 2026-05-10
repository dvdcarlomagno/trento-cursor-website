import { RecapData } from '@/lib/types';

export const firstTrentoMeetupRecap: RecapData = {
	slug: 'cursor-meetup-trento-1',
	title: 'Cursor Meetup Trento #1',
	date: '2026-01-28',
	attendees: 114,
	summary: [
		'Join us for an evening of talks, insights, and networking with Italy\'s Cursor community.',
		'Whether you are starting out or already shipping with Cursor, this meetup is built to connect Italian developers and share practical workflows.',
	],
	host: {
		name: 'Impact Hub Trento',
		logo: '/images/events/recap-host.jpg',
		url: 'https://trento.impacthub.net/',
	},
	highlights: [
		{
			quote: 'Talks from developers sharing how they use Cursor in production.',
		},
		{
			quote: 'A live walkthrough from one of the Cursor team members.',
		},
		{
			quote: 'Insights from a product manager on building with AI tools.',
		},
		{
			quote: 'Open Q&A with the Cursor team and networking over drinks.',
		},
	],
	resources: [
		{ label: 'Join the Trento Telegram community', url: 'https://t.me/+M3CbnM7gCFcxYmY8' },
		{ label: 'Cursor Community', url: 'https://cursor.com/community' },
	],
	photoCredits: [{ name: 'Community volunteer team' }, { name: 'Impact Hub Trento' }],
	photos: [
		{
			src: '/images/events/event-thumb.jpg',
			alt: 'Participants at Cursor Meetup Trento #1',
		},
		{
			src: '/images/events/event-gallery-1.jpg',
			alt: 'Talks and discussions during the meetup',
		},
		{
			src: '/images/events/event-gallery-2.jpg',
			alt: 'Networking and community moments at Impact Hub Trento',
		},
	],
};
