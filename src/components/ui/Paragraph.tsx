export default function Paragraph({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <p className={`max-w-[75ch] text-powder-blue-100 `}>{children}</p>
}
