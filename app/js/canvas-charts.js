window.onload = function () {
    var chart1 = new CanvasJS.Chart("chartContainer_1", {
        theme: "theme1",
        title:{
            text: "Exercise type [%]",
            fontWeight: "bolder",
            fontColor: "#008B8B",
            fontFamily: "tahoma",
            fontSize: 25,
            padding: 10
        },
        data: [//array of dataSeries
            { //dataSeries object

                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type: "doughnut",
                indexLabelPlacement: "outside",
                showInLegend: true,
                dataPoints: [
                    { label: "step class", y: 18, name: "step class"},
                    { label: "treadmil", y: 29, name: "treadmil" },
                    { label: "pilates class", y: 40, name: "pilates class" },
                    { label: "weight lifting", y: 34, name: "weight lifting" },
                    { label: "zumba class", y: 24, name:"zumba class"  }
                ]
            }
        ]
    });
    chart1.render();
    chart1 = {};

    var chart2 = new CanvasJS.Chart("chartContainer_2", {
        theme: "theme1",
        title:{
            text: " Total Workout [min]",
            fontWeight: "bolder",
            fontColor: "#008B8B",
            fontFamily: "tahoma",
            fontSize: 25,
            padding: 10
        },
        data: [//array of dataSeries
            { //dataSeries object

                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type: "bar",
                dataPoints: [
                    { label: "step class", y: 18 },
                    { label: "treadmil", y: 29 },
                    { label: "pilates class", y: 40 },
                    { label: "weight lifting", y: 34 },
                    { label: "zumba class", y: 24 }
                ]
            }
        ]
    });
    chart2.render();
    chart2 = {};

    var chart3 = new CanvasJS.Chart("chartContainer_3", {

        theme: "theme1",

        title:{
            text: "Total calories burned [kcal]",
            fontWeight: "bolder",
            fontColor: "#008B8B",
            fontFamily: "tahoma",
            fontSize: 25,
            padding: 10
        },

        data: [  //array of dataSeries
            { //dataSeries - first quarter
                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type: "column",
                name: "You",
                showInLegend: true,
                dataPoints: [
                    { label: "January", y: 4500 },
                    { label: "February", y: 3250 },
                    { label: "March", y: 4000 },
                    { label: "April", y: 3740 },
                    { label: "May", y: 2400 }
                ]
            },

            { //dataSeries - second quarter

                type: "column",
                name: "Average user",
                showInLegend: true,
                dataPoints: [
                    { label: "January", y: 5400 },
                    { label: "February", y: 3100 },
                    { label: "March", y: 2870 },
                    { label: "April", y: 3400 },
                    { label: "May", y: 2380 }
                ]
            }
        ],
        /** Set axisY properties here*/
        axisY:{
            suffix: "kcal"
        }
    });
    chart3.render();
    chart3 = {};
}