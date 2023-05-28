import { useTranslation } from "react-i18next"

export default function Example() {

  const { t } = useTranslation()

  const stats = [
    { id: 1, name: t('Transactions every 24 hours'), value: t('XX million') },
    { id: 2, name: t('Assets under holding'), value: t('$XXX trillion') },
    { id: 3, name: t('New users annually'), value: t('XXXXX') },
  ]

  return (
    <div className="bg-white py-24 sm:py-35 pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
