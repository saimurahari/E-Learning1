import react from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
function Nav(){
    return(
        <header className="header">
                <a href="/Home" className="logo">SAcademy.</a>
                <nav className="navbar">
                <a className="active" href="/Home">Home</a>
                <a href="#coursename">Courses</a>
                <a href="#courseid">Programs</a>
                <a href="#">Experts</a>
                <a href="/todo">Todo</a>
            </nav>
            <div className="icons">
            <a href="/" className="login"><AiOutlineLogin /></a>
            
        </div>
        
    </header>
    );
}
export default Nav;