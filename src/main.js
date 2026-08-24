import Highcharts from 'highcharts';



document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {

        chart: {
        type: 'areaspline'
        
    },  
    legend:{
        enabled:false
    },
        title:{
            text:''
        },

        yAxis:{
            visible: false
        },

        xAxis: {
            lineWidth:0,
            categories: [
            '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
            '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
            '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
            '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
        ],
        
        },

        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        
        plotOptions:{
            series:{
                dataLabels:{
                    enabled:true
                },
            }
        },

        series: [{
        name: '',
        data: [10, 12, 15, 14, 13, 11, 14, 18, 22, 25, 27, 30, 31, 29, 28, 26, 24, 22, 20, 18, 15, 13, 12, 11]
    }]
    });
});

