import React from 'react'
import Map from '../_components/ContactMap';
import ContactQuestions from '../_components/ContactQuestions';
import BlogCarusel from '../_components/BlogCarusel';

const ContactPage = () => {
  return (
    <div>
        <Map />
        <ContactQuestions />
        <BlogCarusel />
    </div>
  )
}

export default ContactPage;