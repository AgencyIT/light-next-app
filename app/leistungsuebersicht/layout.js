//import '../globals.css'
// import { Inter } from 'next/font/google'
//import Link from 'next/link'
//import Header from '../components/Header'
//import Content from '../components/Content'
//import Footer from '../components/Footer'






// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leistungsübersicht',
  description: 'tax clarififcation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // <link rel="stylesheet" href="./css/all.min.css" />
        // <link rel="stylesheet" href="./css/min.css" />
        // <link rel="stylesheet" href="./css/menu.min.css" />
        // <link rel="stylesheet" href="./css/reset.css" />
        // <link rel="stylesheet" href="./css/styles.css" />
      </head>
      <body className="">
        // <Header />
        // <Content />
        {children}
        // <Footer />

        // <script src="../script/min.js" />

        // <script src="../script/menu.js" />

        // <script src="../script/custom.js" />
      </body>
    </html>
  )
}
