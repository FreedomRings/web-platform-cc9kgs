'use strict'

const DEFAULT_COLORS1 = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0']
const DEFAULT_COLORS2 = ['#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538']

const randomScalingFactor = function() {
	return Math.round(Math.random() * 100)
};

document.getElementById('randomizeData').addEventListener('click', function() {
	sampleChart.config.data.datasets[0].data = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
	sampleChart.update()
})

const getTotal = function(myChart) {
	const sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0)
	return `Total: ${sum}`
}

// Doughnut with multiple lines of text in the center
const ctx = document.getElementById('chart1').getContext('2d')
const sampleChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
			backgroundColor: DEFAULT_COLORS2,
			label: 'Dataset 1'
		}],
		labels: ['Item one', 'Item two', 'Item three', 'Item four']
	},
	options: {
		responsive: false,
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			title: {
				display: true,
				fullSize: true,
				text: 'Multiple Lines of Text',
				padding: {
                    top: 20,
                    bottom: 10
                }
			},
			subtitle: {
				display: true,
				fullSize: true,
				text: '(With calculations!)',
				padding: {
                    bottom: 20
                }
			},
			legend: {
				display: true,
				position: 'top',
			},
			doughnutLabel: {
				labels: [
					{
						text: 'The Title',
						color: 'blue',
						font: {
							size: '35',
							family: 'Arial, Helvetica, sans-serif',
							style: 'italic',
							weight: 'bold'
						}
					},
					{
						text: 'The Subtitle',
						font: {
							size: '25'
						},
						color: 'grey'
					},
					{
						text: '$100.00',
						font: {
							size: '20'
						},
						color: 'red'
					},
					{
						text: getTotal,
						font: {
							size: '20'
						},
						color: 'green'
					},
				]
			}
		}
	}
})
