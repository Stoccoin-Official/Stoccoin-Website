import { FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon, ChartBarIcon, ArrowsUpDownIcon} from '@heroicons/react/24/solid'
const features = [
  {
    name: 'Open Source',
    description:
      'More eyes on the code, more contributors, and faster resolution of security vulnerabilities.',
    icon: BookOpenIcon,
  },
  {
    name: 'Real-time market data',
    description:
      'Immediate and continuous updating of financial information as it occurs in the market.',
    icon: ArrowsUpDownIcon,
  },
  {
    name: 'Advanced charting and analytics',
    description:
      'Access market analysis using charts & analytics tools for informed decision-making.',
    icon: ChartBarIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Secure Socket Layer (SSL) encryption to protect user data and transactions.',
    icon: LockClosedIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Trade Boosters</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Streamlined Trading Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the comprehensive list of features that make our trading platform stand out from the rest. Our powerful tools and advanced technologies are designed to enhance your trading experience and give you an edge in the market.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
