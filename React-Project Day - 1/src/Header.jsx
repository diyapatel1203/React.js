const Header = () => {
    return (
        <header style={{backgroundColor:"antiquewhite",display:"flex",justifyContent:"space-between",margin:"auto"}}>
            <div style={{marginLeft:"100px"}}>
                <h2>LOGO</h2>
            </div>
            <div style={{marginLeft:"50%",marginRight:"100px"}}>
                <ul style={{listStyle:"none",display:"flex"}}>
                    <li style={{padding:"10px"}}>HOME</li>
                    <li style={{padding:"10px"}}>ABOUT</li>
                    <li style={{padding:"10px"}}>CONTACT</li>
                    <li style={{padding:"10px"}}>SERVICE</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
