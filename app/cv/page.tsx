import { Document } from '../components/cv/Document'
import { ReportView } from '../components/ReportView'

export default function CV() {
  return (
    <>
      <Document />
      <ReportView slug={'cv'} />
    </>
  )
}
