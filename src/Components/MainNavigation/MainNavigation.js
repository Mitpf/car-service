export const MainNavigation = () => {


    return (

        <>

            <div id="ribbon">New Nav Bar</div>

            <div id="container">

                <nav>
                    <div id="logo">
                        Company
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li className="dropdown" onmouseover="hover(this);" onmouseout="out(this);"><a href="#">Gallery &nbsp;<i className="fa fa-caret-down"></i></a>
                            <div className="dd">
                                <div id="up_arrow"></div>
                                <ul>

                                    <li><a href="#">2019</a></li>
                                    <li><a href="#">2018</a></li>
                                    <li><a href="#">2017</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Contact</a></li>
                        <li className="dropdown"><a href="#">Others &nbsp;<i className="fa fa-caret-down"></i> </a></li>
                        <div className="dd">
                            <div id="u_a_c"><div id="up_arrow"></div></div>
                            <ul>

                                <li><a href="#">DOCS</a></li>
                                <li><a href="#">API</a></li>
                                <li><a href="#">PROJECTS</a></li>
                            </ul>
                        </div>
                    </ul>
                </nav>
            </div>

        </>

    )
}