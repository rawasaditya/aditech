import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
<div className="secondary-background navbar">
  <div className="flex-1">
    <Link href="/">
    <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
    </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="text-muted input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label  className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul  className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar