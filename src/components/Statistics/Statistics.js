import React from 'react';

import styles from './Statistics.module.css';

import { getRandomColor } from 'components/GetRandomColor/getRandomHexColor';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
export default Statistics;
