import Header from "@/components/portfolio/Header";
import Apresentacao from "@/components/portfolio/Apresentacao";
import Experiencia from "@/components/portfolio/Experiencia";
import Contato from "@/components/portfolio/Contato";

export default function App() {
	return (
		<main className="min-h-screen w-full">
			<Header />
			<Apresentacao />
			<Experiencia />
			<Contato />
		</main>
	);
}
