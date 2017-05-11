import Inferno from 'inferno' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import ArrowIcon from 'react-icons/lib/md/keyboard-backspace'
import { Animate } from 'react-move'

const Arrow = styled(ArrowIcon)`
  width: 15px
  height: 15px;
  transform-origin: right center;
  fill: black;
  fill-opacity: 0.6;
  z-index: 10;
  cursor: pointer;
`

const AngleArrow = ({ angle, styles, translateX, transitionDuration }) => {
  if (angle % 360 <= 0) {
    return (
      <Arrow
        style={{
          transform: `rotate(${angle + 90}deg) translateX(${translateX}px)`,
          ...styles
        }}
      />
    )
  } else {
    return (
      <Animate
        default={{
          rotate: angle + 90
        }}
        data={{
          rotate: angle + 90
        }}
        duration={transitionDuration}
      >
        {data => (
          <Arrow
            angle={angle}
            style={{
              transform: `rotate(${data.rotate}deg) translateX(${translateX}px)`,
              ...styles
            }}
          />
        )}
      </Animate>
    )
  }
}

export default AngleArrow
