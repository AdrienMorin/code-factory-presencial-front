import { gql } from "@apollo/client";

export const AGREGAR_EQUIPAJE = gql`
  mutation AgregarEquipaje(
    $alto: Float,
    $largo: Float,
    $ancho: Float,
    $peso: Float,
    $tipo: String!,
    $ubicacion: String!,
    $valor: Float!,
  ) {
    agregarEquipaje(
      alto: $alto,
      largo: $largo,
      ancho: $ancho,
      peso: $peso,
      tipo: $tipo,
      ubicacion: $ubicacion,
      valor: $valor,
    ) {
      id
      tipo
      ubicacion
      valor
    }
  }
`;
