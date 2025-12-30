import React from "react";
import { Helmet } from "react-helmet-async";
import PolicyBlock from "./PolicyBlock";

const PrivacyPolicy = () => {
	return (
		<>
			<Helmet>
				<title>Privacy Policy | SkillSphere</title>
				<meta
					name="description"
					content="Learn how SkillSphere collects, uses, and protects your data. Your privacy and trust matter to us."
				/>
			</Helmet>

			<section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200">
				<div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">

					{/* Header */}
					<header className="mb-14 text-center">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
							Privacy Policy
						</h1>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Transparency is non-negotiable. This page explains how SkillSphere
							handles your data with responsibility, clarity, and intent.
						</p>
						<p className="text-sm text-gray-500 mt-3">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</header>

					{/* Content */}
					<div className="space-y-10 leading-relaxed text-gray-300">

						<PolicyBlock title="1. Introduction">
							SkillSphere is a modern learning and collaboration platform built
							for developers, creators, and innovators. Your privacy is a core
							part of our product philosophy. This Privacy Policy outlines how
							we collect, use, store, and protect your information.
						</PolicyBlock>

						<PolicyBlock title="2. Information We Collect">
							We collect only what is necessary to deliver a seamless experience.
							This may include:
							<ul className="list-disc pl-6 mt-3 space-y-2">
								<li>Basic personal details (name, email)</li>
								<li>Usage data (pages visited, interactions)</li>
								<li>Device and browser information</li>
							</ul>
						</PolicyBlock>

						<PolicyBlock title="3. How We Use Your Information">
							Your data helps us:
							<ul className="list-disc pl-6 mt-3 space-y-2">
								<li>Improve platform performance and UI/UX</li>
								<li>Personalize content and learning experiences</li>
								<li>Ensure security, reliability, and fraud prevention</li>
							</ul>
						</PolicyBlock>

						<PolicyBlock title="4. Cookies & Analytics">
							SkillSphere may use cookies or similar technologies to understand
							user behavior and improve the platform. These cookies never store
							sensitive personal data and are used strictly for optimization
							and analytics purposes.
						</PolicyBlock>

						<PolicyBlock title="5. Third-Party Services">
							We may integrate trusted third-party tools (analytics, hosting,
							authentication) that follow industry-standard privacy practices.
							SkillSphere does not sell or trade your data—period.
						</PolicyBlock>

						<PolicyBlock title="6. AI & Data Usage">
							As SkillSphere evolves into AI-powered features, any data used for
							AI personalization or recommendations will be anonymized and
							processed ethically. We do not train AI models on private user
							data without explicit consent.
						</PolicyBlock>

						<PolicyBlock title="7. Data Security">
							We implement modern security measures to protect your information,
							including encryption, secure servers, and access controls.
							However, no system is 100% immune—so we stay proactive.
						</PolicyBlock>

						<PolicyBlock title="8. Your Rights">
							You have the right to:
							<ul className="list-disc pl-6 mt-3 space-y-2">
								<li>Access or update your personal data</li>
								<li>Request data deletion</li>
								<li>Opt out of non-essential communications</li>
							</ul>
						</PolicyBlock>

						<PolicyBlock title="9. Changes to This Policy">
							This policy may evolve as SkillSphere grows. Any major updates will
							be communicated clearly and transparently.
						</PolicyBlock>

						<PolicyBlock title="10. Contact Us">
							If you have questions or concerns about privacy, feel free to reach
							out through our official contact channels on SkillSphere.
						</PolicyBlock>
					</div>
				</div>
			</section>
		</>
	);
};

export default PrivacyPolicy;