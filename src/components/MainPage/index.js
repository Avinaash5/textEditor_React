import {Component} from 'react'
import {GoItalic, GoBold} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BoldButton,
  ItalicButton,
  UnderLineButton,
  StyledTextarea,
} from './styledComponents'

import './index.css'

class MainPage extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onClickBold = event => {
    this.setState(prevState => ({bold: !prevState.bold}))
    console.log(event.target.value)
  }

  onClickItalic = event => {
    this.setState(prevState => ({italic: !prevState.italic}))
    console.log(event.target.value)
  }

  onClickUnderline = event => {
    this.setState(prevState => ({underline: !prevState.underline}))
    console.log(event.target.value)
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <div className="app-container">
        <div className="inner-container">
          <div className="image-text-container">
            <h1> Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-img"
            />
          </div>
          <div className="text-editor-container">
            <ul className="edit-options-container">
              <li>
                <BoldButton
                  type="button"
                  value="bold"
                  data-testid="bold"
                  onClick={this.onClickBold}
                  bold={bold}
                >
                  <GoBold />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  value="italic"
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italic={italic}
                >
                  <GoItalic />
                </ItalicButton>
              </li>

              <li>
                <UnderLineButton
                  type="button"
                  value="underline"
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  underline={underline}
                >
                  <AiOutlineUnderline />
                </UnderLineButton>
              </li>
            </ul>
            <StyledTextarea
              underline={underline}
              bold={bold}
              italic={italic}
              cols="58"
              rows="14"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage
 //by AvinaashOriganti//