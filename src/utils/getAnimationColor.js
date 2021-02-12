const getAnimationColor = () => {
	const theme = typeof window !== "undefined" && window.__theme;

	if (theme === "light") return "#f8f8f2";
	if (theme === "dark") return "#44475a";
};

export default getAnimationColor;
