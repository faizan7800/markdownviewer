import React, {  } from 'react';
import './App.css';
import { marked } from 'marked';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
, between 2 backticks.
\`<div></div>\`
<code>this is code</code>      

// this is multi-line code:
\`\`\`
function anotherExample(Fline,Lline)
{
if(Fline=='\`\`\`'&&Lline=='\`\`\`')
   {
    return multiLineCode;
  }
}
\`\`\`

      
      
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
      
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
      
And if you want to get really crazy, even tables:
      

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
      
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.
      
      
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
      
![freecodecamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`,
    }
  }
  updateMarkdown(markdown){
    this.setState({markdown});
    marked.setOptions({
      breaks: true
    })
  }
  render() {
    document.body.style.background = 'linear-gradient(45deg,violet, pink)'
    const headingOne = {
      textAlign: "center",
      color: "crimson",
      textDecoration: 'none'
    }
    const headingTwo = {
      textAlign: "center",
      color: "white",
      backgroundColor:'grey',
      width:"fit-content",
      display: "block",
      marginLeft: "auto",
      marginRight: 'auto',
      borderRadius:"5px",
      padding: "7px",
      textDecoration: 'none'
    }
     const textareaStyle = {
       width: "70%",
       fontSize: '20px',
       display: "block",
       marginTop: "20px",
       marginLeft: "auto",
       marginRight: 'auto',
       height: "200px",
       backgroundColor: "lightblue",
       padding: "10px 60px",
       border: '2px solid grey',
       borderRadius:"5px"
     }
     const previewStyle = {
       backgroundColor: "grey",
       color:'white',
       width: "80%",
       display: "block",
       marginTop: "20px",
       marginLeft: "auto",
       marginRight: 'auto',
       padding: "10px 60px",
       border: '2px solid grey',
       borderRadius:"5px",
       marginBottom: "20px",
       overflow: 'overlay'
     }
   return(
    <div>
      <h1 style={headingOne}>Markdown Previewer By Faizan</h1>
      <h2 style={headingTwo}>INPUT</h2>
      <textarea style={textareaStyle} value = {this.state.markdown} onChange ={(e)=>{
        this.updateMarkdown(e.target.value);
      }} id = "editor"></textarea>
      
 <h2 style={headingTwo}>OUTPUT/MARKDOWN</h2>
<div style={previewStyle}      id = "preview" 
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div></div>
   )
  }
}
export default App;
