import "../styles/globals.css";

export const metadata = {
  title: 'Amakha Paris Cadastro',
  description: 'Amakha Paris',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
  