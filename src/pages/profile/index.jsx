import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const { slag } = useParams()
    return (
        <div>
            PROFILE PAGE - {slag}
        </div>
    )
}
