import { useEffect } from "react"
import Hero from "../components/Hero"

const Health = ({ fetchData }) => {
    useEffect(() => {
        fetchData("health")
    },[])
  return (
 <Hero />
  )
}

export default Health
