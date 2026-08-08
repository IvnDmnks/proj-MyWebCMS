export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <main className='flex-1 items-center justify-center bg-bgPrimary'>
      {children}
    </main>
);}