import { useDispatch, useSelector } from "react-redux";

import { getList,getListAsync } from "../store/listSlice";

const NotFound = () => {
  const dispatch = useDispatch();
  const { listUser, num } = useSelector((state) => state.list);
  return (
    <>
      <p>{num}</p>
      {listUser.map((element, index) => (
        <div>{element.email}</div>
      ))}
      <button
        onClick={() => {
          dispatch(getList());
        }}
      >
        get list
      </button>

      <button
        onClick={() => {
          dispatch(getListAsync(1));
        }}
      >
        get list async
      </button>
    </>
  );
};

export default NotFound;
