import { useEffect } from "react"
import Hero from "../components/Hero"

const Sports = ({fetchData}) => {
    useEffect(() => {
        fetchData("sports")
    },[])
  return (
   <Hero />
  )
}

export default Sports
