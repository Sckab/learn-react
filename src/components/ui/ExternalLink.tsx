export default function ExternalLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='font-semibold text-powder-blue-300 hover:underline'
    >
      {children}
    </a>
  )
}
