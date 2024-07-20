import React from 'react';
import Slider from 'react-slick';
import './Partnership.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partnership = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='partnership'>
            <div className="container partners slider-container">
                <p>
                The Educate More Initiative is honored to partner with Windle, 
                the Lutheran World Federation (LWF), and the Jesuit Refugee Service
                (JRS). These esteemed organizations share our vision of creating an 
                equitable and inclusive educational environment for all.
                </p>
                <Slider {...settings}>
                    <div className='images'>
                        <h3>Windle International Kenya(WIK)</h3>
                        <p>Windle International is dedicated to increasing access to education
                             for marginalized communities. Through our partnership,
                             we are able to reach even more learners, providing them with the 
                             resources and support they need to excel academically and personally. 
                             Together, we strive to break down educational barriers and create opportunities 
                             for all.</p>
                        <a href="http://www.africapopulation.net" target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                    <div className='images'>
                        <h3>Lutheran World Federation(LWF)</h3>
                        <p>The Lutheran World Federation is committed to supporting vulnerable communities through 
                            education, advocacy, and humanitarian assistance. Our collaboration with LWF enhances
                             our ability to deliver impactful educational programs and initiatives, ensuring that 
                             learners of all backgrounds have access to quality education and the chance to build a brighter future.
                        </p>
                        <a href="https://doyeninstitute.edu.gh/" target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                    <div className='images'>
                    <h3>Jesuit Refugee Service (JRS)</h3>
                    <p>The Jesuit Refugee Service focuses on providing education, emergency 
                        assistance, and human rights services to refugees and displaced 
                        persons. By partnering with JRS, we extend our reach to some of 
                        the most vulnerable populations, offering them educational opportunities 
                        and support that empower them to rebuild their lives and communities.
                        </p>
                    <a href="https://doyeninstitute.edu.gh/" target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Partnership;
