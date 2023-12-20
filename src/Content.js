
import { FaTrashAlt } from "react-icons/fa";

export const Content = ({ items, setItem ,changeupdate,deletefn}) => {
  return (
    <main>
      <div children="">
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => changeupdate(item.id)}
                  checked={item.completed}
                />
                <label
                  onDoubleClick={() => changeupdate(item.id)}
                  style={
                    item.completed ? { textDecoration: "line-through" } : null
                  }
                >
                  {item.text}
                </label>
                <FaTrashAlt
                  type="button"
                  tabIndex="0"
                  onClick={() => deletefn(item.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>your list is empty</p>
        )}
      </div>
    </main>
  );
};

export default Content;
