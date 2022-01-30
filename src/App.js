import React from "react";
import { marked } from 'marked'
import styled from 'styled-components'

const defaultMarkdown = `# React Markdown Previewer

## Type Markdown in the Editor!                                    



<br><br>

### Main functionality

- Markdown syntax shows up in the preview window in real time
- There is a predefined input on the page load in the editor
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`
How many shrimps do you have to eat
Before you make your skin turn pink?\`
\`\`\`
Eat too much and you'll get sick
Shrimps are pretty rich

\`\`\`
<br>

> “ Black, white, green or blue
Show off your natural hue
Flamingo, oh oh oh-woah
If you're multicouloured that's cool too
You don't need to change
It's boring being the same
Flamingo, oh oh oh-woah
You're pretty either way ”
― Flamingo, Kero Kero Bonito
<br>

![cute pic](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/643ef1d4-6639-475b-ae06-a3bafad57cba/de161yc-5c143a45-6442-43f6-b973-0fbc15355b09.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0M2VmMWQ0LTY2MzktNDc1Yi1hZTA2LWEzYmFmYWQ1N2NiYVwvZGUxNjF5Yy01YzE0M2E0NS02NDQyLTQzZjYtYjk3My0wZmJjMTUzNTViMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zTQLYwrQSo3jF6gbZyWEkRwYo8z2x1GH4-QZvcVJlmw)
<br>

Coded by **Ahtziri**, 2022 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

marked.setOptions({
  breaks: true
})

class App extends React.Component{
 state = {
   text: defaultMarkdown
 }
  
  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    return (
    <Main id='main'>
        <Title id='title'>Markdown Previewer</Title>
        <Container className='container'>
        <Textarea  id="editor" type='text' value={this.state.text} onChange={this.onChange}/>
        <Preview  id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.text)}}></Preview>
        </Container>
    </Main>
    )
  }
}

const Main = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 100%;  
`

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
`

const Title = styled.h1`
  font-size: 70px;
  font-family: 'Anonymous Pro';
  color: #f8edeb;
`
const Textarea = styled.textarea`
  height: 600px;
  width: 500px;
  padding: 30px;
  margin: 25px;
  overflow-y: auto;
  font-family: 'Anonymous Pro';
  background-color: #353535;
  color: #fae0e4;
  @media(max-width: 900px) {
    height: 300px;
  }
`
const Preview = styled.div`
  height: 600px;
  width: 500px;
  padding: 30px;
  margin: 25px;
  overflow-y: auto;
  font-family: 'Anonymous Pro';
  
  background-color: #fae0e4;
  color: #595758;
  @media(max-width: 900px) {
    height: 300px;
  }
`

export default App;
