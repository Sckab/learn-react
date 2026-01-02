import LinkNext from 'next/link'

export default function Link({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  const isExternal = link.startsWith('http')

  return (
    <span className='font-semibold text-powder-blue-300 hover:underline'>
      {isExternal ? (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      ) : (
        <LinkNext href={link}>{children}</LinkNext>
      )}
    </span>
  )
}
