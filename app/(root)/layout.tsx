export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-full w-screen font-inter">
      NAVBAR
      {children}
    </main>
  );
}
