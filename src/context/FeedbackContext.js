import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback

    const fetchFeedback = async () => {
        const response = await fetch(`https://feedback-shuyin.herokuapp.com/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data);
        setIsLoading(false)
    }

    // delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`https://feedback-shuyin.herokuapp.com/feedback/${id}`, { method: 'DELETE' })



            setFeedback(feedback.filter((item) => item.id !== id))

        }


    }
    // add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('https://feedback-shuyin.herokuapp.com/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])

    }
    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update Feedback Item
    const updateFeedback = async (id, updItem) => {

        const response = await fetch(`https://feedback-shuyin.herokuapp.com/feedback/${id}`, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(updItem),
        })
        const data = await response.json()



        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)))
    }
    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, isLoading, updateFeedback }} >{children} </FeedbackContext.Provider>



}

export default FeedbackContext