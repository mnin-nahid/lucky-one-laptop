import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='qna'>
            <h3>How React work?</h3>
            <p>React A seam to seam creates another dom similar to this browser dom called virtual dom. Now this dome looks exactly like the real dome, but this virtual dome is actually a JavaScript object. React builds it in such a way that any element can be modified easily and efficiently using JavaScript with this DOM.
            </p>
            <h3>How useState work?</h3>
            <p>We create a functional component and throw some React hook at it that tracks state, can also update it, and it just works.In our component, we have two destructured arrays that are using the same useState hook with different default values.</p>
        </div>
    );
};

export default Qna;