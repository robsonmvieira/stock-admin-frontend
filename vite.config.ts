// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [
					["@babel/plugin-proposal-decorators", { legacy: true }],
					["@babel/plugin-proposal-class-properties", { loose: true }]
				]
			}
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@modules": path.resolve(__dirname, "./src/modules"),
			"@shared": path.resolve(__dirname, "./src/modules/shared")
		}
	}
})
