"use client"
interface ErrorProps {
    error: Error;
    reset: () => void;
}


export default function Error({ error, reset }: ErrorProps) {
    return (
        <div style={{
            padding: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1>
                Error!!!!
            </h1>
            <p> ha ocurrido un error de carga</p>
            <button
                style={{
                    padding: '1% 2%',
                    borderRadius: '5%',
                    boxSizing: 'border-box',
                    border: 'solid 1px pink',
                }}
                onClick={reset}>
                Intentar de nuevo
            </button>

        </div >
    )

}