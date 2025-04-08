import { Achievement } from '@/app/types'

export default [
  {
    company: 'Artificial Labs',
    project: 'Contract Builder',
    entries: [
      {
        description: `Spearheaded the development of Contract Builder app.
        Today, it drives the <b>majority</b> of company's revenue and has been adopted by leading insurers in the UK and US.
        Each client contract is valued at <b>several million GBP annually</b>.`,
      },
      {
        description: `The app has significantly transformed the London insurance market by integrating with Placing Platform Limited (PPL),
        achieving a <b>50%</b> reduction in contract creation time and facilitating a <b>75%</b> increase in MRCv3 adoption.`,
        source: [
          {
            link: 'https://placingplatformlimited.com/news/integrated-digital-contract-capability-powered-by-artificial/',
            text: `PPL's perspective`,
          },
          {
            link: 'https://artificial.io/company/blog/ppl-launches-integrated-digital-contract-capability-powered-by-artificial/',
            text: `Artificial Labs' perspective`,
          },
        ],
      },
    ],
  },
  {
    company: 'Curreny One',

    entries: [
      {
        description: `Optimized company's frontends load times by <b>25%</b> just by optimizing MongoDB queries.`,
      },
    ],
  },
  {
    company: '4LS',
    entries: [
      {
        description:
          'Architected and delivered full Track&Trace experience system replacing legacy Delphi systems. Stack: PERN + GQL',
      },
    ],
  },
] satisfies Achievement[]
