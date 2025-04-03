import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <div className='switch-btn'>
        <label htmlFor="checkbox" style={{ cursor: 'pointer' }}>
          <h5 style={{margin: "0", paddingRight: "0.7rem"}}>Partículas</h5>
        </label>
        <div className="container">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label className="switch" htmlFor="checkbox">
            <span className="slider" />
          </label>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 31px;
    height: 16px;
    position: relative;
  }

  /* Hide default HTML checkbox */
  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .switch {
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--card-proj-border);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  /* The slider */
  .slider {
    width: 12px;
    height: 12px;
    position: absolute;
    left: calc(50% - 12px/2 - 5px);
    top: calc(50% - 12px/2);
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  .checkbox:checked + .switch {
    background-color: var(--text-secondary);
  }

  .checkbox:checked + .switch .slider {
    left: calc(50% - 10px/2 + 5px);
    top: calc(50% - 12px/2);
  }
`;

export default Switch;