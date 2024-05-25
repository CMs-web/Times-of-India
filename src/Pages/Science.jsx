import { useEffect } from 'react'
import Hero from '../components/Hero'

const Science = ({ fetchData }) => {
    useEffect(() => {
        fetchData('science')
    },[])
  return (
    <Hero/>
  )
}

export default Science
