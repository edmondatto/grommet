import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DataChart, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const data = [];
for (let i = 0; i < 8; i += 1) {
  const v = Math.sin(i / 2.0);
  data.push({
    date: `2020-${((i % 12) + 1).toString().padStart(2, 0)}-01`,
    percent: Math.abs(v * 100),
  });
}

const AxesDataChart = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <DataChart
        data={data}
        chart={{ key: 'percent' }}
        xAxis={{
          key: 'date',
          guide: true,
          render: i => (
            <Text margin={{ horizontal: 'xsmall' }}>
              {new Date(data[i].date).toLocaleDateString('en-US', {
                month: 'short',
              })}
            </Text>
          ),
        }}
        yAxis={{ guide: true }}
        gap="small"
        steps={[7, 1]}
      />
    </Box>
  </Grommet>
);

storiesOf('DataChart', module).add('Axes', () => <AxesDataChart />);