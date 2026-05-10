import { firstTrentoMeetupRecap } from '@/content/recaps/cursor-meetup-trento-1';
import { RecapData } from '@/lib/types';

export const recapsBySlug: Record<string, RecapData> = {
	[firstTrentoMeetupRecap.slug]: firstTrentoMeetupRecap,
};
