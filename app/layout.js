import './globals.css'
// import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'






// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steuerberater Ludwig & Ludwig PartG mbB in Gerolzhofen und Bad Kissingen',
  description: 'tax clarififcation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/all.min.css" />
        <link rel="stylesheet" href="./css/min.css" />
        <link rel="stylesheet" href="./css/menu.min.css" />
        <link rel="stylesheet" href="./css/reset.css" />
        <link rel="stylesheet" href="./css/styles.css" />
        <link rel='icon' href='./favicon.ico'></link>

        {/* bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
        {/* end */}

        {/* fonts */}
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </>

      </head>
      <body className="" style={{margin: '0 auto', maxWidth: '2400px'}}>
        <Header />
        <Content />
        {children}
        <Footer />

        <script src="../script/min.js" />

        <script src="../script/menu.js" />

        <script src="../script/custom.js" />

        {/* bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      </body>
    </html>
  )
}
