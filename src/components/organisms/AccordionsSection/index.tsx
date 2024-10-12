import Accordion from '@/components/molecules/Accordion/index'

const index = () => {
  
  const feeFly = [{item: "Tarifa del vuelo", value: "0.00COP"}];
  const chargesFly = [{item: "Cargos adicionales", value: "0.00COP"}];
  const taxesFly = [{item: "Impuestos", value: "0.00COP"}];
  
  return (
    <div className='w-full'>
      <Accordion bodyItems={feeFly} textTitle='Tarifa del Vuelo' priceTitle='0.00COP' ></Accordion>
      <Accordion bodyItems={chargesFly} textTitle='Cargos adicionales' priceTitle='0.00COP' ></Accordion>
      <Accordion bodyItems={taxesFly} textTitle='Impuestos' priceTitle='0.00COP' ></Accordion>
    </div>
  )
}

export default index
