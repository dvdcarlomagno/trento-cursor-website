'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { featuredProjects, featuredProjectsPrUrl } from '@/content/featured-projects';
import { useI18n } from '@/lib/i18n';

const FeaturedProjectsSection: React.FC = () => {
	const { t } = useI18n();

	return (
		<motion.section
			id="featured-projects"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.featuredProjects')}
			</p>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{t('home.featuredProjectsHeading')}
			</h2>

			{featuredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{featuredProjects.map((project, index) => (
						<motion.a
							key={project.name}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.35, delay: index * 0.08 }}
							className="bg-cursor-surface border border-cursor-border rounded-lg p-5 hover:border-cursor-border-emphasis transition-colors"
						>
							{project.coverImage ? (
								<div className="relative w-full h-32 rounded-md overflow-hidden mb-4">
									<Image
										src={project.coverImage}
										alt={project.name}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 33vw"
									/>
								</div>
							) : null}
							<h3 className="text-base font-semibold text-cursor-text mb-2">{project.name}</h3>
							<p className="text-sm text-cursor-text-muted leading-relaxed mb-3">{project.description}</p>
							<p className="text-xs text-cursor-text-faint">
								{t('home.projectBy')} {project.author || t('home.communityBuilder')}
							</p>
						</motion.a>
					))}
				</div>
			) : null}

			<div className="mt-6">
				<a
					href={featuredProjectsPrUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-4 py-2 bg-cursor-text text-cursor-bg rounded-md hover:bg-cursor-text-muted transition-colors text-sm font-medium"
				>
					{t('home.submitProject')}
					<ExternalLink className="w-4 h-4" />
				</a>
			</div>
		</motion.section>
	);
};

export default FeaturedProjectsSection;
