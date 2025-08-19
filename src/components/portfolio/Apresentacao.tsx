import Section from "./Section";

export default function Apresentacao() {
	return (
		<Section id="apresentacao" title="Apresentação">
			<p className="text-sm sm:text-base leading-relaxed">
				Sou desenvolvedor FullStack com experiência em projetos que exigem performance,
				escalabilidade e integração entre sistemas. Tenho sólida atuação tanto no backend
				quanto no frontend, com foco em otimização de queries SQL, conexões em tempo real
				(WebSockets), integrações com equipamentos e boas práticas de desenvolvimento.
			</p>
			<p className="text-sm sm:text-base leading-relaxed">
				Destaco-me por identificar e resolver gargalos de desempenho, liderar projetos com
				entregas contínuas e contribuir para a qualidade do código com revisões técnicas e
				testes automatizados. Trabalho bem em equipe e adapto metodologias ágeis como Scrum
				à realidade dos projetos. Busco desafios para aplicar e expandir minhas habilidades
				técnicas em soluções robustas, seguras e inovadoras.
			</p>
			<div className="flex flex-wrap gap-2 pt-2">
				<a
					href="#experiencia"
					className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors text-sm"
				>
					<span>➡️</span>
					<span>Ver experiência</span>
				</a>
				<a
					href="#contato"
					className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors text-sm"
				>
					<span>✉️</span>
					<span>Fale comigo</span>
				</a>
			</div>
		</Section>
	);
}
