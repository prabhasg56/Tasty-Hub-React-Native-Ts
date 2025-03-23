import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const StaticChart = () => {
    return (
        <View>
            <LineChart
                data={{
                    labels: ['5.3', '6', '7', '8', '9.6'],
                    datasets: [{ data: [500, 1200, 2000, 2300, 1800] }],
                }}
                width={350}
                height={220}
                yAxisLabel=""
                chartConfig={{
                    backgroundColor: '#121212',
                    backgroundGradientFrom: '#121212',
                    backgroundGradientTo: '#121212',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    labelColor: () => 'white',
                }}
                style={{ borderRadius: 16 }}
            />
        </View>
    );
};

export default StaticChart;
