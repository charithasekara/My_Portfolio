import React from 'react';
import './Skills.css';
import ReactImg from "../../public/react.png";
import VueImg from "../../public/vue.png";
import FlutterImg from "../../public/flutter.png";
import HtmlImg from "../../public/html.png";
import CssImg from "../../public/css-3.png";
import BootImg from "../../public/bootstrap.png";
import AiImg from "../../public/ai.png";
import PsImg from "../../public/ps.png";
import XdImg from "../../public/xd.png";
import FigmaImg from "../../public/figma.png";



const Skills = () => {
  const cardsData = [
    { id: 1, imageUrl: '../../public/react.png' },
    { id: 2, imageUrl: '../../public/vue.png' },
    { id: 3, imageUrl: '../../public/flutter.png' },
    { id: 4, imageUrl: '../../public/html.png' },
    { id: 5, imageUrl: '../../public/css-3.png' },
    { id: 6, imageUrl: '../../public/bootstrap.png' },
    { id: 7, imageUrl: '../../public/ai.png' },
    { id: 8, imageUrl: '../../public/ps.png' },
    { id: 9, imageUrl: '../../public/xd.png' },
    { id: 10, imageUrl: '../../public/figma.png' },
  ];

  return (
    <div className="card-grid">
      <div className="card-set">
        {cardsData.slice(0, 5).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
      <div className="card-set">
        {cardsData.slice(5, 10).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
