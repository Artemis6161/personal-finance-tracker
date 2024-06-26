import React from 'react';
import { Layout, Flex, Progress, Statistic, Col, Row, Card, Space} from 'antd';
const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const { Content } = Layout;

const Dash = () => {
  const [justify, setJustify] = React.useState(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState(alignOptions[0]);
  return (
    <div className='dashboard'>
      
     

    </div>
  );
}

export default Dash;
