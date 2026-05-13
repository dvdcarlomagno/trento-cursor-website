import { CursorEvent } from '@/lib/types';

export const events: CursorEvent[] = [
	{
		id: 'cursor-meetup-trento-june-2026',
		title: 'Cursor Meetup Trento',
		date: '2026-06-11',
		displayDate: 'June 11, 2026',
		location: 'Afliant, Trento, Italy',
		lumaUrl: 'https://luma.com/7rcm3za3',
		status: 'upcoming',
	},
	{
		id: 'cursor-meetup-trento-1',
		title: 'Cursor Meetup Trento #1',
		date: '2026-01-28',
		displayDate: 'January 28, 2026',
		attendees: 114,
		location: 'Trento, Italy',
		recapPath: '/recaps/cursor-meetup-trento-1',
		thumbnail: '/images/events/event-thumb.jpg',
		galleryImages: ['/images/events/event-gallery-1.jpg', '/images/events/event-gallery-2.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
