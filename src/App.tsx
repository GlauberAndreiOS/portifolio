import Header from "@/components/portfolio/Header";
import Apresentacao from "@/components/portfolio/Apresentacao";
import Experiencia from "@/components/portfolio/Experiencia";
import Contato from "@/components/portfolio/Contato";
import useSectionSnap from "@/hooks/useSectionSnap";

export default function App() {
	useSectionSnap({ selector: "section[data-section]", throttleMs: 700, enabled: true });
	return (
		<main className="min-h-screen w-full">
			<Header />
			<Apresentacao />
			<Experiencia />
			<Contato />
		</main>
	);
}
