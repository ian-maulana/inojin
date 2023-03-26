import { useMemo } from 'react';
import { Colors } from '@resources/utils/ColorManager';
import { Tab, Tabs, Slider, Container } from './styles';

interface Props {
  color?: string;
  items: Array<any>;
  current: string;
  minWidth?: string;
  maxWidth?: string;
  onChange: Function;
}

const Language: React.FC<Props> = ({
  color = Colors.white,
  items,
  current,
  onChange,
  minWidth = '36px',
  maxWidth = '36px',
}) => {
  const eventClick = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const selectedIndex = useMemo(() => {
    const index = items.findIndex((item) => item.value === current);

    return index;
  }, [current, items]);

  return (
    <Container>
      <Tabs color={color}>
        {(items || []).map((item, index) => (
          <Tab
            key={index}
            color={color}
            current={current}
            value={item.value}
            selectedIndex={selectedIndex}
            minWidth={minWidth}
            maxWidth={maxWidth}
            onClick={() => eventClick(item.value)}
          >
            {item.label}
          </Tab>
        ))}
        <Slider
          className="glider"
          minWidth={minWidth}
          maxWidth={maxWidth}
          color={color}
        />
      </Tabs>
    </Container>
  );
};

export default Language;
