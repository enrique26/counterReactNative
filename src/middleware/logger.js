////pudes usar los middlewares para ejecutar acciones antes y despues de una accion
////middleware es una funcion que recibe un objeto que accede a los metodos
///getState y dispatch
///que se pasan a la funcion next - permite ejetuar cpdigo antes y despues de que
///la accion fuera lanzada
//// y action es la accion que se lanzo
const logger = ({getState,dispatch}) =>  next => action =>  {
  console.log("antes de la action ===")
  console.log(action)
  /* si no se usa next en esta funcion, el middleware detnedra el lanzamiento de
  la accion en este punto ;
  si se usa next la ejecucion de la accion se llevara acabo
  */
  next(action)
  console.log("despues de la action ===")
}

export default logger;
