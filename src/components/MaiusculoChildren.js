import React from 'react'

function Maiusculo(props){
    const textoDigitado = props.children
    const textoMaiusculo = textoDigitado.toUpperCase()

  return (
  <>
    {textoMaiusculo}
  </>
  )
}
export default Maiusculo