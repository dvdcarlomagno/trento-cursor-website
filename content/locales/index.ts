import enUS from './en-US.json';
import it from './it.json';

export const localeBundles = {
	'en-US': enUS,
	it,
} as const;

export type LocaleBundleKey = keyof typeof localeBundles;
