import React from "react";

const SecondsCounter = (props) => {

	//Cada una de estas funciones toma la longitud total de los segundos que se van contando, 
	//y muestra el valor del indice de acuerdo con el digito definida 
	//Cada funcion se encarga de mostrar el valor que se encuentra en el indice 0 (acorde a su posicion)

	const segundo1 = (tiempo) => {
		let segundos = tiempo
		let longitud = String(segundos).length
		let ultimaPosicion = String(segundos)[longitud-1] //longitud da el numero de elementos, por eso se le resta 1
		return ultimaPosicion
	} 

	const segundo2 = (tiempo) => {
		let segundos = tiempo
		let longitud = String(segundos).length
		let ultimaPosicion = String(segundos)[longitud-2]
		return ultimaPosicion
	}

	const segundo3 = (tiempo) => {
		let segundos = tiempo
		let longitud = String(segundos).length
		let ultimaPosicion = String(segundos)[longitud-3]
		return ultimaPosicion
	} 

	const segundo4 = (tiempo) => {
		let segundos = tiempo
		let longitud = String(segundos).length
		let ultimaPosicion = String(segundos)[longitud-4]
		return ultimaPosicion
	} 

	const segundo5 = (tiempo) => {
		let segundos = tiempo
		let longitud = String(segundos).length
		let ultimaPosicion = String(segundos)[longitud-5]
		return ultimaPosicion
	} 

	const segundo6 = (tiempo) => {
		let segundos = tiempo
		let longitud = String(segundos).length
		let ultimaPosicion = String(segundos)[longitud-6]
		return ultimaPosicion
	} 

	//Retorna lo que hace cada una de las funciones de arriba, si existe props.seconds entonces se muestra
	// props.seconds, si no, se muestra "No existe..."
	return (
		<div className="container row bg-dark text-white mx-auto w-75 mt-4 rounded d-flex justify-content-center" style={{height: "150px"}}>
			<div className="col-1 display-1 d-flex justify-content-center pt-3 ps-3" style={{height: "150px"}}>🕑</div>
			<div className="col-11" style={{height: "150px"}}>
				<div className="row">
					<div className="col-2 display-1 d-flex justify-content-center" style={{height: "150px"}}>
						<div className="col-2 display-1 d-flex justify-content-center rounded my-2 " style={{backgroundColor: "#353535", width: "100px", paddingTop: "10px"}} >{(props.seconds && parseInt(segundo6(props.seconds))>=1) ? segundo6(props.seconds) : "0"}</div>
					</div>

					<div className="col-2 display-1 d-flex justify-content-center">
						<div className="col-2 display-1 d-flex justify-content-center rounded my-2 " style={{backgroundColor: "#353535", width: "100px", paddingTop: "10px"}} >{(props.seconds && parseInt(segundo5(props.seconds))>=1) ? segundo5(props.seconds) : "0"}</div>
					</div>

					<div className="col-2 display-1 d-flex justify-content-center">
						<div className="col-2 display-1 d-flex justify-content-center rounded my-2 " style={{backgroundColor: "#353535", width: "100px", paddingTop: "10px"}} >{(props.seconds && parseInt(segundo4(props.seconds))>=1) ? segundo4(props.seconds) : "0"}</div>
					</div>

					<div className="col-2 display-1 d-flex justify-content-center">
						<div className="col-2 display-1 d-flex justify-content-center rounded my-2 " style={{backgroundColor: "#353535", width: "100px", paddingTop: "10px"}} >{(props.seconds && parseInt(segundo3(props.seconds))>=1) ? segundo3(props.seconds) : "0"}</div>
					</div>

					<div className="col-2 display-1 d-flex justify-content-center">
						<div className="col-2 display-1 d-flex justify-content-center rounded my-2 " style={{backgroundColor: "#353535", width: "100px", paddingTop: "10px"}} >{(props.seconds && parseInt(segundo2(props.seconds))>=1) ? segundo2(props.seconds) : "0"}</div>
					</div>

					<div className="col-2 display-1 d-flex justify-content-center">
						<div className="col-2 display-1 d-flex justify-content-center rounded my-2 " style={{backgroundColor: "#353535", width: "100px", paddingTop: "10px"}} >{(props.seconds && parseInt(segundo1(props.seconds))>=1) ? segundo1(props.seconds) : "0"}</div>
					</div>
				</div>
				
			</div>
			{/* <div className="col-2">{props.seconds? props.seconds : "No existe el atributo seconds"}</div> */}
		</div>)

	
}

export default SecondsCounter;  //Necesario para poder exportar este archivo
//export {Card}
