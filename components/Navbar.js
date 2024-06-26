import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown.tsx'

const Navbar = () => {
  const [drop, setDrop] = useState(false)
  return (
    <nav className="p-3 sticky bg-white mb-2 z-[99] top-0  flex w-full justify-between md:justify-evenly items-center">
      <div>
        <Link href="/">
          <p className="text-4xl cursor-pointer">BARB </p>
        </Link>
      </div>
      <div>
        <div className="flex flex-col md:hidden">
          <MenuIcon
            onClick={() => {
              if (drop == true) {
                setDrop(false)
              } else {
                setDrop(true)
              }
            }}
            className="transition-all transform cursor-pointer h-7 w-7 md:hidden"
          />
          <div className="">{drop ? <Dropdown /> : null}</div>
        </div>

        <ul className="hidden space-x-5 md:flex">

          <a href="/Cities">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Cities
            </li>
          </a>
          <a href="/Career">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Career
            </li>
          </a>
          <a href="/Press">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Press
            </li>
          </a>
          <a href="/bugReport">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Report
            </li>
          </a>

          <a href="/contactUs">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Contact us
            </li>
          </a>
        </ul>
      </div>

      <div>
        <a href="/login" className="">

        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
  ADMIN
</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
