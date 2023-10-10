import React from 'react'
import { topics } from '~/utils/consts'
import Topic from './topic'
import { Link } from 'react-router-dom'
import SidebarSection from '~/components/sidebarSection'

export default function Topics() {
    return (
        <SidebarSection title='Trends for you' more='/trends'>
            {topics.map((topic, index) => (
                <Topic item={topic} key={index} />
            ))}
        </SidebarSection>
    )
}
