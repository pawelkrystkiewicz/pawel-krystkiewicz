import { Achievement } from '@/app/types'

export default [
  {
    company: 'Artificial Labs',
    project: 'Contract Builder',
    entries: [
      {
        description:
          "Initiated and led the development of Contract Builder app. Today, it drives the <b>majority</b> of company's revenue and has been adopted by leading insurers in the UK and US. Each client contract is valued at <b>several million GBP annually</b>.",
      },
      {
        description:
          'the app has now major impact on the digital transformation of the London insurance market through integration with Placing Platform Limited (PPL), reducing contract creation time by <b>50%</b> and expediting MRCv3 adoption by <b>75%</b>.',
        source: [
          {
            link: 'https://placingplatformlimited.com/news/integrated-digital-contract-capability-powered-by-artificial/',
            text: "PPL's perspective",
          },
          {
            link: 'https://artificial.io/company/blog/ppl-launches-integrated-digital-contract-capability-powered-by-artificial/',
            text: "Artificial Labs' perspective",
          },
        ],
      },
    ],
  },
  {
    company: 'Curreny One',

    entries: [
      {
        description:
          "Optimized company's frontends load times by <b>25%</b> just by optimizing MongoDB queries.",
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
