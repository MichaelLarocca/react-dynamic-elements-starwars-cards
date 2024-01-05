function StarWarsCard({ type, contentType, layout, theme, interaction }) {
    const Content = contentType;
    const Container = type;
    const Layout = layout;
    const Theme = theme;
    const Interaction = interaction;
  
    return (
      <Container className={`${Layout} ${Theme} ${Interaction}`}>
        <Content />
      </Container>
    );
  }

  export default StarWarsCard;