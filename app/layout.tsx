export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"/>
        <link href="./output.css" rel="stylesheet"></link>        
      </head>
      <body>
        <main>          
          {children}
        </main>
      </body>
    </html>
  )
}