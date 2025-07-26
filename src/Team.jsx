import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
  

    const handleAdd = () => {
          const newTeam = team + 1;
          setTeam(newTeam);
    }

    const handleRemove = () => {
        setTeam(team - 1)
    }

    return(
        <div className="team">
            <h2>Players: Heros{team}  </h2>
            <button onClick={handleAdd}>Add one Player</button>
            <button onClick={handleRemove}>Remove one Player</button>
        </div>
    )
}