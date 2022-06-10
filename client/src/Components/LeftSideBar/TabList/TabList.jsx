import React from 'react'
import {BiCategory} from 'react-icons/bi'
import TabCard from "../TabCard/TabCard.Component";
import {GiThreeFriends} from 'react-icons/gi'
import {BsFillCalendar2EventFill} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {FaRegUser} from 'react-icons/fa'
import {FaStoreAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function TabList() {
  return (
    <div className='flex flex-col text-center p-2 mt-4'>
    <Link to="/"><TabCard title='Feed' icon={BiCategory} /></Link>
    <TabCard title='Friends' icon={GiThreeFriends} />
    <TabCard title="Event" icon={BsFillCalendar2EventFill} />
    <TabCard title="Marketplace" icon={FaStoreAlt} />
    <Link to='/profile'><TabCard title="Profile" icon={FaRegUser} /></Link>
    <TabCard title="Settings" icon={FiSettings} />


    </div>
  )
}
