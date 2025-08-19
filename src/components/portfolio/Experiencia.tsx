import Section from "./Section";

interface CargoItemProps {
	periodo_inicio: string;
	periodo_fim: string;
	cargo: string;
	descricao: string;
}

interface EmpresaItemProps {
	empresa: string;
	periodo_inicio: string;
	periodo_fim: string;
	cargos: CargoItemProps[];
}

function CargoItem({ periodo_inicio, periodo_fim, cargo, descricao }: CargoItemProps) {
	return (
		<div className="rounded-lg border p-3 sm:p-4 mb-4 last:mb-0">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2 sm:mb-4">
				<h3 className="font-semibold text-sm sm:text-base">{cargo}</h3>
				<span className="text-xs text-muted-foreground">
					{periodo_inicio} - {periodo_fim}
				</span>
			</div>
			<p className="text-xs sm:text-sm mt-1 leading-relaxed">{descricao}</p>
		</div>
	);
}

function EmpresaItem({ empresa, periodo_inicio, periodo_fim, cargos }: EmpresaItemProps) {
	return (
		<div className="rounded-lg border p-3 sm:p-4 mb-4 last:mb-0">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2 sm:mb-4">
				<h3 className="font-semibold text-sm sm:text-base">{empresa}</h3>
				<span className="text-xs text-muted-foreground">
					{periodo_inicio} - {periodo_fim}
				</span>
			</div>
			{cargos.map((cargo, index) => (
				<CargoItem key={index} {...cargo} />
			))}
		</div>
	);
}

export default function Experiencia() {
	return (
		<Section id="experiencia" title="Experiência">
			<EmpresaItem
				empresa="Uniservice"
				periodo_inicio="Abril 2021"
				periodo_fim="Junho 2022"
				cargos={[
					{
						periodo_inicio: "Abril 2021",
						periodo_fim: "Jan 2022",
						cargo: "Analista de Suporte Técnico",
						descricao:
							"Dei suporte aos produtos tecnológicos de Gasometria, Telemetria e Pesagem Rodoviária dando suporte tanto ao software quanto à automação desses produtos. Os sistemas de Gasometria e Telemetria tinham sensores, os quais eu analisava possíveis incongruências nas medições, assegurando a confiabilidade do produto. No sistema de Pesagem Rodoviária realizava configuração das câmeras CFTV ligadas à automação de pesagem de carretas e caminhões, e também nas automações de semáforo do produto, em todas as manutenções era empregado amplo conhecimento em Redes e Conexão Serial",
					},
					{
						periodo_inicio: "Jan 2022",
						periodo_fim: "Jun 2022",
						cargo: "Estágio em Programação",
						descricao:
							"Desenvolvi um aplicativo Android e IOS para monitoramento dos produtos de Gasometria e Telemetria usando React Native SDK 42 e Node.js, possibilitando o acompanhamento em tempo real dos sensores de gás e das câmaras frias pelas empresas contratantes",
					},
				]}
			/>
			<EmpresaItem
				empresa="Gênesis Tecnologia e Inovação"
				periodo_inicio="Agosto 2023"
				periodo_fim="Julho 2025"
				cargos={[
					{
						periodo_inicio: "Agosto 2023",
						periodo_fim: "Fev 2024",
						cargo: "Programador Júnior",
						descricao:
							"Desenvolvi soluções em um produto de mensageria cujo o desempenho ruim gerava prejuízo financeiro pra empresa. Entreguei um algoritmo de conexão socket usando Laravel Echo e Vue.js que desempenhava melhor custando 80% menos",
					},
					{
						periodo_inicio: "Fev 2024",
						periodo_fim: "Set 2024",
						cargo: "Programador Pleno",
						descricao:
							"Implementei o produto de mensageria em outros sistemas. Além disso trabalhei em melhoria de Query’s SQL lentas, dando eficiência ao banco de dados e gerando mais economia para a empresa",
					},
					{
						periodo_inicio: "Set 2024",
						periodo_fim: "Jul 2025",
						cargo: "Programador Pleno (Líder de Projeto)",
						descricao:
							"	Liderei uma equipe em um novo projeto usando PHP, Laravel 12, React.js 19 e React Native SDK 53, afim de entregar um produto de gerencia de RH. O desafio desse projeto foi desenvolver uma conexão socket viável e segura entre os equipamentos de reconhecimento facial e servidor. Em minha rotina eu garantia a qualidade do código usando um esquema de revisão técnica trocada com outros programadores do projeto e através de testes unitários usando Jest e PHPUnit. Por meio da adaptação da metodologia ágil Scrum, eu planejava junto aos colegas as tarefas de cada Sprint. Priorizávamos todas tarefas que poderiam se tornar dependências de outras tarefas e entregávamos junto a elas, melhorias e correções. A entrega era continua depois homologar o código através das revisões técnicas e depois da supervisão, que poderiam ser semanais ou bissemanal",
					},
				]}
			/>
			<div className="flex flex-wrap gap-2 pt-2">
				<a
					href="#apresentacao"
					className="inline-flex items-center gap-1 border rounded-md px-3 py-1 hover:bg-muted transition-colors text-sm"
				>
					<span>👆</span>
					<span>Topo</span>
				</a>
				<a
					href="#contato"
					className="inline-flex items-center gap-1 border rounded-md px-3 py-1 hover:bg-muted transition-colors text-sm"
				>
					<span>✉️</span>
					<span>Contato</span>
				</a>
			</div>
		</Section>
	);
}
