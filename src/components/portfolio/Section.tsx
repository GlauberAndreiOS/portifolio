import { ReactNode } from "react";

interface SectionProps {
	id?: string;
	title: string;
	children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
	return (
		<section
			id={id}
			data-section
			className="w-full py-6 sm:py-10 md:py-14 scroll-mt-16 sm:scroll-mt-20"
		>
			<div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8">
				<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 sm:mb-6">
					{title}
				</h2>
				<div className="space-y-3 sm:space-y-4 md:space-y-6">{children}</div>
			</div>
		</section>
	);
}
