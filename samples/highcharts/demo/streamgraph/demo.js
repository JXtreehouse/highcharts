Highcharts.chart('container', {

    chart: {
        type: 'streamgraph'
    },

    title: {
        text: 'Highcharts streamgraph study'
    },

    yAxis: {
        opposite: true,
        title: {
            text: 'Number of animals'
        }
    },

    plotOptions: {
        series: {
            pointStart: 1987
        }
    },

    series: [{
        name: 'Cats',
        data: [0, 1, 1, 2, 3, 4, 3, 5, 6, 8, 7, 7, 8, 6, 9, 11, 10, 11, 14, 12,
            17, 17, 11, 12, 12, 14, 17, 16, 23, 12]
    }, {
        name: 'Dogs',
        data: [0, 1, 2, 2, 4, 4, 4, 7, 7, 8, 5, 11, 9, 9, 9, 8, 11, 10, 15, 10,
            16, 21, 18, 16, 21, 23, 14, 21, 18, 21]
    }, {
        name: 'Rabbits',
        data: [0, 1, 2, 2, 3, 3, 3, 4, 4, 7, 6, 8, 10, 9, 10, 11, 12, 10, 14,
            15, 17, 9, 16, 18, 11, 19, 15, 20, 16, 19]
    }, {
        name: 'Cows',
        data: [0, 1, 2, 4, 5, 6, 10, 7, 9, 14, 15, 10, 20, 14, 16, 26, 23, 26,
            30, 28, 26, 37, 25, 31, 29, 28, 39, 26, 50, 48]
    }, {
        name: 'Sheep',
        data: [0, 1, 3, 4, 5, 9, 6, 12, 9, 12, 15, 17, 17, 18, 19, 17, 30, 24,
            24, 26, 28, 20, 32, 39, 42, 41, 33, 35, 42, 48]
    }, {
        name: 'Hens',
        data: [0, 1, 4, 3, 6, 9, 9, 10, 12, 11, 14, 18, 18, 18, 15, 22, 18, 32,
            27, 28, 33, 37, 33, 32, 27, 44, 28, 32, 35, 34]
    }, {
        name: 'Horses',
        data: [0, 1, 2, 4, 6, 8, 9, 7, 8, 10, 14, 15, 11, 18, 14, 20, 20, 29,
            27, 19, 22, 29, 29, 27, 39, 27, 26, 44, 40, 30]
    }]

});