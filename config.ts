const START_DATE = '2017-07-15'

const config = {
  projectId: 'pk',
  name: 'Paweł Krystkiewicz',
  title: 'Engineer, Designer, Developer',
  description: 'Building Scalable, Impactful Software',
  email: 'pawelkrystkiewicz@outlook.com',
  linkedin: 'https://www.linkedin.com/in/pawelkrystkiewicz',
  github: 'https://github.com/pawelkrystkiewicz',
  repo: 'https://github.com/pawelkrystkiewicz/pawel-krystkiewicz',
  phone: '+48 501 287 748',
  flags: {
    cui: true,
    articles: true,
  },
  analytics: {
    provider: 'umami',
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    scriptUrl: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL,
  },
  startDate: START_DATE,
  totalExperience:
    new Date().getFullYear() - new Date(START_DATE).getFullYear(),
}

export default config
