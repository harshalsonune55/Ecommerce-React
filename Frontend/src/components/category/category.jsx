import "./category.css";
import { Link, NavLink } from 'react-router-dom';
export default function Category(){
    return(
        <>
         <div className="category">
            <ul>
                <li><NavLink to="/">Cloths</NavLink></li>
                <li><NavLink to="/">electronics</NavLink></li>
                <li><NavLink to="/">saaries</NavLink></li>
                <li><NavLink to="/">men</NavLink></li>
                <li><NavLink to="/">women</NavLink></li>
                <li><NavLink to="/">kids</NavLink></li>
                <li><NavLink to="/">groseries</NavLink></li>
                <li><NavLink to="/">water</NavLink></li>
                <li><NavLink to="/">plumbing</NavLink></li>
                <li><NavLink to="/">decor</NavLink></li>
                <li><NavLink to="/">furniture</NavLink></li>
            </ul>
         </div>
        </>
    );
}