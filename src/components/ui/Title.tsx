export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h1 className='text-3xl font-semibold text-powder-blue-300 uppercase'>
      {children}
    </h1>
  )
}
