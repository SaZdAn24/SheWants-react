import React from 'react';
import './Team.css'; 

import masha from "../../../assets/team/masha.jpg"
import vika from "../../../assets/team/vika.JPG"
import viktoria from "../../../assets/team/vika.JPG"



// Данные команды
const teamMembers = [
  {
    id: 1,
    name: 'ANGELIKA ŚLIWIŃSKA',
    title: 'piel. mgr kosmetologii',
    description: 'Angelika jest założycielką marki Face & Body Concept i specjalistką z zakresu medycyny estetycznej. Jej doświadczenie oraz dbałość o szczegóły pomagają w tworzeniu spersonalizowanych zabiegów dla każdej klientki.',
    image: viktoria , 
  },
  {
    id: 2,
    name: 'AGNIESZKA CIEŚLAK',
    title: 'mgr kosmetologii',
    description: 'Agnieszka specjalizuje się w pielęgnacji skóry oraz modelowaniu sylwetki, wykorzystując najnowocześniejsze urządzenia i metody. Jej pasją jest indywidualne podejście do każdego klienta.',
    image: vika ,
  },
  {
    id: 3,
    name: 'MARTYNA GRZYBOWSKA',
    title: 'mgr kosmetologii',
    description: 'Martyna dołączyła do zespołu w 2023 roku i szybko zyskała uznanie klientów. Specjalizuje się w zabiegach laseroterapii i modelowaniu sylwetki, dbając o najwyższą jakość usług.',
    image: masha ,
  },
];

// Компонент одного члена команды
const TeamMember = ({ name, title, description, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="team-member-image" />
      <div className="team-member-info">
        <h4>{title}</h4>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Главный компонент секции команды
const Team = () => {
  return (
    <section className="team">
      <h2>ZESPÓŁ FACE&amp;BODY CONCEPT POZNAŃ</h2>
      <h3>ZAŁOŻYCIELKA MARKI I EKSPERT MEDYCYNY ESTETYCZNEJ</h3>
      {teamMembers.map(member => (
        <TeamMember
          key={member.id}
          name={member.name}
          title={member.title}
          description={member.description}
          image={member.image}
        />
      ))}
    </section>
  );
};

export default Team;
