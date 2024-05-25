import React, { useEffect } from 'react'
import Hero from '../components/Hero'

const Technology = ({ fetchData }) => {
    useEffect(() => {
        fetchData('technology')
    },[])
  return (
    <Hero/>
  )
}

export default Technology
