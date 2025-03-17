import config from '@/config'
import { Envelope, LinkedinLogo, Phone } from '@phosphor-icons/react'

const { name, email, linkedin, github, repo } = config

export const Header = () => {
  return (
    <>
      <div>Paweł Krystkiewicz</div>
      <div>Frontend Developer</div>
      <div>
        <div>
          <Phone />: +48 501 123 456
        </div>
        <div>
          <Envelope />: {email}
        </div>
        <div>
          <LinkedinLogo />: {linkedin}
        </div>
      </div>
    </>
  )
}
