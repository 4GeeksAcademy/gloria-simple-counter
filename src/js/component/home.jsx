import React, {useState, useRef, useEffect} from 'react'
import SimpleCounter from './SimpleCounter.jsx';


function home() {
    const [counter, setCounter] = useState(0); // Estado para el contador
    const [isRunning, setIsRunning] = useState(false); // Estado para saber si el contador está corriendo
    const intervalRef = useRef(null); // Referencia para el intervalo

    // Función para iniciar o reanudar el contador
    const startCounter = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
            setIsRunning(true);
        }
    };

    // Función para detener el contador
    const stopCounter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
        }
    };

    // Función para reiniciar el contador
    const resetCounter = () => {
        stopCounter();
        setCounter(0);
    };

    // Cálculo de los dígitos del contador
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = counter % 10;

    // Limpieza del intervalo al desmontar el componente
    useEffect(() => {
        return () => stopCounter();
    }, []);

    return (
        <div>
            <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
            <div className="buttons d-flex justify-content-center">
                <button className='btn btn-success' onClick={startCounter} disabled={isRunning}>Play</button>
                <button className='btn btn-danger ms-2' onClick={stopCounter} disabled={!isRunning}>Stop</button>
                <button className='btn btn-warning ms-2' onClick={resetCounter}>Reset</button>
            </div>

        </div>
    );
}

export default home;
