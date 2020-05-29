import React from 'react'
import PropTypes from 'prop-types'

import Alien from '../../../../assets/emojis/Alien.png'
import BlowKiss from '../../../../assets/emojis/BlowKiss.png'
import BrokenRedHeart from '../../../../assets/emojis/BrokenRedHeart.png'
import ColdSweat from '../../../../assets/emojis/ColdSweat.png'
import CryingFace from '../../../../assets/emojis/CryingFace.png'
import EyeRoll from '../../../../assets/emojis/EyeRoll.png'
import FaceWithColdSweat from '../../../../assets/emojis/FaceWithColdSweat.png'
import GrinningWithSmilingEyes from '../../../../assets/emojis/GrinningWithSmilingEyes.png'
import HearNoEvilMonkey from '../../../../assets/emojis/HearNoEvilMonkey.png'
import HeartEyes from '../../../../assets/emojis/HeartEyes.png'
import HuggingFace from '../../../../assets/emojis/HuggingFace.png'
import HungryEmoji from '../../../../assets/emojis/HungryEmoji.png'
import KissWithClosedEyes from '../../../../assets/emojis/KissWithClosedEyes.png'
import LoudlyCryingFace from '../../../../assets/emojis/LoudlyCryingFace.png'
import MoneyFace from '../../../../assets/emojis/MoneyFace.png'
import MonkeyFace from '../../../../assets/emojis/MonkeyFace.png'
import NerdWithGlasses from '../../../../assets/emojis/NerdWithGlasses.png'
import OMGFace from '../../../../assets/emojis/OMGFace.png'
import Poop from '../../../../assets/emojis/Poop.png'
import Relieved from '../../../../assets/emojis/Relieved.png'
import Rocket from '../../../../assets/emojis/Rocket.png'
import SadFace from '../../../../assets/emojis/SadFace.png'
import SeeNoEvilMonkey from '../../../../assets/emojis/SeeNoEvilMonkey.png'
import SlightlySmiling from '../../../../assets/emojis/SlightlySmiling.png'
import SmilingDevil from '../../../../assets/emojis/SmilingDevil.png'
import SmilingFaceWithTightlyClosedEyes from '../../../../assets/emojis/SmilingFaceWithTightlyClosedEyes.png'
import SmilingWithEyesOpened from '../../../../assets/emojis/SmilingWithEyesOpened.png'
import SmilingWithSweatEmoji from '../../../../assets/emojis/SmilingWithSweatEmoji.png'
import SmirkFace from '../../../../assets/emojis/SmirkFace.png'
import SparklingPinkHeart from '../../../../assets/emojis/SparklingPinkHeart.png'
import SpeakNoEvilMonkey from '../../../../assets/emojis/SpeakNoEvilMonkey.png'
import Sunglasses from '../../../../assets/emojis/Sunglasses.png'
import TearsOfJoy from '../../../../assets/emojis/TearsOfJoy.png'
import Thinking from '../../../../assets/emojis/Thinking.png'
import TongueOut from '../../../../assets/emojis/TongueOut.png'
import TongueOutWithTightlyClosedEyes from '../../../../assets/emojis/TongueOutWithTightlyClosedEyes.png'
import TongueOutWithWinkingEye from '../../../../assets/emojis/TongueOutWithWinkingEye.png'
import UnamusedFace from '../../../../assets/emojis/UnamusedFace.png'
import UpsideDown from '../../../../assets/emojis/UpsideDown.png'
import VeryAngry from '../../../../assets/emojis/VeryAngry.png'
import Wink from '../../../../assets/emojis/Wink.png'
import YellowMoon from '../../../../assets/emojis/YellowMoon.png'

import Style from './style.module.scss'

const EmojiPicker = props => {
  const emojis = [
    { img: SlightlySmiling, alt: 'Slightly Smiling' },
    { img: HuggingFace, alt: 'Hugging Face' },
    { img: MoneyFace, alt: 'Money Face' },
    { img: Relieved, alt: 'Relieved' },
    { img: SadFace, alt: 'Sad Face' },
    { img: SmilingFaceWithTightlyClosedEyes, alt: 'Smiling Face With Tightly Closed Eyes' },
    { img: SmilingWithEyesOpened, alt: 'Smiling With Eyes Opened' },
    { img: SmilingWithSweatEmoji, alt: 'Smiling With Sweat' },
    { img: SmirkFace, alt: 'Smirk Face' },
    { img: TearsOfJoy, alt: 'Tears Of Joy' },
    { img: TongueOut, alt: 'Tongue Out' },
    { img: TongueOutWithTightlyClosedEyes, alt: 'Tongue Out With Tightly Closed Eyes' },
    { img: TongueOutWithWinkingEye, alt: 'Tongue Out With Winking Eye' },
    { img: UnamusedFace, alt: 'Unamused Face' },
    { img: UpsideDown, alt: 'Upside Down' },
    { img: Sunglasses, alt: 'Sunglasses' },
    { img: Thinking, alt: 'Thinking' },
    { img: Wink, alt: 'Wink' },
    { img: NerdWithGlasses, alt: 'NerdWithGlasses' },
    { img: VeryAngry, alt: 'Very Angry' },
    { img: BlowKiss, alt: 'BlowKiss' },
    { img: ColdSweat, alt: 'ColdSweat' },
    { img: CryingFace, alt: 'CryingFace' },
    { img: OMGFace, alt: 'OMGFace' },
    { img: EyeRoll, alt: 'EyeRoll' },
    { img: FaceWithColdSweat, alt: 'FaceWithColdSweat' },
    { img: GrinningWithSmilingEyes, alt: 'GrinningWithSmilingEyes' },
    { img: HeartEyes, alt: 'HeartEyes' },
    { img: HungryEmoji, alt: 'HungryEmoji' },
    { img: KissWithClosedEyes, alt: 'KissWithClosedEyes' },
    { img: LoudlyCryingFace, alt: 'LoudlyCryingFace' },
    { img: MonkeyFace, alt: 'MonkeyFace' },
    { img: SeeNoEvilMonkey, alt: 'SeeNoEvilMonkey' },
    { img: HearNoEvilMonkey, alt: 'HearNoEvilMonkey' },
    { img: SpeakNoEvilMonkey, alt: 'SpeakNoEvilMonkey' },
    { img: SmilingDevil, alt: 'SmilingDevil' },
    { img: SparklingPinkHeart, alt: 'SparklingPinkHeart' },
    { img: BrokenRedHeart, alt: 'BrokenRedHeart' },
    { img: YellowMoon, alt: 'YellowMoon' },
    { img: Alien, alt: 'Alien' },
    { img: Poop, alt: 'Poop' },
    { img: Rocket, alt: 'Rocket' },
  ]

  return (
    <div 
      className={ Style.emoji_picker_container }
      data-testid="emoji-picker-component"
    >
      Select the emoji

      <div className={ Style.emojis_container }>
        {
          emojis.map(emoji => (
            <img 
              alt={ emoji.alt }
              className={ emoji.img ===  props.emoji ? Style.emoji_selected : '' }
              onClick={ () => props.setEmoji(emoji.img) } 
              key={ emoji.alt }
              src={ emoji.img } 
            />
          ))
        }
      </div>
    </div>
  )
}

EmojiPicker.propTypes = {
  emoji: PropTypes.string.isRequired,
  setEmoji: PropTypes.func.isRequired
}

export default EmojiPicker