import { useEffect } from "react";

interface UseSectionSnapOptions {
	selector?: string;
	throttleMs?: number;
	enabled?: boolean;
}

export default function useSectionSnap(options?: UseSectionSnapOptions) {
	useEffect(() => {
		const isEnabled = options?.enabled ?? true;
		if (!isEnabled) return;

		const selector = options?.selector ?? "section[data-section]";
		const throttleMs = options?.throttleMs ?? 700;

		let isAnimating = false;
		let currentSectionIndex = 0;

		const getSections = (): HTMLElement[] =>
			Array.from(document.querySelectorAll(selector)) as HTMLElement[];

		// Inicializa índice atual baseado na posição na página
		const initializeCurrentIndex = (sections: HTMLElement[]) => {
			if (sections.length === 0) return;
			let bestIndex = 0;
			let bestDistance = Number.POSITIVE_INFINITY;
			sections.forEach((el, index) => {
				const rect = el.getBoundingClientRect();
				const distance = Math.abs(rect.top);
				if (distance < bestDistance) {
					bestDistance = distance;
					bestIndex = index;
				}
			});
			currentSectionIndex = bestIndex;
		};

		const clamp = (value: number, min: number, max: number) =>
			Math.max(min, Math.min(max, value));

		const onWheel = (event: WheelEvent) => {
			const sections = getSections();
			if (sections.length === 0) return;
			if (isAnimating) {
				event.preventDefault();
				return;
			}

			const minDeltaToTrigger = 5; // sensível o suficiente para trackpads
			if (Math.abs(event.deltaY) < minDeltaToTrigger) return;

			event.preventDefault();
			const direction = event.deltaY > 0 ? 1 : -1;
			const targetIndex = clamp(currentSectionIndex + direction, 0, sections.length - 1);

			if (targetIndex === currentSectionIndex) return;

			isAnimating = true;
			sections[targetIndex].scrollIntoView({ behavior: "smooth", block: "start" });

			window.setTimeout(() => {
				isAnimating = false;
				currentSectionIndex = targetIndex;
			}, throttleMs);
		};

		// Observa a seção visível para manter o índice sincronizado
		const sectionsAtStart = getSections();
		initializeCurrentIndex(sectionsAtStart);
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
				if (visible[0]) {
					const target = visible[0].target as HTMLElement;
					const all = getSections();
					const newIndex = all.indexOf(target);
					if (newIndex >= 0) currentSectionIndex = newIndex;
				}
			},
			{ threshold: [0.55] },
		);
		sectionsAtStart.forEach((el) => observer.observe(el));

		window.addEventListener("wheel", onWheel, { passive: false });
		return () => {
			window.removeEventListener("wheel", onWheel as EventListener);
			observer.disconnect();
		};
	}, [options?.selector, options?.throttleMs, options?.enabled]);
}
