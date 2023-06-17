import React, {  useState } from 'react';
import styles from './Calc.module.css';

const Calc = () => {

    const [displayBox,setDisplayBox] = useState(0);
    const [expresion,setExpresion] = useState([]);
    console.log(expresion)

    const keyHandler = (value) => {
      setDisplayBox(value);
      setExpresion([...expresion,value]);
    }

    const allClear = () => {
      if(displayBox && expresion){
        setDisplayBox(0);
        setExpresion('');
      } else if(displayBox){
        setDisplayBox(0);
      }
    }


    
  const calculate = () => {
    const result = expresion
    .join('')
    .split(/(\D)/g)
    .map(value => (value.match(/\d/g) ? parseInt(value,0) : value))
    .reduce((acc,value,index,array) => {
      switch (value){
        case '+':
          return(acc = acc + array[index + 1]); 
        case '-':
          return(acc = acc - array[index + 1]); 
        case '*':
          return(acc = acc * array[index + 1]);
        case '/':
          return(acc = acc / array[index + 1]);
        default:
          return acc;  
      }
    })
    setDisplayBox(result);
    setExpresion('')
  };

    return (

        <div className={styles.container}>
            <div className={styles.display}>{displayBox}</div>
            <span className={styles.display2}>{expresion}</span>
            <div className={styles.keypad}>
        <section>
          <span colSpan="2"> 
            <button className={styles.key} style={{width: '170px',backgroundColor:'#ffa45ccc'}} onClick={allClear}>AC</button>
          </span>
          <span colSpan="2">
            <button className={styles.key} onClick={() => keyHandler('/')} style={{width: '170px',backgroundColor:'#ffa45ccc'}}>/</button>
          </span>
        </section>
        <section>
          <span>
            <button className={styles.key} onClick={() => keyHandler(7)}>7</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler(8)}>8</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler(9)}>9</button>
          </span>
          <span>
            <button className={styles.key} style={{backgroundColor:'#ffa45ccc'}} onClick={() => keyHandler('*')}>*</button>
          </span>
        </section>
        <section>
          <span>
            <button className={styles.key} onClick={() => keyHandler(4)}>4</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler(5)}>5</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler(6)}>6</button>
          </span>
          <span>
            <button className={styles.key} style={{backgroundColor:'#ffa45ccc'}} onClick={() => keyHandler('-')}>-</button>
          </span>
        </section>
        <section>
          <span>
            <button className={styles.key} onClick={() => keyHandler(1)}>1</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler(2)}>2</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler(3)}>3</button>
          </span>
          <span>
            <button className={styles.key} style={{backgroundColor:'#ffa45ccc'}} onClick={() => keyHandler('+')}>+</button>
          </span>
        </section>
        <section>
          <span colSpan="2">
            <button className={styles.key} style={{width: '170px'}} onClick={() => keyHandler(0)}>0</button>
          </span>
          <span>
            <button className={styles.key} onClick={() => keyHandler('.')}>.</button>
          </span>
          <span>
            <button className={styles.key} style={{backgroundColor:'#ffa45ccc'}} onClick={calculate}>=</button>
          </span>
        </section>
            </div>
        </div>
    );
};

export default Calc;