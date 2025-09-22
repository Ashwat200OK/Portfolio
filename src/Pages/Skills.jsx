import React from 'react'
import { useSelector } from 'react-redux';

export default function Skills() {
    const screenTheme = useSelector((state) => state.screenTheme);
    return (
        <div id='skills' className={`h-80 ${screenTheme ? "bg-[#010409]" : "bg-[#ffffff]"}`}>
            {/* <h3 className='my-20'>Skills</h3> */}
            <div className="slide">
                <div className="animate-marquee">
                    {/* 1st set */}
                    <img src="./front/icons8-html-5.svg" alt="html" className="skill-icons" />
                    <img src="./front/icons8-css-logo.svg" alt="css" className="skill-icons" />
                    <img src="./front/icons8-javascript.svg" alt="js" className="skill-icons" />
                    <img src="./front/react-svgrepo-com.svg" alt="react" className="skill-icons" />
                    <img src="./front/redux.svg" alt="redux" className="skill-icons" />
                    <img src="./front/vitejs.svg" alt="vite" className="skill-icons" />
                    <img src="./front/tailwind-svgrepo-com.svg" alt="tailwind" className="skill-icons" />
                    <img src="./front/bootstrap-svgrepo-com.svg" alt="bootstrap" className="skill-icons" />
                    <img src="./front/material-ui-svgrepo-com.svg" alt="mui" className="skill-icons" />

                    {/* 2nd set (duplicate) */}
                    <img src="./front/icons8-html-5.svg" alt="html" className="skill-icons" />
                    <img src="./front/icons8-css-logo.svg" alt="css" className="skill-icons" />
                    <img src="./front/icons8-javascript.svg" alt="js" className="skill-icons" />
                    <img src="./front/react-svgrepo-com.svg" alt="react" className="skill-icons" />
                    <img src="./front/redux.svg" alt="redux" className="skill-icons" />
                    <img src="./front/vitejs.svg" alt="vite" className="skill-icons" />
                    <img src="./front/tailwind-svgrepo-com.svg" alt="tailwind" className="skill-icons" />
                    <img src="./front/bootstrap-svgrepo-com.svg" alt="bootstrap" className="skill-icons" />
                    <img src="./front/material-ui-svgrepo-com.svg" alt="mui" className="skill-icons" />
                </div>
            </div>

            <div className="slide py-10">
                <div className="animate-marque-backend">
                    {/* 1st set */}
                    <img src="./backend/icons8-nodejs.svg" alt="nodejs" className="skill-icons" />
                    <img src="./backend/icons8-express-js-96.png" alt="expressjs" className="skill-icons" />
                    <img src="./backend/icons8-json-96.png" alt="json" className="skill-icons" />
                    <img src="./backend/icons8-json-web-token.svg" alt="json-web-token" className="skill-icons" />
                    <img src="./backend/mongodb-icon.svg" alt="mongodb" className="skill-icons" />
                    <img src="./backend/postman.svg" alt="postman" className="skill-icons" />

                    {/* 2nd set (duplicate) */}
                    <img src="./backend/icons8-nodejs.svg" alt="nodejs" className="skill-icons flex items-center" />
                    <img src="./backend/icons8-express-js-96.png" alt="expressjs" className="skill-icons" />
                    <img src="./backend/icons8-json-96.png" alt="json" className="skill-icons" />
                    <img src="./backend/icons8-json-web-token.svg" alt="json-web-token" className="skill-icons" />
                    <img src="./backend/mongodb-icon.svg" alt="mongodb" className="skill-icons" />
                    <img src="./backend/postman.svg" alt="postman" className="skill-icons" />

                    {/* 3nd set (duplicate) */}
                    <img src="./backend/icons8-nodejs.svg" alt="nodejs" className="skill-icons" />
                    <img src="./backend/icons8-express-js-96.png" alt="expressjs" fill="white" className="skill-icons" />
                    <img src="./backend/icons8-json-96.png" alt="json" className="skill-icons" />
                    <img src="./backend/icons8-json-web-token.svg" alt="json-web-token" className="skill-icons" />
                    <img src="./backend/mongodb-icon.svg" alt="mongodb" className="skill-icons" />
                    <img src="./backend/postman.svg" alt="postman" className="skill-icons" />
                </div>
            </div>

            <div className="slide">
                <div className="animate-marquee">
                    {/* 1st set */}
                    <img src="./github-icon-1.svg" alt="github" className={`skill-icons ${screenTheme?'filter invert': ''}`} />
                    <img src="./jira-3.svg" alt="expressjs" className="skill-icons" />
                    <img src="./Netlify_Symbol_0.svg" alt="Netlify" className="skill-icons" />
                    <img src="./render-seeklogo.svg" alt="json-web-token" className={`w-84 ${screenTheme?'filter invert': ''}`} />
                    <img src="./stack-overflow.svg" alt="mongodb" className="skill-icons" />
                    <img src="./visual-studio-code.svg" alt="postman" className="skill-icons" />

                    {/* 2nd set (duplicate) */}
                    <img src="./github-icon-1.svg" alt="github" className={`skill-icons ${screenTheme?'filter invert': ''}`} />
                    <img src="./jira-3.svg" alt="expressjs" className="skill-icons" />
                    <img src="./Netlify_Symbol_0.svg" alt="Netlify" className="skill-icons" />
                    <img src="./render-seeklogo.svg" alt="json-web-token" className={`w-84 ${screenTheme?'filter invert': ''}`} />
                    <img src="./stack-overflow.svg" alt="mongodb" className="skill-icons" />
                    <img src="./visual-studio-code.svg" alt="postman" className="skill-icons" />

                    {/* 3nd set (duplicate) */}
                    <img src="./github-icon-1.svg" alt="github" className={`skill-icons ${screenTheme?'filter invert': ''}`} />
                    <img src="./jira-3.svg" alt="expressjs" className="skill-icons" />
                    <img src="./Netlify_Symbol_0.svg" alt="Netlify" className="skill-icons" />
                    <img src="./render-seeklogo.svg" alt="json-web-token" className={`w-84 ${screenTheme?'filter invert': ''}`} />
                    <img src="./stack-overflow.svg" alt="mongodb" className="skill-icons" />
                    <img src="./visual-studio-code.svg" alt="postman" className="skill-icons" />
                </div>
            </div>
        </div>
    )
}
