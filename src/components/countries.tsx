import React from 'react'
import Country from './country'

export interface Root {
  status: string
  totalResults: number
  results: Result[]
  nextPage: string
}

export interface Result {
  article_id: string
  title: string
  link: string
  keywords?: string[]
  creator?: string[]
  description?: string
  content: string
  pubDate: string
  pubDateTZ: string
  image_url: string
  video_url: any
  source_id: string
  source_name: string
  source_priority: number
  source_url: string
  source_icon: string
  language: string
  country: string[]
  category: string[]
  sentiment: string
  sentiment_stats: string
  ai_tag: string
  ai_region: string
  ai_org: string
  duplicate: boolean
}

async function Countries() {
  return (
    <div className='grid grid-cols-4 gap-5 mt-10'>
      <Country countryName= 'united states of america'/>
      <Country countryName= 'germany'/>
      <Country countryName= 'canada'/>
      <Country countryName= 'Iran'/>
    </div>
  )
}

export default Countries
