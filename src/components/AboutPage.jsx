import React from 'react'
import Card from './shared/Card'
import { Link } from 'react-router-dom'
const AboutPage = () => {


    return (
        <Card>
            <h1>About this project</h1>
            <p>Thiks is a react app to leave feedback for a product or service</p>
            <p>Version: 1.0.1</p>


            <p>
                <Link to='/'>Back to Home</Link>

            </p>
        </Card>
    )
}

export default AboutPage