import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./Expansion.css";




function ExpansionPanel({ title, children }) {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className="panel">
        <div className={`panel-header ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
          {title}
          <span className={`arrow ${expanded ? 'arrow-expanded' : 'arrow-collapsed'}`}>
            <FontAwesomeIcon icon={expanded ? faAngleUp : faChevronDown} />
          </span>
        </div>
        {expanded && (
          <div className="panel-content">
            {children}
          </div>
        )}
      </div>
    );
  }

  export default ExpansionPanel;