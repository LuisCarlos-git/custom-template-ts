import * as Styled from './styles';

const HelloWorld = () => (
  <Styled.TextContent>
    <Styled.Heading>Welcome my custom template</Styled.Heading>
    <Styled.Subtext>
      By:{' '}
      <a
        href="https://github.com/LuisCarlos-git"
        target="_blank"
        rel="noreferrer"
      >
        https://github.com/LuisCarlos-git
      </a>
    </Styled.Subtext>
  </Styled.TextContent>
);

export default HelloWorld;
