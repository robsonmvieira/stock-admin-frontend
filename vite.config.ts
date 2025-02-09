// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

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
	},
	test: {
		globals: true,
		setupFiles: ["./setup.ts"],
		environment: "happy-dom",
		exclude: [
			"**/node_modules/**",
			"**/dist/**",
			"**/cypress/**",
			"**/.{idea,git,cache,output,temp}/**",
			"./src/config/**",
			"./src/types/**",
			"**/index.ts"
		],
		coverage: {
			provider: "v8", // ou "istanbul" dependendo do setup
			exclude: [
				"**/node_modules/**",
				"**/dist/**",
				"**/cypress/**",
				"**/.{idea,git,cache,output,temp}/**",
				"./src/config/**",
				"./src/types/**",
				"**/index.ts", // ✅ Exclui qualquer arquivo chamado index.ts em qualquer pasta
				"**/index.tsx" // ✅ Exclui qualquer arquivo chamado index.tsx em qualquer pasta
			]
		}
	}
})
