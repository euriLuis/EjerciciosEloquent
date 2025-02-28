//caminos del pueblo
const roads = [
    "Casa de Alice-Casa de Bob","Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos","Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie","Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete","Casa de Grete-Granja",
    "Casa de Grete-Tienda","Plaza de Mercado-Granja",
    "Plaza de Mercado-Oficina de Correos","Plaza de Mercado-Tienda",
    "Plaza de Mercado-Ayuntamiento","Tienda-Ayuntamiento"
];
//devuelve un objeo, con cada direccion como propiedad y cada una contiene un array con las direcciones a la que esta conectado
function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (from in graph) {
            graph[from].push(to);
        } else {
            graph[from] = [to]
        }
    }

    for (const [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}
const roadGraph = buildGraph(roads);

//clase que define el lugar actual en el que esta
class VillageState {
    constructor (place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {

            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != address);

            return new VillageState(destination, parcels);
        }
    }
}

//Crea los paquetes, determin direccion donde estan y direccion a la que hay que llevarlos de forma aleaoria
VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address =  randomPick(Object.keys(roadGraph));
        let place;

        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        
        parcels.push({place, address});
    }
    return new VillageState("Oficina de Correos", parcels);
}

/*Cuenta el numero de turnos, determina cunatos paquetes quedan y en caso de ser
cero detiene el robot, toma la direcion que proporciona el robot y se mueve a este
lugar*/
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Terminado en ${turn} turnos`);
            break;
        }
        let action =  robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Movido a ${action.direction}`);
        
    }
}

//develve un lugar aleatorio de un array dado
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

//robot que toma como direccion un lugar aleatorio del array del state actual.
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}
}

runRobot(VillageState.random(), randomRobot);