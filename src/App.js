import React, { useCallback, useEffect, useState } from 'react';

import { Header } from './components/header/index'
import { Modal } from './components/modal/index'
import { Forms } from './components/forms/index'
import { Item } from './components/item/index'
import { Table } from './components/table/index'
import products from './data/data';

import close from '../src/assets/images/close.svg'

import styles from './App.module.css';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [items, setItems] = useState([])

  const onItemAdd = useCallback((item) => {
    const newItem = {...item, number: items.length+1}
    const newItems = [...items, newItem]
    setItems(newItems)
    JSON.stringify(newItems)
    localStorage.setItem("items", JSON.stringify(newItems));
  },[items])


  useEffect(() => {
    const stringifiedItems = localStorage.getItem("items")
    if (stringifiedItems === undefined || stringifiedItems === null) {
      setItems(products)
    } else {
      const items = JSON.parse(stringifiedItems)
      setItems(items)
    } 
  },[])

  return (
    <div className="App">
      <Header/>
      { modalActive ? (
        null 
      ) : (
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Table />
            {items.map((product) => {
              return (
                <Item key ={product.number} number={product.number} title={product.title} price={product.price} date={product.date}/>
              )
            })}
            <div className={styles.btnContaier}>
              <button className={styles.newItemBtn} onClick={() => setModalActive(true)}>
                New item
              </button>
            </div>
          </div>
        </div>
      )}
      <Modal
          active={modalActive}
          setActive={setModalActive}
          animation="zoom"
          maskAnimation="fade"
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeaderWrapper}>
            <div className={styles.modalHeader}>
              <div className={styles.title}>New item</div>
              <div className={styles.closeBtnTop} onClick={() => setModalActive(false)}>
                <img className={styles.burgerIcon} src={close} alt='close'/>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.modalBody}>
            <Forms onClose={() => setModalActive(false)} onItemAdd={onItemAdd}/>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
