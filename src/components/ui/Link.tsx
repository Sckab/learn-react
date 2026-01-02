export default function Link({
  children,
  link,
}: Readonly<{
  children: React.ReactNode
  link: string
}>) {
  return (
    <a
      href={link}
      className='font-semibold text-powder-blue-300 hover:underline'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}
