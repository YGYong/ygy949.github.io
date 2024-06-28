import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/count";
import "@/style/count.less";
import axios from "axios";
export function Counter() {
  // State to hold the message count
  const [msg, setMsg] = useState(0);
  // Accessing the current count value from the Redux store
  const count = useSelector((state: any) => {
    console.log(state,"count");
    // Returning the value from the counterReducer
    return state.counterReducer.value;
  });
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // Function to handle click event and perform an asynchronous request
  const clickFun = async function () {
    // Incrementing the message count state
    setMsg(msg + 1);
    // Performing a GET request to a mock API and logging the response
    const request = await axios({
      url: "https://mock.mengxuegu.com/mock/66792867be17764121dfc931/api/query",
      method: "get",
    });
    console.log(request);
  };
  // Rendering the component UI
  return (
    <div className="count_page">
      <div className="container">
        {/* Button to increment the count in the Redux store */}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* Displaying the current count and message count */}
        <span>{count}</span>
        <span>{msg}</span>
        {/* Button to decrement the count in the Redux store */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        {/* Button to trigger the clickFun function */}
        <button onClick={clickFun}>点击</button>
      </div>
    </div>
  );
}
