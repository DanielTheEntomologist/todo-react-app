import styles from "./List.module.scss";
import Column from "../Column/Column.js";
import ColumnForm from "../ColumnForm/ColumnForm.js";

import { useSelector } from "react-redux";
import { getAllColumns, getListColumns } from "../../redux/store.js";

const List = ({ listId }) => {
  const columns = useSelector((state) => getListColumns(state, listId));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => {
          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              icon={column.icon}
            />
          );
        })}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
