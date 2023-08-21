import "./Personnages.scss";
import React, { useState } from "react";

function Personnages() {
  const initialCharacterState = {
    characterName: "",
    characterClass: "",
    characterLevel: 1,
    bandages: 0,
    attackValue: "",
    defenseValue: "",
    healthPoints: 0,
    goldPieces: 0,
    notesAndQuests: "",
    characterStatus: "",
    clues: 0,
    skills: "",
    spells: "",
    lantern: false,
    position: 1
  };

  const numCharacters = 4; // Nombre de personnages
  const [characters, setCharacters] = useState(
    Array.from({ length: numCharacters }, () => ({ ...initialCharacterState }))
  );

  return (
    <div className="Personnage">
      <h2>Fiches de personnages</h2>
      
      <div className="character-container">
        {characters.map((character, index) => (
          <div className="character-card" key={index}>
            
            <div className="field">
              <label htmlFor={`position${index}`}><span>P</span>osition :</label>
              <input
                type="number"
                value={character.position}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].position = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={1}
                max={4}
                step={1}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`characterName${index}`}><span>N</span>om : </label>
              <input
                type="text"
                id={`characterName${index}`}
                value={character.characterName}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].characterName = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`characterClass${index}`}><span>C</span>lasse : </label>
              <select
                id={`characterClass${index}`}
                value={character.characterClass}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].characterClass = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ backgroundColor: "#ADB5BD" }}
              >
                <option value="">Sélectionner une classe</option>
                <option value="guerrier">Guerrier</option>
                <option value="prêtre">Prêtre</option>
                <option value="roublard">Roublard</option>
                <option value="magicien">Magicien</option>
                <option value="barbare">Barbare</option>
                <option value="elfe">Elfe</option>
                <option value="nain">Nain</option>
                <option value="halfelin">Halfelin</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor={`characterLevel${index}`}><span>N</span>iveau : </label>
              <input
                type="number"
                id={`characterLevel${index}`}
                value={character.characterLevel}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].characterLevel = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={1}
                max={5}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`lantern${index}`}><span>L</span>anterne :</label>
              <input
                type="number"
                value={character.lantern}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].lantern = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={1}
                max={4}
                step={1}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>
            

            <div className="field">
              <label htmlFor={`bandages${index}`}><span>B</span>andages :</label>
              <input
                type="number"
                value={character.bandages}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].bandages = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={0}
                step={1}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>
            <div className="field">
              <label htmlFor={`attackValue${index}`}><span>A</span>ttaque : </label>
              <input
                type="text"
                value={ character.attackValue}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].attackValue = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`defenseValue${index}`}><span>D</span>éfense : </label>
              <input
                type="text"
                value={character.defenseValue}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].defenseValue = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`healthPoints${index}`}><span>V</span>ie :</label>
              <input
                type="number"
                value={character.healthPoints}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].healthPoints = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={0}
                step={1}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="container">
            <div className="field">
              <label htmlFor={`skills${index}`}><span>C</span>ompétences :</label>
              <textarea
                value={character.skills}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].skills = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ width: "80%", height: "150px" , backgroundColor: "#ADB5BD" }}
              />
            </div>
            <div className="field">
              <label htmlFor={`equipments${index}`}><span>E</span>quipements :</label>
              <textarea
                value={character.equipments}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].equipments = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ width: "80%", height: "150px" , backgroundColor: "#ADB5BD" }}
              />
            </div>
            </div>

            <div className="field sort">
              <label htmlFor={`spells${index}`}><span>S</span>orts, <span>P</span>archemins et <span>P</span>ouvoirs :</label>
              <textarea
                value={character.spells}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].spells = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ width: "100%", height: "100px" , backgroundColor: "#ADB5BD" }}
              />
            </div>
            
            <div className="field">
              <label htmlFor={`goldPieces${index}`}><span>T</span>résors : </label>
              <input
                type="number"
                value={character.goldPieces}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].goldPieces = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={0}
                step={1}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`notesAndQuests${index}`}><span>N</span>otes et <span>Q</span>uêtes :</label>
              <textarea
                value={character.notesAndQuests}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].notesAndQuests = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`characterStatus${index}`}><span>S</span>tatus :</label>
              <input
                type="text"
                value={character.characterStatus}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].characterStatus = e.target.value;
                    return updatedCharacters;
                  })
                }
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>

            <div className="field">
              <label htmlFor={`clues${index}`}><span>I</span>ndices :</label>
              <input
                type="number"
                value={character.clues}
                onChange={e =>
                  setCharacters(prevCharacters => {
                    const updatedCharacters = [...prevCharacters];
                    updatedCharacters[index].clues = parseInt(e.target.value);
                    return updatedCharacters;
                  })
                }
                min={0}
                max={3}
                step={1}
                style={{ backgroundColor: "#ADB5BD" }}
              />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
  
export default Personnages;
