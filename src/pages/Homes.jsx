import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function Home() {
    // For hero section animation
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="font-sans">

            {/* Hero Section */}
            <section className={`bg-gradient-to-r from-blue-600 to-teal-500 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Welcome to Harmony Health</h1>
                    <p className="text-xl md:text-2xl text-center max-w-3xl mb-10">Where compassionate care meets medical excellence</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105">Book Appointment</button>
                        <button className="border-2 border-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all">Our Services</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Harmony Health</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Physicians</h3>
                            <p className="text-gray-600">Our team consists of board-certified specialists committed to providing exceptional care tailored to your needs.</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Advanced Technology</h3>
                            <p className="text-gray-600">We utilize state-of-the-art technology to ensure accurate diagnoses and effective treatments.</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Compassionate Care</h3>
                            <p className="text-gray-600">We treat every patient with dignity, respect, and empathy, focusing on your overall well-being.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="h-48 bg-blue-200">
                                <img src='https://media.istockphoto.com/id/151811860/photo/doctor-and-nurses-wheeling-patient-in-gurney-down-hospital-corridor.jpg?s=612x612&w=0&k=20&c=LJZVFfP_lOovs82EJBaMsXuUYyUY_GiPNdgTmSXBQps=' />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Emergency Care</h3>
                                <p className="text-gray-600 mb-4">24/7 emergency services with rapid response times and expert care.</p>
                                <a href="#" className="text-blue-600 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="h-48 bg-teal-200"><img src='https://yasuico.com/wp-content/uploads/neurosurgery-1024x684.jpeg'/></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Specialized Surgery</h3>
                                <p className="text-gray-600 mb-4">Advanced surgical procedures performed by skilled specialists.</p>
                                <a href="#" className="text-blue-600 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="h-48 bg-indigo-200"><img src='https://reddymedicalgroup.com/wp-content/uploads/2024/03/AdobeStock_606494893-1920w.webp' /></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Pediatric Care</h3>
                                <p className="text-gray-600 mb-4">Compassionate healthcare services designed specifically for children.</p>
                                <a href="#" className="text-blue-600 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="h-48 bg-purple-200"><img src='https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/909903056PreventiveMedicinePhysician.jpg=ws1280x960' /></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Preventive Medicine</h3>
                                <p className="text-gray-600 mb-4">Comprehensive health screening and preventive care programs.</p>
                                <a href="#" className="text-blue-600 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Patient Testimonials</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-bold">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">John Doe</h4>
                                    <p className="text-gray-500 text-sm">Cardiac Patient</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "The care I received at Harmony Health was exceptional. The cardiac team went above and beyond to ensure my comfort and recovery."
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-bold">SM</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Sarah Miller</h4>
                                    <p className="text-gray-500 text-sm">Maternity Patient</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "From prenatal care to delivery, the maternity team made me feel safe and supported. I couldn't have asked for a better birth experience."
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-bold">RJ</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Robert Johnson</h4>
                                    <p className="text-gray-500 text-sm">Surgery Patient</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "The surgical team was incredibly professional and attentive. My recovery was faster than expected thanks to their excellent care."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Better Healthcare?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-10">Schedule your appointment today and discover why Harmony Health is the preferred choice for compassionate, quality care.</p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105">Book Your Appointment</button>
                </div>
            </section>
        </div>
    );
}

export default Home;