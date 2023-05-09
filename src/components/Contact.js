import img from '../img/IMG_7340-removebg-preview (1).png'

const Contact = () =>{
    function sendEmail() {
        window.location.href = "mailto:hmjk99@gmail.com";
    }
    return(
        <>
         <section data-aos="zoom-in" data-aos-duration="1000" id="Contact">
            <div class="heading-top">
                <h1 class="section-title">Contact Me</h1>
            </div>
            <div id="content-inside">
                <div id="contact-content">
                    <h1>Do you have a project in mind?</h1>
                    <h3>Do not hesitate and please reach out if you have any project in mind where my skills can help. Thank you.</h3>
                    <h3>Email: hmjk99@gmail.com</h3>
                    <div>
                    <button onclick={sendEmail} class="contact-button open-modal">Contact Me</button>
                    </div>
            </div>
            <img id="contact-img" src={img} alt=""/>
            </div>
        </section>
        </>
  );
}

export default Contact