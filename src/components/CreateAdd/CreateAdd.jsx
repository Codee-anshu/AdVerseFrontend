import React, { useState } from 'react';
import Header from '../Header';
import Button from '../Common/Button/Button';
import './CreateAdd.css';
import bgImage from '../../assets/images/pexels-lilartsy-1213447.jpg';

function CreateAdd() {
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        file: null,
        platforms: [],
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    // Handle platform selection (checkbox)
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData({
                ...formData,
                platforms: [...formData.platforms, value],
            });
        } else {
            setFormData({
                ...formData,
                platforms: formData.platforms.filter((platform) => platform !== value),
            });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        const { name, email, file, platforms } = formData;
        if (!name || !email || !file || platforms.length === 0) {
            alert('Please fill out all fields and select at least one platform.');
            return;
        }

        // Close modal and display card
        setFormSubmitted(true);
        setShowModal(false);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div>
                <Header />
                <div className='mainContainer'>
                    <div className='childContainer'>
                        <img src={bgImage} alt='' style={{ alignSelf: 'cover' }} className='bgImage' />
                    </div>

                    {/* Middle Container (Hidden after form submission) */}
                    {!formSubmitted && (
                        <div className='middleContainer'>
                            <div style={{ padding: '1rem' }}>
                                <h1 style={{ color: 'white', textTransform: 'uppercase' }}>Create an Ad</h1>
                            </div>
                            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <Button title={'ADD'} width={'8rem'} height={'2rem'} onClick={toggleModal} />
                            </div>
                        </div>
                    )}

                    {/* Card Display (After form submission) */}
                    {formSubmitted && (
                        <div className='cardStyle'>
                            <h2 style={{ color: 'white', marginBottom: '1rem', }}>Your Ad is Ready!</h2>
                            <p>Platforms Selected: {formData.platforms.join(', ')}</p>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <h3 style={{ color: 'white' }}>Created By: {formData.name}</h3>
                            </div>
                            <Button title={'Recharge'} width={'8rem'} height={'2rem'} />
                        </div>
                    )}
                </div>

                {showModal && (
                    <div className='modalStyle'>
                        <div className='modalContentStyle'>
                            <h2 style={{ color: 'white' }}>Form Modal</h2>
                            <form onSubmit={handleSubmit} style={{ flex: 1, marginTop: '1rem' }}>
                                {/* Name Input */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                    <label htmlFor='name' style={{ color: 'white', textAlign: 'start' }}>Name:</label>
                                    <input
                                        style={{
                                            padding: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid white',
                                            borderRadius: '5px',
                                            color: 'white',
                                        }}
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                {/* Email Input */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                    <label htmlFor='email' style={{ color: 'white', textAlign: 'start' }}>Email:</label>
                                    <input
                                        style={{
                                            padding: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid white',
                                            borderRadius: '5px',
                                            color: 'white',
                                        }}
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                {/* File Upload */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                    <label htmlFor='file' style={{ color: 'white', textAlign: 'start' }}>File Upload (Images only):</label>
                                    <input
                                        style={{
                                            padding: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid white',
                                            borderRadius: '5px',
                                            color: 'white',
                                        }}
                                        type='file'
                                        id='file'
                                        name='file'
                                        accept='image/*'
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                                {/* Platforms Selection */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                                    <label style={{ color: 'white', textAlign: 'start' }}>Select Platform(s):</label>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <label style={{ color: 'white' }}>
                                            <input
                                                type='checkbox'
                                                value='iOS'
                                                checked={formData.platforms.includes('iOS')}
                                                onChange={handleCheckboxChange}
                                            />
                                            iOS
                                        </label>
                                        <label style={{ color: 'white' }}>
                                            <input
                                                type='checkbox'
                                                value='Android'
                                                checked={formData.platforms.includes('Android')}
                                                onChange={handleCheckboxChange}
                                            />
                                            Android
                                        </label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
                                    <Button title={'CANCEL'} width={'8rem'} height={'2rem'} onClick={toggleModal} />
                                    <Button title={'SUBMIT'} width={'8rem'} height={'2rem'} onClick={handleSubmit} />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CreateAdd;
