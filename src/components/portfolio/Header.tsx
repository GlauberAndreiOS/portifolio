import ThemeToggle from "./ThemeToggle";
import Perfil from "@/assets/Perfil.png";

export default function Header() {
	return (
		<header className="w-full border-b sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between gap-3">
				<div className="flex items-center gap-3 sm:gap-4 min-w-0">
					<img
						src={Perfil}
						alt="Foto de perfil de Glauber Andrei Pain"
						className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover border"
					/>
					<div className="truncate">
						<h1 className="text-lg sm:text-xl font-bold leading-none truncate">
							Glauber Andrei Oliveira da Silva Pain
						</h1>
						<p className="text-xs sm:text-sm text-muted-foreground truncate">
							Desenvolvedor FullStack
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2 sm:gap-3 text-sm">
					<nav className="hidden md:flex items-center gap-2 flex-wrap">
						<a
							className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors"
							href="#apresentacao"
						>
							<span>👋</span>
							<span>Apresentação</span>
						</a>
						<a
							className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors"
							href="#experiencia"
						>
							<span>💼</span>
							<span>Experiência</span>
						</a>
						<a
							className="inline-flex items-center gap-1 border rounded-md px-2 sm:px-3 py-1 hover:bg-muted transition-colors"
							href="#contato"
						>
							<span>✉️</span>
							<span>Contato</span>
						</a>
					</nav>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
