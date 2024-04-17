import './App.css'

function Navbar() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutUs');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
return (
    <>
    <div className='Navbar'>
    <li>
   <ul><a href="">Home</a></ul>
 <ul><a href=""  onClick={scrollToAbout}>About Us</a></ul>
 <ul><a href="">Our Products</a></ul>
 <ul><a href="">Location</a></ul>
 <ul><a href="">Contacts</a></ul>
  
    </li>
    <div className='Login'>
      <li>
        <ul>Login</ul>
        <ul>Register</ul>
      </li>
    </div>
    </div>
</>
)
}
export default Navbar;