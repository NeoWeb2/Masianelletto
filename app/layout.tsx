import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Masaniello - Auténtica Pizzería Napolitana en Barcelona",
  description: "Restaurante Masaniello en Barcelona. Auténtica cocina napolitana honrando la tradición de Tommaso Aniello.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  )
}
