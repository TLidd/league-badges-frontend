import * as randomColor from 'randomcolor';
import { useEffect, useState } from "react";
import RadarChart from "./RadarChart"
import "../Stylesheets/ChampionChart.css"

const ChampionChart = ({data}) => {
    const [userData, setUserData] = useState(null);

    //creating a state variable to create a custom legend that hides/unhides the data by clicking on champion icon
    const [shownChampions, setShownChampions] = useState([]);

    //the amount of champions to show on the graph from most played to least played
    let champsToShow = 3;
    const [graphColors] = useState(getRandomColors(champsToShow));

    const [chartOptions] = useState({
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
                display: false, // Hides the labels in the middle (numbers)
                stepSize: 25,
            },
            grid: {
                color: 'aqua',
            },
            angleLines: {
                color: 'aqua'
            },
            pointLabels: {
                color:"white",
                font: {
                    size: 15
                }
            },
          },
        },
        animation: false,
        plugins: {
          legend: {
            labels: {
              color: "white"
            },
            display: false
          }
        },
    });

    //set the champions to shown after data comes in for the custom legend
    useEffect(() => {
        if(data?.SummonerName){
            let showChamps = Object.values(data.champions).slice(0,champsToShow).map(champ => {
                return champ.champData.champName;
            })
            setShownChampions(showChamps);
        }
    }, [data, champsToShow])

    //set the graph data with the object data 
    useEffect(() => {
        if(data?.SummonerName && Object.keys(data?.champions).length > 0){
            setUserData({
                labels: Object.keys(Object.values(data.champions)[0].champData.champStats),
                datasets: Object.values(data.champions).slice(0,champsToShow).map((champ, index) => {
                    let champion = {
                        label: champ.champData.champName,
                        data: Object.values(champ.champData.champStats),
                        borderColor: 'black',
                        backgroundColor: graphColors[index],
                        borderWidth: 2,
                        hidden: shownChampions.includes(champ.champData.champName) ? false : true,
                        pointStyle: 'rectRounded',
                        pointRadius: 5,
                        pointBackgroundColor: graphColors[index].slice(0,7),
                    }

                    index++;
                    return champion;
                })
            })
        }
      }, [data, shownChampions, champsToShow, graphColors])

      //custom legend to display/hide dataset of champion clicked
      let championClicked = (e) => {
        let newChampsShow = [...shownChampions];
        if(shownChampions.includes(e.target.name)){
            let index = newChampsShow.indexOf(e.target.name);
            newChampsShow.splice(index, 1);
        }
        else{
            newChampsShow.push(e.target.name);
        }
        setShownChampions(newChampsShow);
      }

    return (
        <div className='chartContainer'>
            {
            userData && 
            <div className='championChart'> <RadarChart chartData={userData} options={chartOptions} /> </div>
            }
            <div className='championLegend'>
                {
                    Object.values(data.champions).slice(0,champsToShow).map((champ, index) => {
                        return <img className='championIcon' key={champ.champData.champName} 
                        style={{border: shownChampions.includes(champ.champData.champName) ? '4px solid ' + graphColors[index].slice(0,7) : '4px solid #FFFFFF00'}} 
                        src={require(`../assets/tiles/${champ.champData.champName}_0.jpg`)}
                        name={champ.champData.champName} alt={champ.champData.champName}
                        onClick={championClicked}/>
                    })
                }
            </div>
        </div>
    )
}

//get x random colors in the available range with a transparency
const getRandomColors = (count) => {
    let availableColors = ['#ff03b3', '#03ff96', '#ffa703', '#00FFFF'];
    let transparencyValues = ['4D', '80', 'CC'];
    let colors = [];
    for(let i = 0; i < count; i++){
        let color = randomColor({hue: availableColors[i], luminosity: 'dark'});
        colors.push(color.concat(transparencyValues[i]));
    }
    return colors;
}

export default ChampionChart