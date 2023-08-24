import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			components: `${path.resolve(__dirname, "./src/components/")}`,
			public: `${path.resolve(__dirname, "./public/")}`,
			pages: path.resolve(__dirname, "./src/pages"),
			types: `${path.resolve(__dirname, "./src/@types")}`,
		},
	},
});
