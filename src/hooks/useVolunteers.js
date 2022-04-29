import { useEffect, useState } from "react"

const useVolunteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return [volunteers, setVolunteers];
}
export default useVolunteers;