import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {

    const { t } = useTranslation()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {t("Languages")}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => props.lang('en')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex gap-2' : 'text-gray-700 flex gap-2',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <img src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1480&t=st=1685160600~exp=1685161200~hmac=a4895119553e8886e7e085b572ce86cd294703a0f5e376173138d8a9da0180bb" className='w-10' alt="" />
                                    {t("English")}
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => props.lang('hi')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex gap-2' : 'text-gray-700 flex gap-2',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <img src="https://img.freepik.com/free-photo/flag-india_1401-132.jpg?w=1380&t=st=1685160784~exp=1685161384~hmac=3f108fb0bed0f9cf7b60fa21bcccdee9b1e3c90731034a3aeaf9fd56f59761f9" className='w-10' alt="" />
                                    {t("Hindi")}
                                </div>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => props.lang('fr')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex gap-2' : 'text-gray-700 flex gap-2',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <img src="https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1480&t=st=1685160923~exp=1685161523~hmac=8d2ff7e77f790b21950077f3e4907f9afab77f4dfe735f797464713a9c342f1d" className='w-10' alt="" />
                                    {t("French")}
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => props.lang('ru')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex gap-2' : 'text-gray-700 flex gap-2',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <img src="https://img.freepik.com/free-vector/illustration-russia-flag_53876-27016.jpg?w=1480&t=st=1685160952~exp=1685161552~hmac=1266ef5ad04672598fd1d1faa8ff472d55b97e4003a0c85cb4a76f3416275a0b" className='w-10' alt="" />
                                    {t("Russian")}
                                </div>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
