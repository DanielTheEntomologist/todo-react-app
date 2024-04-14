import styles from "./List.module.scss";
import Column from "../Column/Column.js";
import ColumnForm from "../ColumnForm/ColumnForm.js";
import SearchForm from "../SearchForm/SearchForm.js";

import { useSelector } from "react-redux";
import { getListColumns } from "../../redux/store.js";
import { getLists } from "../../redux/listsRedux.js";
import { useParams, Navigate } from "react-router-dom";

const List = () => {
  const { listId } = useParams();

  const lists = useSelector(getLists.allIds);
  const columns = useSelector((state) => getListColumns(state, listId));

  if (listId === undefined || !lists.includes(listId)) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.list}>
      <SearchForm />
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
