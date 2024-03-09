import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const navigation = [
    { name: 'HOME', to: '/', current: false },
    { name: 'SERVICES', to: '/services', current: false },
    { name: 'GELLERY', to: '/gallery', current: false },
    { name: 'CONTACT US', to: '/contact', current: false },
]

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="nline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div
                                className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <Link to="/" className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-20 w-auto lg:hidden"
                                        src={logo}
                                        alt="Glimpse of Design"
                                    />
                                    <img
                                        className="hidden h-20 w-auto lg:block"
                                        src={logo}
                                        alt="Glimpse of Design"
                                    />
                                </Link>
                                <div className="hidden sm:ml-6 sm:flex sm:flex-1 sm:items-center sm:justify-center">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={'hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                                aria-current={'page'}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Mobile View*/}
                    <Disclosure.Panel className="sm:hidden bg-white hover:bg-white">
                        <div className="space-y-1 px-2 pt-2 pb-3 bg-white hover:bg-white text-center">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    as="a"
                                    to={item.to}
                                    className={'hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
