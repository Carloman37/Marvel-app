import { Link } from "react-router-dom";
import { format, parseISO, isValid } from 'date-fns';

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => {
        // Récupérer la date de chaque personnage
        const isoDate = character.modified;
        
        // Vérifier si la date est valide et la formater
        const dateObj = parseISO(isoDate);
        const justDate = isValid(dateObj) ? format(dateObj, 'MMM dd, yyyy') : 'Date inconnue';

        return (
          <li key={character.id}>
            <strong>
              <Link to={`/characters/${character.id}`}>
                {character.name}
              </Link>
            </strong>
            <small> {justDate}</small> {/* Afficher la date formatée */}
          </li>
        );
      })}
    </ul>
  );
}
