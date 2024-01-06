import SmallCardContent from '../components/SmallCardContent';

export function mapCharacters(characters, Component) {
  return characters.map((character, index) => (
    <Component 
      key={index}
      type="div" 
      contentType={SmallCardContent} 
      contentProps={{name: character.name, image: character.image}} 
      layout="small-card" 
      theme={"dark-theme"} 
      interaction="clickable" 
    />
  ));
}
