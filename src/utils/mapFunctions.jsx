import SmallCardContent from '../components/SmallCardContent';

export function mapCharacters(characters, Component, setSelectedCharacter, selectedCharacter) {
  return characters.map((character, index) => {
      return (
          <Component 
              key={index} 
              type="div" 
              contentType={SmallCardContent} 
              contentProps={{
                  name: character.name, 
                  image: character.image, 
                  isSelected: selectedCharacter === character
              }} 
              layout="small-card" 
              theme="dark-theme" 
              interaction="clickable" 
              onClick={() => setSelectedCharacter(character)} 
          />
      )
  });
}