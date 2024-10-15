import Accordion from '@/components/molecules/Accordion/index'

const index = () => {
  
  const feeFly = [{item: "Tarifa del vuelo", value: "165.800COP"}];
  const chargesFly = [{item: "Cargos adicionales", value: "0.00COP"}];
  const taxesFly = [{item: "Impuestos", value: "77.608COP"}];
  
  return (
    <div className='w-full'>
      <Accordion bodyItems={feeFly} textTitle='Tarifa del Vuelo' priceTitle='165.800COP' ></Accordion>
      <Accordion bodyItems={chargesFly} textTitle='Cargos adicionales' priceTitle='0.00COP' ></Accordion>
      <Accordion bodyItems={taxesFly} textTitle='Impuestos' priceTitle='77.608COP' ></Accordion>
    </div>
  )
}

export default index
