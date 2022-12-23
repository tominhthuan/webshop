import React, { Component } from 'react'

class Content extends Component{
    render(){
        return(
            <div className='content'>
                <div className='style'>
                    <img  className='contentimg' src='../assets/Images/slider1.jpg' alt='thuan'></img>
                    <div className='text-content'>
                        <h1>We Change Everything WordPress</h1>
                        <div>
                            <p> This is the only WordPress theme you will ever want to use. </p>
                        </div>
                        <div className='thuanham'>
                            <a href='thuan' className='btn'>READ MORE</a>
                            <a href='thuan' className='btn2'>Download Now</a>
                        </div>
                        
                    </div>
                </div>
                <div className='shapely_home_parallax '>
                    <section className='section'>
                        <div className='container'>
                            <div className='row align-children'>
                                <div className='textimg'>
                                    <img className='img2' src='../assets/Images/macbook.png' alt='anh'></img>
                                </div>
                                <div className='text-content2'>
                                    <div className=''>
                                        <h2 className='h2'>SEO Friendly</h2>
                                        <div className='mb32'>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Nam pulvinar luctus sem, eget porta orci. 
                                                Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. 
                                                Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
                                            </p>
                                        </div>
                                        <button className='btn3' href='#'>Read more</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </section>
                </div>

                <div className='shapely_home_parallax1 '>
                    <section className='section'>
                        <div className='container'>
                            <div className='row align-children'>
                                 <div className='text-content2'>
                                    <div className=''>
                                        <h2 className='h2'>Portfolio Section</h2>
                                        <div className='mb32'>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nam pulvinar luctus sem, eget porta orci. 
                                            Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. 
                                            Duis commodo vitae ligula et interdum.
                                            </p>
                                        </div>
                                        <button className='btn3' href='#'>See it in action</button>
                                    </div>
                                </div>
                                <div className='textimg' >
                                    <img className='img2' src='../assets/Images/macbook2.png' alt='anh'></img>
                                </div>
                               
                            </div>
                            
                        </div>
                        
                    </section>
                    

                </div>
                <div>
                    <section className='section3'>
                        <div className='container3'>
                            <div className='textimg3'>
                                <img className='img3' src='../assets/Images/slider2.jpg' alt='anh'></img>
                                <div className='text-content3'>
                                    <div className='texth4'>
                                        <h4>Small Parallax Section</h4>
                                        <div className='mb33'>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Vivamus imperdiet rhoncus porta. 
                                            Ut quis sem quis purus lobortis dictum. 
                                            Aliquam nec dignissim nisl.
                                            Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.
                                            </p>
                                        </div>
                                        <a href='thuan' className='btn'>MORE INFO</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='back'>
                    <section className='section4'>
                        <div className='container4'>
                            <div className='text-content4'>
                                <div className='texth5'>
                                    <h5>Limitless Options</h5>
                                    <div className='mb34'>
                                        <p>
                                        Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. 
                                        Fusce vulputate porta faucibus. 
                                        Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante
                                        </p>
                                    </div>
                                    <a href='thuan' className='btn'>Download Now</a>
                                </div>
                            </div> 
                            <div className='textimg4' >
                                <img className='img4' src='../assets/Images/slider3.jpg' alt='anh'></img>
                            </div>      
                        </div>
                    </section>
                </div>
                <div className='back5'>
                    <section className='section5'>
                        <div className='container5'>
                            <div className='texth6'>
                                <h6 className='h6'>Our Latest Projects</h6>
                                <p>Here is our latest projects. You'll love them!</p>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
            
        );
    }
}
export default Content;