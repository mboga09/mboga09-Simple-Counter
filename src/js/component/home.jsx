import React, {useState, useEffect} from "react"; //Primer paso: Para los estados me traigo los hooks useState y useEffect
 
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//Estados se colocan al inicio del componente

	const [counter, setCounter] = useState(0) //declaracion del estado
	//counter: estado, setCounter: metodo que hace que el estado cambie, usesState: se coloca el valor que debe tener el estado (inicia en cero)
	
	let contador = 0;

	const suma = (a) => {
		contador = a+1;
		console.log("variable a =", contador)
		return contador;
	}

	//Funcion para actualizar valor en estado
	//los estados permiten que la pagina se actualice
	const sumaEstadoCounter = (a) => {
		setCounter(a+1)
		return counter
	}

	useEffect(()=>{
		console.log("Use Effect ejecutandose la primera vez y cada vez que cambien el estado counter: ", counter)
	},[counter])

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<button onClick={(evento)=>{sumaEstadoCounter(counter)}}>Suma</button>
			<h1>El valor del contador es {counter}</h1>

		</div>
	);
};

export default Home;
