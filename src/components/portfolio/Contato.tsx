import Section from "./Section";
import Whatsapp from "@/assets/whatsapp.png";

export default function Contato() {
	return (
		<Section id="contato" title="Contato">
			<div className="flex flex-col gap-2">
				<p>
					<strong>Telefone:</strong>
					<a href="https://wa.me/5567981349560" target="_blank" rel="noopener noreferrer">
						<img src={Whatsapp} alt="Whatsapp" className="w-4 h-4 inline-block ml-2" />
						<span> +55 (67) 98134-9560</span>
					</a>
				</p>
				<p>
					<strong>E-mail:</strong>{" "}
					<a className="underline" href="mailto:contato@gandrei.dev.br">
						contato@gandrei.dev.br
					</a>
				</p>
			</div>
			<div className="flex flex-wrap gap-2 pt-2 sm:pt-3">
				<a
					href="#apresentacao"
					className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors text-sm"
				>
					<span>👆</span>
					<span>Voltar ao topo</span>
				</a>
				<a
					href="#experiencia"
					className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors text-sm"
				>
					<span>💼</span>
					<span>Ver experiência</span>
				</a>
			</div>
		</Section>
	);
}
