import React, { useState, useEffect } from 'react'
import styled from  'styled-components'
import LeaderboardItem from '../leaderboard_item'
import { jsonArray, TWO_SECONDS_MS } from'./consts'

const Container = styled.ol`
  position: relative;
  display: flex;
  min-width: 400px;
  min-height: 600px;
  margin: 0 auto;
`
const compareScore = (a,b) => {
    return a.score < b.score ? 1 : -1
}

const increaseScore = (users) => {
    const index = Math.floor((Math.random() * 10))
    const additionalScore = Math.floor((Math.random() * 1000))
    const newUsersArray = [...users]
    newUsersArray[index].score += additionalScore
    return newUsersArray
}

const updateUserRanks = (users) => {
    const updatedArray = increaseScore(users)

    return updatedArray.sort(compareScore).map((user, index) => {
        return {...user, rank: index+1}
    })
}

const updateUsersArray = (users) => {
    const updatedRanks = updateUserRanks(users)

    const newUsersArray = [...users]
        return newUsersArray.map((user) => {
            const updatedUser = updatedRanks.filter((updated) => updated.displayName === user.displayName)
            return {
                ...user,
                rank: updatedUser[0].rank,
                score: updatedUser[0].score
            }
    })
}

const Leaderboard = () => {
    const [users, setUsers] = useState([...jsonArray])

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedUsers = updateUsersArray(users)
            setUsers(updatedUsers)
        }, TWO_SECONDS_MS)

        return () => clearInterval(interval)
    })

    return (
        <Container>
            {users.map((user) => {
                return <LeaderboardItem
                    rank={user.rank}
                    userID={user.userID}
                    displayName={user.displayName}
                    score={user.score}
                    picture={user.picture}
                />
            })}
        </Container>
    )
};

export default Leaderboard
