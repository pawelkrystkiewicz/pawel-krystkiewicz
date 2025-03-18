import { Document } from '../components/cv/Document'
import { Downloader } from '../components/cv/Downloader'
import config from '@/config'

const { name } = config
const lastName = name.split(' ').pop()?.toLocaleLowerCase()
export default function CV() {
  return (
    <>
      <Downloader filename={`cv-${lastName}`} pagePath="/cv" />
      <Document />
    </>
  )
}
