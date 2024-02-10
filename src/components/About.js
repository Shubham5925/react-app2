import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
function About()
{
    
    return(
            
        <>    
            <div>
                <h1>This is About page</h1>
            </div>

            <form>
                FIRST NAME<input type="text" name="t1" required/>
                LAST NAME<input type="text" name="t2" required />
                <button onclick={<Home/>}>Home</button>


                <Link to="/">BACK</Link>
            </form>
        </>

    );
}
export default About;