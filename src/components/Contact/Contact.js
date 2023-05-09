import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span><span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorum? Eveniet beatae similique repellat nulla.</span>


                    <div className="flexColStart contactModes">
                        {/* 1st row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 456 78</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>

                            {/*  */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 456 78</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>
                        </div>
                        {/* 2nd row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 456 78</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video   Call Now
                                </div>
                            </div>

                            {/*  */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Messaage</span>
                                        <span className='secondaryText'>021 123 456 78</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact