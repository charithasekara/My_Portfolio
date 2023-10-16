import React from 'react';
import './Skills.css';
import ReactImg from '../assets/react.png';
import VueImg from '../../public/vue.png';
import FlutterImg from '../../public/flutter.png';
import HtmlImg from '../../public/html.png';
import CssImg from '../../public/css-3.png';
import BootImg from '../../public/bootstrap.png';
import AiImg from '../../public/ai.png';
import PsImg from '../../public/ps.png';
import XdImg from '../../public/xd.png';
import FigmaImg from '../../public/figma.png';

const Skills = () => {
  return (
    <div className="card-grid">
      <div className="card-set">
        <div className="card">
          <img src={ReactImg} alt="Card 1" />
        </div>
        <div className="card">
          <img src={VueImg} alt="Card 2" />
        </div>
        <div className="card">
          <img src={FlutterImg} alt="Card 3" />
        </div>
        <div className="card">
          <img src={HtmlImg} alt="Card 4" />
        </div>
        <div className="card">
          <img src={CssImg} alt="Card 5" />
        </div>
      </div>
      <div className="card-set">
        <div className="card">
          <img src={BootImg} alt="Card 6" />
        </div>
        <div className="card">
          <img src={AiImg} alt="Card 7" />
        </div>
        <div className="card">
          <img src={PsImg} alt="Card 8" />
        </div>
        <div className="card">
          <img src={XdImg} alt="Card 9" />
        </div>
        <div className="card">
          <img src={FigmaImg} alt="Card 10" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
