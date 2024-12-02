import { Link } from "react-router-dom";
import { format, parseISO, isValid } from 'date-fns';

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => {
        // Récupérer la date de chaque personnage
        const UpDate = character.modified;
        
        // Vérifier si la date est valide et la formater
        const laDate = parseISO(UpDate);
        const NewDate = isValid(laDate) ? format(laDate, 'MMM dd, yyyy') : 'Date inconnue';

        return (
          <li key={character.id}>
            <strong>
              <Link to={`/characters/${character.id}`}>
                {character.name}
              </Link>
            </strong>
            <small> {NewDate}</small> {/* Afficher la date formatée */}
          </li>
        );
      })}
    </ul>
  );
}
