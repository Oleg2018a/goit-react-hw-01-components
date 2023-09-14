import css from '../Statistics/statistics.module.css'
import {getRandomColor} from '../../Helpers/getRendomColor'
export const Statistics = ({ title, stats }) => {  
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              className={css.statListItem}
              key={stat.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
}




