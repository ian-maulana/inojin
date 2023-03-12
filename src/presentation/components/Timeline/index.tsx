import { Description, List, Title, Year } from './styles';

interface Props {
  lists: Array<any>;
}

const Timeline: React.FC<Props> = ({ lists }) => {
  return (
    <>
      <List>
        {lists.map((list) => (
          <li key={list.id}>
            <Year>{list.year}</Year>
            <Title>{list.title}</Title>
            <Description>{list.description}</Description>
          </li>
        ))}
      </List>
    </>
  );
};

export default Timeline;
