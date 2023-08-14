import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AppStyle/Import.scss'

export const metadata: Metadata = { title: 'Muhammded Karim Aldeen', description: 'Muhammded Karim Aldeen Website', }

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        
    <link rel="apple-touch-icon" href="Karim.svg"  />
    <link rel="icon" type="image/svg+xml" href="Karim.svg" />
    </head>
      <body>
      {children}
      </body>
    </html>
  )
}
