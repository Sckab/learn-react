export default function Link({
  children,
  link,
  otherPage,
}: {
  children: React.ReactNode
  link: string
  otherPage: boolean
}) {
  return (
    <a
      href={link}
      className='font-semibold text-powder-blue-300 hover:underline'
      target={otherPage ? '_blank' : undefined}
      rel={otherPage ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
