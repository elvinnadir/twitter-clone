import React from 'react'
import Search from './search'
import Premium from '~/layout/main/rightbar/premium'
import Topics from '~/layout/main/rightbar/topics'
import Follow from './follow'
import Footer from './footer'

export default function Rightbar() {
  return (
    <aside className='w-[350px] mr-2.5'>
      <Search />
      <Premium />
      <Topics />
      <Follow />
      <Footer />
    </aside>
  )
}
