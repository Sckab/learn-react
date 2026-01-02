export default function Paragraph({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return (
    <p className={`${className} max-w-[75ch] text-powder-blue-100 `}>
      {children}
    </p>
  )
}
