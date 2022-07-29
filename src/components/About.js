import React from 'react' //rfc
//, { useState }
export default function About(props) {

    let myStyle={
        color: props.mode==='dark'?'white':'#42473',
        backgroundColor: props.mode==='dark'?'#42473':'white',
        border: '2px solid',
        borderColor: props.mode==='dark'?'white':'#42473'
    }

  return (
        <div className="container" >
            <h1 className='my-3' style={{color: props.mode==='dark'?'white':'black'}} > About us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
        </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
            Textutils is a free character counter tool that provides instant character count & word count
            statistics for a given text. textutils reports the number of words and characters. absThus it 
            is suitable for writing text with word/ character limits.
        </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
            This word counter software works in any browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
            It suits to count characters in facebook, blog, books, excel documents, pdf, essays, etc.
        </div>
        </div>
    </div>
    </div>
    {/*<div className="container my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary btn-sm">{btnText}</button>
    </div>*/}
        </div>
  )
}
