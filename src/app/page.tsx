import Divider from '@/components/ui/Divider'
import Link from '@/components/ui/Link'
import Paragraph from '@/components/ui/Paragraph'
import Table from '@/components/ui/Table'
import TableRow from '@/components/ui/TableRow'

export default function Home() {
  return (
    <div className='mx-auto w-1/2'>
      <Paragraph className='text-center'>
        This site contains my projects built for learning React following{' '}
        <Link link='https://github.com/florinpop17/app-ideas'>
          florinpop17/app-ideas
        </Link>
        .
      </Paragraph>

      <Divider />

      <Table
        tableHead={[
          'Project Name',
          'Difficulty',
          'Link',
        ]}
      >
        <TableRow
          projectName='pass-gen'
          difficulty='easy'
          link='/pass-gen'
        />
      </Table>
    </div>
  )
}
