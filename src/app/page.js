import Link from 'next/link'
import React from 'react'
import ArtworksPage from './ArtworkPage'

export default function page() {
  return (
    <div> 
      <H1> Welcome to Imperial Coronado ArtGallery.</H1>
      <Link href='/artwork'>
        See artwork details.
      </Link>
    <ArtworksPage/>
    </div>
  )
}
