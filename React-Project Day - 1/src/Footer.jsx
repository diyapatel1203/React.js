const Footer = () => {
    return (
        <footer style={{backgroundColor:"antiquewhite",marginTop:"50px",display:"flex",justifyContent:"space-around"}}>
            <div style={{padding:"20px"}}>
                <p>GET IN TOUCH</p>
                <p>Whatsapp: +91 9980127955</p>
                <p>Mon-Sat 10AM - 6PM IST</p>
                <p>Toll Free : INACTIVE</p>
            </div>
            <div style={{padding:"20px"}}>
                <p>Our Story</p>
                <p>Corporate Gifts</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
            </div>
            <div style={{padding:"20px"}}>
                <p>FAQs</p>
                <p>Track Order</p>  
                <p>Store Locator</p>
                <p>Return & Exchange</p>
            </div>
        </footer>
    );
}

export default Footer;