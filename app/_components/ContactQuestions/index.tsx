'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const ContactQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Will I receive the same product that I see in the picture?',
            answer: `Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.

Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.`,
        },
        {
            question: 'Where can I view my sales receipt?',
            answer: `A vel dui a conubia vestibulum class varius vel nunc a gravida ut maecenas quisque a proin condimentum sagittis class at faucibus primis parturient dolor scelerisque himenaeos.

A et ullamcorper vestibulum netus a mauris ac consectetur libero volutpat congue congue turpis a consectetur adipiscing sit.Suspendisse leo fringilla a congue tempus nisi conubia vestibulum a in posuere accumsan.`,
        },
        {
            question: 'How can I return an item?',
            answer: `Sit rhoncus aptent dis scelerisque penatibus a dis tempor accumsan suspendisse mollis a et odio ullamcorper magnis ullamcorper cum ullamcorper duis nulla egestas massa.

Vitae amet nostra est leo dignissim justo sodales et ac a conubia bibendum duis ad justo suspendisse a a tellus cubilia vestibulum a dictumst a duis risus.Sociosqu curae consequat nisl litora a eros est consectetur nulla rhoncus a a id felis praesent.Tempus dui integer a cursus id fames parturient.`,
        },
        {
            question: 'Will you restock items indicated as “out of stock”?',
            answer: `Scelerisque parturient sagittis nisi in aliquam dui scelerisque non consectetur aptent hac adipiscing ullamcorper pulvinar sit vestibulum purus facilisi hendrerit mus nisl massa ut parturient consectetur cum justo fames torquent.

Ac curae aliquet vivamus aptent duis congue urna venenatis ridiculus faucibus tincidunt a lorem rutrum nullam potenti adipiscing.Adipiscing.`,
        },
        {
            question: 'Where can I ship my order?',
            answer: `Ut bibendum a adipiscing purus massa a facilisi congue parturient condimentum urna donec per adipiscing cursus nisl nam tristique parturient id.

Aliquam quam at et in ipsum at venenatis a eget dignissim aliquam tincidunt ultrices lacus ad consectetur imperdiet sem suspendisse ante a dapibus potenti.Eu parturient parturient magnis tempus molestie augue quam vulputate hac facilisis est nisl pretium a cursus.`,
        },
    ];

    return (
        <div className="p-12 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 pr-0 lg:pr-10 mb-8 lg:mb-0">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Information Questions</p>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 py-6">
                        <div
                            className="flex justify-between items-center cursor-pointer font-semibold"
                            onClick={() => toggleQuestion(index)}
                        >
                            <span className='text-gray-500 text-sm'>{faq.question}
                            </span>
                            <FiChevronDown
                                className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                            />
                        </div>
                        {activeIndex === index && (
                            <div className="mt-4 text-gray-400">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="w-px bg-gray-300 mx-0 lg:mx-8"></div>
            <div className="lg:w-1/2 pl-0 lg:pl-10">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Information About Us</p>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8">Contact Us For Any Questions</h2>
                <form>
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-2 border border-gray-300 rounded h-32"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-gray-100 text-black hover:bg-gray-500 transition-colors"
                    >
                        Ask a Question
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactQuestions;

