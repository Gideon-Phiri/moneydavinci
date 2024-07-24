export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"${inter.variable} ${ibmPlexSerif.variable}"}>
        {children}
      </body>
    </html>
  );
}
