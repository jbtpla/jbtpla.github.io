import { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.li`
  display: flex;
  position: absolute;
  width: 320px;
  height: 36px;
  top: ${props => 36 * props.rank}px;
  transition: all 0.5s ease 0.5s;
  font-size: 24px;
  align-content: baseline;
`

const Rank = styled.span`
  color: black;
  display: flex;
  width: 22px;
  justify-content: space-around;
  padding-right: 6px;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

const DisplayName = styled.span`
  color: black;
  display: inline-block;
  padding-left: 6px;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

const Score = styled.span`
  color: black;
  display: inline-block;
  min-width: 50px;
  padding-left: 6px;
  margin-left: auto;
  &:after {
    content: 'pt';
  }
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

const ProfilePicture = styled.img`
  display: flex;
  height: 24px;
  width: 24px;
  border-radius: 20px;
  align-self: center;
`

const LeaderboardItem = (props) => {
    const [score, setScore] = useState(props.score)
    let prevUserRef = useRef(props)

    useLayoutEffect(() => {
        if(!prevUserRef.current) return
        if(prevUserRef.current.score !== props.score) {
            const ANIMATION_DURATION = 100
            const difference = props.score - score
            const timeStart = Date.now()

            const loop = () => {
                let timeElapsed = Date.now() - timeStart
                if (timeElapsed > ANIMATION_DURATION) timeElapsed = ANIMATION_DURATION
                const step = (difference + timeElapsed) % ANIMATION_DURATION
                setScore(score + step)
                if (timeElapsed < ANIMATION_DURATION) requestAnimationFrame(loop)
            }
            requestAnimationFrame(loop)
            setScore(props.score)
        }
    }, [props.score])

    return(
        <Container rank={props.rank}>
            <Rank>{props.rank}</Rank>
            <ProfilePicture src={props.picture} alt="Profile Picture"/>
            <DisplayName>{props.displayName}</DisplayName>
            <Score>{score}</Score>
        </Container>
    )
}

export default LeaderboardItem

LeaderboardItem.propTypes = {
    displayName: PropTypes.string,
    picture: PropTypes.string,
    rank: PropTypes.number,
    score: PropTypes.number,
    userID: PropTypes.string
}