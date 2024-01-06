function StarWarsCard({ type, contentType, contentProps, layout, theme, interaction }) {
    const Content = contentType;
    const Container = type;
    const Layout = layout;
    const Theme = theme;
    const Interaction = interaction;
  
    return (
      <Container className={`${Layout} ${Theme} ${Interaction}`}>
        <Content {...contentProps} />
      </Container>
    );
  }

  export default StarWarsCard;