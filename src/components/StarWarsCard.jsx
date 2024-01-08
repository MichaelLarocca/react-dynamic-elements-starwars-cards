function StarWarsCard({ type, contentType, contentProps, layout, theme, interaction, onClick }) {
    const Content = contentType;
    const Container = type;
    const Layout = layout;
    const Theme = theme;
    const Interaction = interaction;
  
    return (
      <Container className={`${Layout} ${Theme} ${Interaction}`} onClick={onClick}>
      <Content {...contentProps} />
      </Container>
    );
  }

  export default StarWarsCard;