import React from 'react';
import './ComparativeTable.css'; // Importar los estilos

import servitjeImage from './lornzo.jpeg';
import slimImage from './slim.jpeg';
import zambranoImage from './Lorenzo_Zambrano.jpg';

const ComparativeTable = () => {
  const data = [
    {
      name: 'Lorenzo Servitje',
      birth: '20 de noviembre de 1918',
      company: 'Grupo Bimbo',
      contribution: 'Fundador de Bimbo, líder en la industria panificadora',
      sector: 'Alimentos',
      leadership: 'Estilo colaborativo, enfocado en el bienestar de sus empleados',
      socialCommitment: 'Gran compromiso social, promoviendo la ética en los negocios',
      innovation: 'Automatización de procesos y expansión internacional',
      legacy: 'Crecimiento global de Bimbo, empresa de reconocimiento mundial',
      image: servitjeImage,
    },
    {
      name: 'Carlos Slim',
      birth: '28 de enero de 1940',
      company: 'Grupo Carso, Telmex, América Móvil',
      contribution: 'Uno de los empresarios más ricos del mundo',
      sector: 'Telecomunicaciones, construcción',
      leadership: 'Estilo de liderazgo directivo y pragmático',
      socialCommitment: 'Fundaciones como "Fundación Carlos Slim" para combatir la pobreza',
      innovation: 'Expansión de telecomunicaciones en América Latina',
      legacy: 'Desarrollo de un imperio empresarial en múltiples sectores',
      image: slimImage,
    },
    {
      name: 'Lorenzo Zambrano',
      birth: '27 de marzo de 1944',
      company: 'CEMEX',
      contribution: 'Líder en la industria cementera',
      sector: 'Construcción',
      leadership: 'Liderazgo global, enfoque en eficiencia y tecnología',
      socialCommitment: 'Iniciativas de sostenibilidad y responsabilidad ambiental',
      innovation: 'Adopción de tecnologías de construcción avanzada',
      legacy: 'Convertir a CEMEX en una de las mayores cementeras del mundo',
      image: zambranoImage,
    },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Fecha de Nacimiento</th>
            <th>Compañía</th>
            <th>Contribución</th>
            <th>Sector</th>
            <th>Liderazgo</th>
            <th>Compromiso Social</th>
            <th>Innovación</th>
            <th>Legado Empresarial</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>
                <img src={person.image} alt={person.name} width="100" height="100" />
              </td>
              <td>{person.birth}</td>
              <td>{person.company}</td>
              <td>{person.contribution}</td>
              <td>{person.sector}</td>
              <td>{person.leadership}</td>
              <td>{person.socialCommitment}</td>
              <td>{person.innovation}</td>
              <td>{person.legacy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparativeTable;
