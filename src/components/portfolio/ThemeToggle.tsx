import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const root = document.documentElement;
		setIsDark(root.classList.contains("dark"));
	}, []);

	function toggleTheme() {
		const root = document.documentElement;
		const nextIsDark = !root.classList.contains("dark");
		if (nextIsDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
		setIsDark(nextIsDark);
	}

	return (
		<button
			type="button"
			aria-label="Alternar tema"
			onClick={toggleTheme}
			className="text-sm px-3 py-1 rounded-md border hover:bg-muted transition-colors"
		>
			{isDark ? "🌙 Escuro" : "☀️ Claro"}
		</button>
	);
}
