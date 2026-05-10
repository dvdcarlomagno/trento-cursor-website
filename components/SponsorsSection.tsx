'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { partners } from '@/content/partners';
import { useI18n } from '@/lib/i18n';

const SponsorsSection: React.FC = () => {
	const { t } = useI18n();

	if (partners.length === 0) {
		return null;
	}

	return (
		<motion.section
			id="sponsors"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.sponsors')}
			</p>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{t('home.sponsorsHeading')}
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{partners.map((partner, index) => (
					<motion.a
						key={partner.name}
						href={partner.url}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.35, delay: index * 0.08 }}
						className="bg-cursor-surface border border-cursor-border rounded-lg p-4 min-h-[108px] flex flex-col justify-center hover:border-cursor-border-emphasis transition-colors"
					>
						<div className="relative w-full h-10 mb-2">
							<Image
								src={partner.logo}
								alt={partner.name}
								fill
								className={`object-contain grayscale opacity-80 ${partner.invertOnDark ? 'invert' : ''}`}
								sizes="(max-width: 768px) 90vw, 30vw"
							/>
						</div>
						<span className="text-xs text-cursor-text-muted text-center">{partner.name}</span>
					</motion.a>
				))}
			</div>
		</motion.section>
	);
};

export default SponsorsSection;
